// button.tsx
import React, { useState } from "react";

const ButtonWithAlert: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleButtonClick}>Click Me</button>

      {showAlert && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            position: "relative",
            width: "fit-content",
          }}
        >
          This is an alert!
          <button
            onClick={handleCloseAlert}
            style={{
              marginLeft: "10px",
              background: "transparent",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonWithAlert;
