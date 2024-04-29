import React from "react";
import "./style.css";
import History from "./components/History";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Sign from "./components/Sighn";
import Sinistre from "./components/Sinistre"
export default function App() {
  return (
    <div>
      <Sinistre/>
      <Sign/>
      <Login/>
      <History/>
      <Footer/>
    </div>
  );
}
