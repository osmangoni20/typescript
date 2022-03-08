import React, { useState } from "react";
import Student from "./Student";

interface Istate {
  name: string;
  roll: number;
  email: string;
}
const StudentList = () => {
  const [student, setStudent] = useState<Istate>({} as Istate);

  const [studentList, setStudentList] = useState<Istate[]>([]);
  const Onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const FormSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    setStudentList([...studentList, student]);
    setStudent({ name: "", email: "", roll: 0 });
    e.preventDefault();
  };
  const handleRemove = (roll: number) => {
    const NewStudentList = studentList.filter((st) => st.roll !== roll);
    setStudentList(NewStudentList);
  };
  return (
    <div className="Student_List">
      <h1> 🦸 Student List</h1>
      <form onSubmit={FormSubmit}>
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

        <button type="submit">Add</button>
      </form>
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
