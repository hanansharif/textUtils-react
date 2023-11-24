import ReactDOM from "react-dom/client";
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    },2000)
  }

  const toggleMode = () => {
    if (mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = 'rgba(41, 29, 29, 0.77)';
       showAlert("Dark Mode has ben enabled","success");
      }
    else { 
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has ben enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} /> 
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />} />
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
