import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-full">

      {/* ===================== SEO (HIDDEN) ===================== */}
      <p className="hidden">
        SoftLend is India's trusted digital lending platform offering personal loans,
        business loans, MSME loans, gold loans, home loans, and auto loans with paperless KYC.
      </p>

      {/* ===================== LOAN CARDS ===================== */}
      <section
        className="
          flex justify-center
          px-3 pt-3
          mb-12 md:mb-56
        "
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 w-full max-w-7xl">
          {[
            { label: "Personal Loan", icon: "👤" },
            { label: "Home Loan", icon: "🏠" },
            { label: "Business Loan", icon: "🏢" },
            { label: "Auto Loan", icon: "🚗" },
            { label: "Loan Against Property", icon: "🏦" },
            { label: "Gold Loan", icon: "🪙" },
          ].map((loan) => (
            <Link
              key={loan.label}
              to="/apply"
              className="
                relative bg-white
                py-3 px-2
                rounded-xl text-center
                shadow-[0_6px_18px_rgba(79,114,205,0.15)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_36px_rgba(79,114,205,0.25)]
                group
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

              <div className="relative text-2xl md:text-3xl mb-1">
                {loan.icon}
              </div>

              <div className="relative text-[0.7rem] md:text-sm font-medium leading-tight">
                {loan.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer
        className="
          bg-gradient-to-b from-[#eef4ff] to-[#e6eeff]
          py-4 md:py-5 px-4
          shadow-[0_-6px_20px_rgba(99,102,241,0.12)]
        "
      >
        <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap text-sm md:text-base">

          <Link
            to="/about"
            className={`font-medium transition-colors ${
              hoveredLink === "about" ? "text-indigo-600" : "text-slate-600"
            }`}
            onMouseEnter={() => setHoveredLink("about")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`font-medium transition-colors ${
              hoveredLink === "contact" ? "text-indigo-600" : "text-slate-600"
            }`}
            onMouseEnter={() => setHoveredLink("contact")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Contact
          </Link>

          <div
            className={`relative font-medium cursor-pointer ${
              hoveredLink === "legal" ? "text-indigo-600" : "text-slate-600"
            }`}
            onMouseEnter={() =>
              window.innerWidth > 768 && setIsLegalDropdownOpen(true)
            }
            onMouseLeave={() =>
              window.innerWidth > 768 && setIsLegalDropdownOpen(false)
            }
            onClick={() =>
              window.innerWidth <= 768 &&
              setIsLegalDropdownOpen((v) => !v)
            }
          >
            Legal

            {isLegalDropdownOpen && (
              <div
                className="
                  absolute top-[130%] left-1/2 -translate-x-1/2
                  bg-white rounded-xl py-2 min-w-[170px]
                  shadow-[0_18px_40px_rgba(0,0,0,0.12)] z-10
                "
              >
                <Link
                  to="/terms-and-conditions"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy-policy"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/grievance"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                >
                  Grievance
                </Link>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
