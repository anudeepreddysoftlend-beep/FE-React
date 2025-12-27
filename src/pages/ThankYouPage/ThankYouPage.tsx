import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-gradient-to-br from-blue-50 via-blue-50 to-white animate-fadeInPage">
      <div className="bg-white p-10 sm:p-8 sm:px-6 rounded-2xl max-w-[550px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] animate-slideUp">
        <div className="text-6xl sm:text-5xl text-green-600 font-bold mb-5 animate-popIn">&#10004;</div>

        <h1 className="text-3xl sm:text-2xl font-bold text-slate-800 mb-2.5">
          Thank You!
        </h1>

        <p className="text-lg sm:text-base text-blue-700 mb-4.5 font-medium">
          Your loan application has been submitted successfully.
        </p>

        <p className="text-base sm:text-sm leading-relaxed text-slate-700 mb-7.5 max-w-[95%] mx-auto">
          Our team is currently reviewing your details. You will receive a call
          or email from our loan specialists shortly.  
          We appreciate your time and look forward to assisting you further!
        </p>

        <button 
          className="bg-slate-800 text-white py-3.5 px-6.5 border-none rounded-[10px] text-base cursor-pointer font-semibold transition-all duration-200 hover:bg-slate-900 hover:-translate-y-0.5 active:translate-y-0" 
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
