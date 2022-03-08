import React from "react";

interface Iprops {
  name: string;
  roll: number;
  email?: string;
  handleRemove: (roll: number) => void;
}

const Student = ({ name, roll, email = "N/A", handleRemove }: Iprops) => {
  return (
    <div className="card">
      <p>
        <strong>Name:</strong>
        {name}
      </p>
      <p>
        <strong>Roll:</strong>
        {roll}
      </p>
      <p>
        <strong>Email:</strong>
        {email}
      </p>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => handleRemove(roll)}
      >
        Remove
      </button>
    </div>
  );
};

export const StudentDemo: React.FC<Iprops> = ({
  name,
  roll,
  email = "N/A",
}) => {
  return (
    <div className="card">
      <p>
        <strong>Name:</strong>
        {name}
      </p>
      <p>
        <strong>Roll:</strong>
        {roll}
      </p>
      <p>
        <strong>Email:</strong>
        {email}
      </p>
    </div>
  );
};
export default Student;
