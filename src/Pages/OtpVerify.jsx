import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import ApiEndPoint from "../components/ApiEndPoint";
import useApi from "../components/useApi";
import Swal from "sweetalert2";
import "./Otp.css";
function OtpVerify() {
  const [otp, setOtp] = useState("");
  const { postData } = useApi();
  const{email}=useParams();
  const navigate=useNavigate();
  const otpData = async () => {
    try {
      const response = await postData( `${ApiEndPoint.otpVerify}/${email}`,
      { otp });
      console.log(response)
      if (response.status == 200 ) {
        navigate('/Dash')
      } else {
        Swal.fire({
          icon: "error",
          title: "ERROR!",
          text:"error",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ERROR!",
        text: "error",
      });
    }
  };
  return (
    <>
      <div className="otp-container">
        <div className="otp-data">
          <div className="otp-image">
            <img className="img-src" src="/OTP-Verification (1).png"/>
          </div>
          <h2 className="ot-data">PLEASE ENTER OTP HERE:</h2>
          <input className="otp-input"
            type="text"
            maxLength={4}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="btn-submit" onClick={otpData}>SUBMIT</button>
        </div>
      </div>
    </>
  );
}
export default OtpVerify;
