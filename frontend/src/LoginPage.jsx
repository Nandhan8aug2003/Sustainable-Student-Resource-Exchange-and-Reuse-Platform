import React from "react";

function LoginPage() {
  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter USN"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
      />

      <br /><br />

      <button>Sign In</button>
    </div>
  );
}

export default LoginPage;