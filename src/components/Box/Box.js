import React, { useState, useEffect } from "react";
import "./Box.css";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import ChooseBox from "./chooseBox";
import FillInfo from "../FillInformation/FillInfo";
import Confirmation from "../Confirmation/Confirmation";

function Box() {
  const [getComp, setComp] = useState("Box");
  const [careBox, setcareBox] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [streetName, setstreetName] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [country, setCountry] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [careLevel, setCareLevel] = useState("");

  
  // useEffect(() => {
  //   console.log(data, "Box page sa");
  //   data.map((i) => {
  // console.log(i.name)
  //   });
  // });
  
function check(){
 
  console.log(careBox,"answer")
}
  return (
    <div>
      <Header />
      <button onClick={()=>{
        check()
      }}>

      </button>
      <div style={{ marginTop: "40px" }} className="container">
        {/* Header */}

        {getComp == "Box" && <ChooseBox change={setComp} mybox={setcareBox} />}
        {getComp == "info" && (
          <FillInfo
            mybox={careBox}
            change={setComp}
            fname={setfirstName}
            lname={setlastName}
            sname={setstreetName}
            zip={setzipCode}
            countryy={setCountry}
            title={setTitle}
            careLevel={setCareLevel}
            note={setNote}
            phone={setphoneNumber}
            email={setEmail}
          />
        )}
        {getComp == "confirm" && (
          <Confirmation
            change={setComp}
            mybox={careBox}
            fname={firstName}
            lname={lastName}
            sname={streetName}
            zip={zipCode}
            countryy={country}
            title={title}
            careLevel={careLevel}
            note={note}
            phone={phoneNumber}
            email={email}
          />
        )}
      </div>
    </div>
  );
}

export default Box;
