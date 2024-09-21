import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Textform from "./components/TextForm.js";
import Alert from "./components/Alert.js";
// import About from "./components/About.js";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
const dark = {
  theme: "dark",
  backgroundColor: "black",
  color: "white",
  display: "disable blue DarkMode",
};
const light = {
  theme: "light",
  backgroundColor: "white",
  color: "black",
  display: "enable blue DarkMode",
};

function App1() {
  const [Mode, changeMode] = useState(light);
  const [alert, setAlert] = useState({ type: null, msg: "" });
  let showAlert = (type1, msg1) => {
    setAlert((prevState) => ({
      ...prevState, // Spread the previous state
      type: type1, // Update the 'type' property
      msg: msg1, // Update the 'msg' property
    }));
    setTimeout(() => {
      setAlert((prevState) => ({
        ...prevState, // Spread the previous state
        type: null, // Update the 'type' property
        msg: "", // Update the 'msg' property
      }));
    }, 2000);
  };
  const toggle = () => {
    if (Mode.theme === "light") {
      changeMode(dark);
      document.body.style.backgroundColor = "rgb(3, 39, 69)";
      document.body.style.color = "white";
      document.title = "text UtilsDarkMode";
    } else {
      changeMode(light);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "text UtilsLightMode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <NavBar title="textUtils2" mode={Mode} toggleFunction={toggle} />
      
        <div className="container">
          {/* {<Routes>
            <Route path="/about" element={<About   mode={Mode}/>} />
            <Route */}
              {/* // path="/"
              // element={ */}
              {/* //   <> */}
                   <Alert alertDetail={alert} /> 
                  <Textform heading="TextUtils" Alert={showAlert} mode={Mode}/>
                {/* </>  */}
            {/* />
          </Routes>} */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App1;
