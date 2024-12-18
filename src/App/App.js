/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./App.css";
import { Contex } from "./Contex/Contex";
import UserComp from "./UserComp/UserComp";
import BtnsComp from "./BtnsComp/BtnsComp";
let firstIndexOfUsers = null;
let lastIndexOfUsers = null;
let array = [];
let array2 = [];
let btnsIndex = 1;
export default function App() {
  const [users] = useState([
    { id: 1, name: "Morgan", Age: "20" },
    { id: 2, name: "Alis", Age: "42" },
    { id: 3, name: "Hero", Age: "38" },
    { id: 4, name: "Elias", Age: "19" },
    { id: 5, name: "Osman", Age: "36" },
    { id: 6, name: "Oliver", Age: "45" },
    { id: 7, name: "Jack", Age: "38" },
    { id: 8, name: "Harry", Age: "65" },
    { id: 9, name: "Jacob", Age: "32" },
    { id: 10, name: "Charlie", Age: "68" },
    { id: 11, name: "Thomas", Age: "20" },
    { id: 12, name: "George", Age: "20" },
    { id: 13, name: "Oscar", Age: "19" },
    { id: 14, name: "James", Age: "20" },
    { id: 15, name: "Ali", Age: "42" },
    { id: 16, name: "William", Age: "38" },
    { id: 17, name: "Meysam", Age: "19" },
    { id: 18, name: "John", Age: "36" },
    { id: 19, name: "Robert", Age: "45" },
    { id: 20, name: "Michael", Age: "38" },
    { id: 21, name: "Nadia", Age: "65" },
    { id: 22, name: "William", Age: "32" },
    { id: 23, name: "David", Age: "68" },
    { id: 24, name: "Richard", Age: "20" },
    { id: 25, name: "Joseph", Age: "20" },
    { id: 26, name: "Doctor", Age: "19" },
    { id: 27, name: "Charles", Age: "20" },
    { id: 28, name: "Thomas", Age: "42" },
    { id: 29, name: "Emma", Age: "38" },
    { id: 30, name: "Patricia", Age: "19" },
    { id: 31, name: "Linda", Age: "36" },
    { id: 32, name: "Poppy", Age: "45" },
    { id: 33, name: "Jennifer", Age: "38" },
    { id: 34, name: "Emily", Age: "65" },
    { id: 35, name: "Jessica", Age: "32" },
    { id: 36, name: "Sarah", Age: "68" },
    { id: 37, name: "Tracy", Age: "20" },
    { id: 38, name: "Sophie", Age: "20" },
    { id: 39, name: "Ava", Age: "19" },
    { id: 40, name: "Bethany", Age: "45" },
  ]);
  const [filterUser, setFilterUser] = useState([1, 2, 3, 4, 5]);
  const [valueOfSection, setValueOfSection] = useState(5);
  const [indexOfBtn, setIndexOfBtn] = useState(1);
  const [btnsNumber, setBtnsNumber] = useState([1, 2, 3, 4, 5]);
  // ===============================================start change select logic=========================================================
  const changeSelectHandel = (event) => {
    if (event.target.value === "Show 5 In Page") {
      setValueOfSection(5);
    } else if (event.target.value === "Show 8 In Page") {
      setValueOfSection(8);
    } else if (event.target.value === "Show 10 In Page") {
      setValueOfSection(10);
    } else if (event.target.value === "Show 20 In Page") {
      setValueOfSection(20);
    } else {
      setValueOfSection(25);
    }
    setIndexOfBtn(1);
  };
  // ===============================================finish change select logic==========================================================

  // =====================================================start when select changed=====================================================
  useEffect(() => {
    array = [];
    array2 = [];
    //calculate first and last number of users
    lastIndexOfUsers = indexOfBtn * valueOfSection;
    firstIndexOfUsers = lastIndexOfUsers - valueOfSection + 1;
    while (lastIndexOfUsers >= firstIndexOfUsers) {
      array.push(firstIndexOfUsers);
      firstIndexOfUsers++;
    }
    setFilterUser([...array]);

    // create btn based user length
    btnsIndex = Math.ceil(users.length / valueOfSection);
    while (btnsIndex >= 1) {
      array2.push(btnsIndex);
      btnsIndex--;
    }
    array2.reverse();
    setBtnsNumber([...array2]);
  }, [valueOfSection]);
  // =====================================================finish when select changed=====================================================

  // useEffect(() => {}, [showSectionValue]);

  return (
    <section className="app">
      <Contex.Provider
        value={{
          filterUser,
          setFilterUser,
          numberShow: valueOfSection,
          setNumberShow: setValueOfSection,
          whichIndexBtn: indexOfBtn,
          setWhichIndexBtn: setIndexOfBtn,
        }}>
        <div className="container">
          {users.map(
            (x) =>
              filterUser.includes(x.id) && (
                <UserComp id={x.id} key={x.id} text={x.name}></UserComp>
              )
          )}
        </div>
        <div className="btns">
          {btnsNumber.map((x) => (
            <BtnsComp key={x} number={x}></BtnsComp>
          ))}
          <select onChange={changeSelectHandel}>
            <option>Show 5 In Page</option>
            <option>Show 8 In Page</option>
            <option>Show 10 In Page</option>
            <option>Show 20 In Page</option>
            <option>Show 25 In Page</option>
          </select>
        </div>
      </Contex.Provider>
    </section>
  );
}
