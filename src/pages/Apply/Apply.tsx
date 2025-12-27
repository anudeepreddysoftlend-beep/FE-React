// Forms.tsx
import React from 'react';
import InitialApplicationForm from '../../components/InitialForm/InitialApplicationForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Forms: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center mb-12 sm:mb-8 py-8 px-8 sm:py-6 sm:px-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
        <h1 className="text-white mb-3 text-4xl sm:text-3xl sm:text-[1.75rem]">Loan Application Form</h1>
        <p className="text-white/95 text-lg sm:text-base">Please fill in all required fields to proceed.</p>
      </div>

        <div className="w-full max-w-[1000px] mx-auto sm:px-2">
          <InitialApplicationForm
            onSuccess={async (data) => {
              console.log('Success:', data);

              // 1. Convert form → backend format
              const payload = {
                customer: {
                  first_name: data.firstName,
                  middle_name: data.secondName,
                  last_name: data.lastName,
                  // pan_number: data.panNumber,
                  date_of_birth: data.dob ? new Date(data.dob) : null,
                  contact_number: data.contactNumber,
                  email_address: data.email,
                  new_take_home_salary: Number(data.netTakeHomeSalary),
                  consent: data.termsAccepted,

                  lead: {
                    loan_amount_required: Number(data.loanAmount),
                    loan_type: data.loanType
                  }
                }
              };

              console.log("Mapped Payload:", JSON.stringify(payload));


              try {
                // 2. API CALL HERE
                const response = await axios.post(
                  "https://j5rpiig7656zd54cyhn6lxhiuq0qictj.lambda-url.ap-south-1.on.aws/customer",
                  payload,
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );

                console.log("API Success:", response.data);
                navigate('/thank-you');
                window.scrollTo({ top: 0, behavior: "smooth" });

              } catch (error: any) {
                console.error("API Error:", error);

                if (error.response) {
                  alert("Server Error: " + error.response.data?.message);
                } else {
                  alert("Network Error. Please try again.");
                }
              }


              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>


    </>
  );
};

export default Forms;
