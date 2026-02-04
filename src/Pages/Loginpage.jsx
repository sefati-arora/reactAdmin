import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiEndPoint from "../components/ApiEndPoint";
import { useAuth } from "../context/authProvider";
import useApi from "../components/useApi";
import Swal from "sweetalert2";
import "./LoginPage.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { postData } = useApi();
  const navigate = useNavigate();
  const loginAdmin = async () => {
    if (!email) {
      Swal.fire({
        icon: "info",
        title: "REQUIRED",
        text: "EMAIL MUST BE REQUIRED",
      });
      return;
    }
    if (!password) {
      Swal.fire({
        icon: "info",
        title: "REQUIRED",
        text: "PASSWORD MUST BE REQUIRED",
      });
      return;
    }
    try {
      const data = { email, password };
      const response = await postData(ApiEndPoint.adminLogin, data);
      console.log(response);
      if (response.status == 200) {
        console.log("Confirmed login");
        login(response);
        navigate(`/otp-verify/${email}`);
      } else {
        Swal.fire({
          icon: "error",
          title: "ERROR",
          text: "ERROR",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ERROR!",
        text: "SERVER ERROR!",
      });
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="login-data">
          <h1 className="head-ing">LOGIN PAGE</h1>
          <h2 className="email-data">EMAIL:</h2>
          <input
            className="email-input"
            type="email"
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2 className="password-data">PASSWORD:</h2>
          <input
            className="password-input"
            type="password"
            placeholder="ENTER YOUR PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-save" onClick={loginAdmin}>
            SAVE
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
