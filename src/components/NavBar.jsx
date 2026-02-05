import { useNavigate, useParams } from "react-router-dom";
import { Bell, UserCog2 } from "lucide-react";
import {useAuth} from "../context/authProvider";
import useApi from "../components/useApi";
import ApiEndPoint from "../components/ApiEndPoint";
import Swal from "sweetalert2";
import "./NavBar.css";
function NavBar() {
  const{logout}=useAuth();
  const {postData}=useApi();
  const navigate = useNavigate();
  const handleLogout = async(id) => {
    console.log("handleLogout fired"); 
   const result= await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    });
     if (!result.isConfirmed) return;
     console.log("Confirmed logout");
     console.log(id)
     try
     {
        const response=await postData(ApiEndPoint.logOut,{id})
         console.log(response)
     if(response.status == 200)
     {
      Swal.fire({
        icon:"success",
        text:"SUCCESSFULL!"
      })
           logout();
           navigate('/')
     }
     else
     {
      Swal.fire({
        icon:"error",
        title:"ERROR",
        text:"error"
      })
     }
     }
     catch(error)
     {
      Swal.fire({
        icon:"error",
        title:"ERROR",
        text:" SERVER ERROR"
      })
     }
  };
  return (
    <>
      <div className="nav-bar">
        <label className="notify">
          <Bell size={25} />
        </label>
        <label className="Admin-controller">
          <UserCog2 size={18} />
          Admin
          <select
            className="select-row"
            onChange={(e) => {
              if(e.target.value=="logout")
              {
                   handleLogout();
                   return;
              }
            }}
          >
            <option value="">SELECT</option>
            <option value="logout">Logout</option>
            <option>Password Change</option>
            <option>Setting</option>
            <option>Profile Update</option>
            <option>Complete Profile</option>
          </select>
        </label>
      </div>
    </>
  );
}

export default NavBar;
