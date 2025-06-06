import './Layout.css';
import { useOktaAuth } from "@okta/okta-react";
import SignIn from "./SignIn.tsx";
import { Link } from "react-router-dom";

const Layout = ({children}) => {
	const { authState, oktaAuth} = useOktaAuth();
	const signout = async () => await oktaAuth.signOut();

	return authState?.isAuthenticated ? (<>
		<div className="navbar">
			<Link to="/"><img src="/favicon-32x32.png" className="logo" /></Link>

			<div className="right">
				<Link to="/profile">Profile</Link>
				<button onClick={signout} className="no-outline">Sign Out</button>
			</div>
		</div>
		<div className="layout">
			{...children}
		</div>
	</>) : <SignIn/>;
}
export default Layout;