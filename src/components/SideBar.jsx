 import { LayoutDashboard, User,CalendarCheck,Repeat, ShoppingCart, DollarSign, HelpCircle } from "lucide-react";
import './Side.css';

function SideBar()
{

    return(
        <>
        <div className="side-container">
            <ul>
                <li><LayoutDashboard size={18}/>DashBoard</li>
                <li><User size={18}/>UserProfile</li>
                <li><CalendarCheck size={18}/>Booking</li>
                <li><Repeat size={18}/>Subscription</li>
                <li><ShoppingCart size={18}/>Orders</li>
                <li><DollarSign size={18}/>Revenue</li>
                <li><HelpCircle size={18}/>FAQ</li>
            </ul>
        </div>
        </>
    )
}
export default SideBar;