import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Loginpage';
import OtpVerify from './Pages/OtpVerify';
import Layout from './components/layOut';
import DashBard from './Pages/DashBoard';
function App()
{
  return(
    <Routes>
   
      <Route path="/" element={<Login/>}/>
      <Route path="/otp-verify/:email" element={<OtpVerify/>}/>
      <Route element={<Layout/>}>
      <Route path="/Dash" element={<DashBard/>}/>
      </Route>
    </Routes>
  )
}
export default App;