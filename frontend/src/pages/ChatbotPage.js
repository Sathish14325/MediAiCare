import React, { useState, useRef, useEffect } from "react";
import MessageBubble from "../components/MessageBubble";
import axios from "axios";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const keywords = ["doctor", "consult", "specialist"];
  const containsKeyword = (text) => {
    const lower = text.toLowerCase();
    return keywords.some((kw) => lower.includes(kw));
  };

  const handleSend = async () => {
    if (!question.trim()) return;

    const userMessage = { sender: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/chatbot/ask",
        {
          question,
        }
      );

      const botMessage = {
        sender: "bot",
        text: response.data.answer,
      };

      const updatedMessages = [...messages, userMessage, botMessage];

      // Add "Find Doctor" button message if keywords are detected
      if (containsKeyword(question)) {
        updatedMessages.push({
          sender: "bot",
          isButton: true,
          text: "It seems like you’re looking for a doctor. Want to find one?",
        });
      }

      setMessages(updatedMessages);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, something went wrong while getting a response.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuestion(transcript);
    };

    recognition.start();
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-3xl h-[90%] flex flex-col overflow-hidden">
        <div className="bg-blue-600 text-white text-xl font-bold p-5 rounded-t-3xl flex items-center gap-2">
          🤖 MediAI Care Assistant
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MessageBubble
                sender={msg.sender}
                text={msg.text}
                isLoading={msg.isLoading}
                isButton={msg.isButton}
              />
            </motion.div>
          ))}

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <MessageBubble sender="bot" text="Typing..." isLoading={true} />
            </motion.div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="p-4 bg-blue-50 border-t border-blue-100 flex gap-2">
          <input
            type="text"
            className="flex-1 border border-blue-300 rounded-xl px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Ask a medical question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={startVoiceInput}
            className="bg-white border border-blue-300 text-blue-600 px-3 py-2 rounded-xl hover:bg-blue-100"
          >
            <Mic size={20} />
          </button>
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition transform hover:scale-105"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
