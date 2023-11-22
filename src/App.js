import I18n from "./utils/i18n"
import './App.css';
import React, { useState } from "react";

function App() {
  const usersCount = 15;
  // const [ lang, setLang] = useState("hi");
  return (

   <div>
    <h1>{I18n("welcomeMessage")}</h1>
    <p> {I18n("normalMessage")}
    </p>
    <select
                defaultValue={localStorage.getItem("lang")}
                onChange={(e) => {
                    localStorage.setItem("lang", e.target.value);
                    window.location.reload();
                }}
                className="text-container">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
            </select>
    <h3>{I18n("greetingMessage")}</h3>

    <p> {usersCount} users are learning in this session. </p>
    </div>
  );
}

export default App;
