import React, { useState } from "react";

const SignIn = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // Here you can perform your sign-in logic, like sending the username and password to your server
    console.log("Username:", username);
    console.log("Password:", password);
    // After handling sign-in, you can close the modal or take any other action
    onClose();
  };

  return (
    <div className="signin-container" style={styles.container}>
      <div className="signin-content" style={styles.content}>
        <div className="signin-header" style={styles.header}>
          <h2 style={styles.heading}>Sign in</h2>
          <span className="close" onClick={onClose} style={styles.closeButton}>&times;</span>
        </div>
        <form onSubmit={handleSignInSubmit} style={styles.form}>
          <div className="input-container" style={styles.inputContainer}>
            <label htmlFor="username" style={styles.label}>Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} style={styles.input} />
          </div>
          <div className="input-container" style={styles.inputContainer}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} style={styles.input} />
          </div>
          <button type="submit" className="signin-button" style={styles.button}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  },
  content: {
    width: "400px",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  heading: {
    margin: "0",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333333",
  },
  closeButton: {
    cursor: "pointer",
    fontSize: "24px",
    color: "#aaaaaa",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  label: {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333333",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #cccccc",
    borderRadius: "5px",
    fontSize: "14px",
    color: "#333333",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
