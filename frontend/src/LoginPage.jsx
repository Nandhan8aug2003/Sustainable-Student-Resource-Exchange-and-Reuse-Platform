function LoginPage() {

  const login = async () => {
    const response = await fetch("http://localhost:8080/login");
    const data = await response.text();

    alert(data);
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Enter ID" />
      <br /><br />
      <input type="password" placeholder="Enter Password" />
      <br /><br />
      <button onClick={login}>Sign In</button>
    </div>
  );
}

export default LoginPage;