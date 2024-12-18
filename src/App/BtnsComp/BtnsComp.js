/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./BtnsComp.css";
import { Contex } from "./../Contex/Contex";
let firstIndexOfUsers = null;
let lastIndexOfUsers = null;
let getNumber = null;
let array = [];
export default function BtnsComp({ number }) {
  const userGetter = useContext(Contex);
  // ==============================================start click on btns logci==============================================
  const clickHandel = (event) => {
    array = [];
    getNumber = userGetter.numberShow;
    lastIndexOfUsers = event.target.innerHTML * getNumber;
    firstIndexOfUsers = lastIndexOfUsers - getNumber + 1;
    while (lastIndexOfUsers >= firstIndexOfUsers) {
      array.push(firstIndexOfUsers);
      firstIndexOfUsers++;
    }
    userGetter.setFilterUser([...array]);
    userGetter.setWhichIndexBtn(+event.target.innerHTML);
  };
  // ==============================================finish click on btns logci==============================================
  return (
    <div onClick={clickHandel} className="btn-comp">
      {number}
    </div>
  );
}
