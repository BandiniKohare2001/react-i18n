import I18n from "./utils/i18n"
import './App.css';
import React, { useState } from "react";

import poster2 from "./poster2.webp"

function App() {
  const usersCount = 15;
  // const [ lang, setLang] = useState("hi");
  return (

   <div className="container">
    <img src={poster2} from alt="poster2" className="img2" />
  
    <h1 className="welcome">{I18n("welcomeMessage")}</h1>
    <h1 className="i18">I18n</h1>
    <p> {I18n("normalMessage")}
    </p>
    <select
                defaultValue={localStorage.getItem("lang")}
                onChange={(e) => {
                    localStorage.setItem("lang", e.target.value);
                    window.location.reload();
                }}
                className="text-container">
                <option value="en">English</option><hr />
                <option value="hi">Hindi</option><hr />
                <option value="mr">Marathi</option>
            </select>
    <p>{I18n("greetingMessage")}</p>
    <p>{I18n("greetingMessage2")}</p>

    {/* <p> {usersCount} users are learning in this session. </p> */}
    {/* <p>{I18n("userStatMessage", "<studentCount>", usersCount)}</p> */}
    </div>
  );
}

export default App;
