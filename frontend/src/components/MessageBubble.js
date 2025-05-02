import React from "react";
import { motion } from "framer-motion";

const typingAnimation = {
  animate: {
    opacity: [0.3, 1, 0.3],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const MessageBubble = ({ sender, text, isLoading = false }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-2xl max-w-[75%] shadow ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        {isLoading ? (
          <motion.div {...typingAnimation} className="text-sm">
            {text}
          </motion.div>
        ) : (
          <span className="whitespace-pre-line">{text}</span>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
