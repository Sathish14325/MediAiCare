import React from "react";
import { motion } from "framer-motion";
import {
  Clipboard,
  Cog,
  DollarSign,
  HeartPulse,
  Hospital,
  Shield,
  Calendar,
  BrainCircuit,
  Stethoscope,
  User,
  Users,
  Clock,
  ChartBar,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Button = ({ children, primary, onClick, ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      primary
        ? "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
        : "text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500"
    }`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ icon: Icon, title, description, primary }) => (
  <div
    className={`rounded-lg shadow-md p-6 ${
      primary ? "bg-white" : "bg-gray-100"
    }`}
  >
    <Icon className="w-8 h-8 text-blue-600 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Button primary>Explore</Button>
  </div>
);

const Section = ({ children, bg, height }) => (
  <section className={`${height || "py-20"} ${bg} content-center`}>
    <div className="container mx-auto px-4 h-full">{children}</div>
  </section>
);

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <Section
          bg="bg-gradient-to-r from-blue-600 to-cyan-500"
          height="min-h-[30rem]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-white mb-6 text-left">
                Empowering Healthcare with AI
              </h1>
              <p className="text-xl text-white mb-10 text-left">
                MediAI Care offers real-time disease prediction, AI-powered
                recommendations, and seamless doctor consultations—all in one
                intelligent platform.
              </p>
              <div className="flex gap-4">
                <Button primary onClick={() => handleButtonClick("/login")}>
                  Get Started
                </Button>
                <Button onClick={() => handleButtonClick("/patient")}>
                  Book Appointment
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-gray-100 w-full h-full min-h-[20rem] rounded-xl overflow-hidden"
            >
              <img
                src="home-1.jpeg"
                alt="AI Healthcare"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </Section>

        {/* FEATURES SECTION */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BrainCircuit,
                title: "AI Disease Prediction",
                description:
                  "Predict diseases based on symptoms using machine learning and medical datasets.",
              },
              {
                icon: Calendar,
                title: "Appointment Booking",
                description:
                  "Book appointments with certified doctors through an intuitive scheduler.",
              },
              {
                icon: User,
                title: "Personalized Health Advice",
                description:
                  "Receive customized medications, diets, and precaution suggestions based on the diagnosis.",
              },
            ].map((card, index) => (
              <Card key={index} {...card} primary />
            ))}
          </div>
        </Section>

        {/* MODERN OPS SECTION */}
        <Section bg="bg-gray-100" height="min-h-[25rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-200 w-full h-64 min-h-[18rem] rounded-lg overflow-hidden"
            >
              <img
                src="home-2.jpeg"
                alt="AI Diagnosis"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-left">
                Smarter Healthcare, Better Outcomes
              </h2>
              <p className="text-xl text-gray-600 mb-8 text-left">
                MediAI Care uses intelligent algorithms to assist early
                diagnosis, minimize human errors, and enhance clinical
                decision-making.
              </p>
              <div className="flex gap-4">
                <Button primary onClick={() => handleButtonClick("/login")}>
                  Try Now
                </Button>
                <Button onClick={() => handleButtonClick("/login")}>
                  Consult a Doctor
                </Button>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* WHY US SECTION */}
        <Section>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose MediAI Care?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HeartPulse,
                title: "Accurate Predictions",
                description:
                  "Trained models ensure high accuracy in disease diagnosis using health indicators.",
              },
              {
                icon: Shield,
                title: "Data Privacy",
                description:
                  "We encrypt all health data and follow HIPAA-grade security practices.",
              },
              {
                icon: Stethoscope,
                title: "Doctor Integration",
                description:
                  "Our system bridges AI predictions with real-time consultations by licensed doctors.",
              },
              {
                icon: Globe,
                title: "Scalable & Cloud-Ready",
                description:
                  "Runs seamlessly on the cloud with scalable architecture for hospitals or clinics.",
              },
            ].map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </Section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} MediAI Care. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
