import "../css/navbar.css";
import Home from "./pages/Home";
import Route from "./Route";
import NewMeeting from "./pages/NewMeeting";
import Account from "./pages/Account";
import AllMeetings from "./pages/AllMeetings";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Guest from "./pages/Guest";
import AvailabilityPage from "./pages/AvailabilityPage";
import { BiBookBookmark, BiHomeAlt, BiPlus, BiListOl, BiInfoCircle, BiUser } from "react-icons/bi";


export default function NavBar() {
	return (
		<div className="">
			<html>
			<head></head>
			<body>
			<div className="area"></div>
			<nav className="main-menu">
				<ul>
					<li>
						<a href="./Home" >
							<BiBookBookmark className="fa title-icon"/>
							<span className="title-text">Meeting Planner</span>
						</a>
					</li>
					<li className="tabs">
						<a href="./Home">
							<BiHomeAlt className="fa"/>
							<span className="nav-text">Home</span>
						</a>
					</li>
					<li className="tabs">
						<a href="./NewMeeting">
							<BiPlus className="fa"/>
							<span className="nav-text">New Meeting</span>
						</a>
					</li>
					<li className="tabs">
						<a href="./AllMeetings">
							<BiListOl className="fa"/>
							<span className="nav-text">All Meetings</span>
						</a>
					</li>
					<li className="tabs">
						<a href="./AboutUs">
							<BiInfoCircle className="fa"/>
							<span className="nav-text">About Us</span>
						</a>
					</li>
				</ul>

				<ul class="logout">
					<li className="tabs">
						<a href="./Account">
							<BiUser className="fa"/>
							<span class="nav-text">Account</span>
						</a>
					</li>
				</ul>
			</nav>

			<Route path="/">
				<Home />
			</Route>
			<Route path="/Home">
				<Home />
			</Route>
			<Route path="/NewMeeting">
				<NewMeeting />
			</Route>
			<Route path="/AllMeetings">
				<AllMeetings />
			</Route>
			<Route path="/AboutUs">
				<AboutUs />
			</Route>
			<Route path="/Account">
				<Account />
			</Route>
			<Route path="/SignUp">
				<SignUp />
			</Route>
			<Route path="/Login">
				<Login />
			</Route>
			<Route path="/Guest">
				<Guest />
			</Route>
			<Route path="/AvailabilityPage">
				<AvailabilityPage />
			</Route>
			</body>
			</html>
		</div>
	);
}
