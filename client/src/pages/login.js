import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const checkuser = async () => {
      const data = await fetch("/checkuser", {
        method: "Post",
      });
      const response = await data.json();
      if (response === "succes") {
        navigate("/admin");
      } 
    };

    checkuser();
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    const data = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const response = await data.json();
    if (response === "success") {
      navigate("/admin");
    } else {
      alert(response);
    }
  };

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            id="password"
          />
        </div>
        <button onClick={loginHandler}>Login</button>
      </form>
    </>
  );
}

export default Login;
