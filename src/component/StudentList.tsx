import React, { useEffect, useState } from "react";
import Student from "./Student";

interface Istate {
  name: string;
  roll: number;
  email: string;
}
function getLocalStorage() {
  let list = localStorage.getItem("studentList");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("studentList") || ""));
  } else {
    return [];
  }
}
const StudentList = () => {
  const [student, setStudent] = useState<Istate>({} as Istate);
  const [studentList, setStudentList] = useState<Istate[]>(getLocalStorage);

  useEffect(() => {
    localStorage.setItem("studentList", JSON.stringify(studentList));
  }, [studentList]);

  const Onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const FormSubmit = () => {
    setStudentList([...studentList, student]);
    setStudent({ name: "", email: "", roll: 0 });
  };

  // console.log(studentList);
  const handleRemove = (roll: number) => {
    const NewStudentList = studentList.filter((st) => st.roll !== roll);
    setStudentList(NewStudentList);
  };
  // useEffect(() => {}, [studentList]);
  // useEffect(() => {
  //   const list = JSON.parse(window.localStorage.getItem("studentList") || "");
  //   setStudentList(list === "" ? [] : list);
  //   console.log("list size", list.length);
  // }, []);
  return (
    <div className="Student_List">
      <h1> 🦸 Student List</h1>
      <div>
        <input
          onChange={Onchange}
          type="text"
          name="name"
          value={student.name}
          placeholder="Enter Student Name"
        ></input>

        <input
          onChange={Onchange}
          type="number"
          name="roll"
          value={student.roll}
          placeholder="Enter Student Roll"
        ></input>

        <input
          onChange={Onchange}
          type="email"
          name="email"
          value={student.email}
          placeholder="Enter Student Email"
        ></input>

        <button onClick={FormSubmit} type="submit">
          Add
        </button>
      </div>
      {/* <StudentDemo name="Osman Goni" roll={1245}></StudentDemo> */}
      {studentList.map((student, index) => (
        <Student
          key={index}
          name={student.name}
          email={student.email}
          roll={student.roll}
          handleRemove={handleRemove}
        ></Student>
      ))}
    </div>
  );
};

export default StudentList;
