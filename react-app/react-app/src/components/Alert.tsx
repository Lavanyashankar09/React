import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  const handleClick = () => {
    alert(children); // show alert with the passed text
  };

  return (
    <div 
      className="alert alert-primary" 
      onClick={handleClick} 
      style={{ cursor: "pointer" }}
    >
      {children} {/* show the text inside the div */}
    </div>
  );
};

export default Alert;
