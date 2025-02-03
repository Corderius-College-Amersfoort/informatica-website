import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import corderiusLogo from "/logo_corderius_text.svg";

export default function SideBar() {
	return ( <Sidebar className="h-lvh fixed">
		<Menu>
			<a href={"https://corderius.nl"}><img className="w-9/10 pt-1 pl-1" src={corderiusLogo}
												  alt="Corderius Logo"></img></a>
			<MenuItem className="pt-1" component={<Link to={"/"}/>}> Home </MenuItem>
			<MenuItem component={<Link to={"/vwo"} />}> Informatica op VWO </MenuItem>
			<MenuItem component={<Link to={"/havo"} />}> Informatica op HAVO </MenuItem>
		</Menu>
	</Sidebar> );
}
