import React, { useState } from "react";
import "./App.css"

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });
  const [error, setError] = useState("");

  const calculateAge = () => {
    setError("");

    if (!day || !month || !year) {
      setError("This field is required");
      return;
    }

    const birthDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();

    if (birthDate > today) {
      setError("Must be in past");
      return;
    }

    const validDaysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > validDaysInMonth) {
      setError("Must be a valid day");
      return;
    }
    if (month < 1 || month > 12) {
      setError("Must be a valid month");
      return;
    }

    
    let diffYears = today.getFullYear() - birthDate.getFullYear();
    let diffMonths = today.getMonth() - birthDate.getMonth();
    let diffDays = today.getDate() - birthDate.getDate();

    if (diffDays < 0) {
      diffMonths--;
      diffDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (diffMonths < 0) {
      diffYears--;
      diffMonths += 12;
    }

    setAge({ years: diffYears, months: diffMonths, days: diffDays });
  };

  return (
    <div className="content">
    
      <div className="input">
        <div>
          <label>Day</label>
          <input id="dayIn" type="number" value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div>
          <label>Month</label>
          <input id="monthIn" type="number" value={month} onChange={(e) => setMonth(e.target.value)} />
        </div>
        <div>
          <label>Year</label>
          <input id="yearIn" type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
      </div>

      {error && <p className="error">{error}</p>}

     
      <button id="calculateBtn" onClick={calculateAge}>Calculate</button>

      
      <div className="output">
        <p><span id="yearOut">{age.years}</span> Years</p>
        <p><span id="monthOut">{age.months}</span> Months</p>
        <p><span id="dayOut">{age.days}</span> Days</p>
      </div>

      <div className="attribution">
        <a href="https://www.crio.do" target="_blank" rel="noopener noreferrer">Crio</a>
      </div>
    </div>
  );
};

export default AgeCalculator;
