import { useNavigate } from "react-router-dom";
import { Bell, UserCog2 } from "lucide-react";
import {useAuth} from "../context/authProvider";
import Swal from "sweetalert2";
import "./NavBar.css";
function NavBar() {
  const{logout}=useAuth();
  const navigate = useNavigate();
  const handleLogout = async() => {
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
      logout();
      navigate('/')
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
            <option>SELETCT</option>
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
