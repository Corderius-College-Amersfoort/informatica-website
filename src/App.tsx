import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import SideBar from "./SideBar.tsx";
import VWO from "./pages/VWO.tsx";
import HAVO from "./pages/HAVO.tsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="flex">
					<div className="fixed">
						<SideBar />
					</div>
					<div style={{padding: "20px", flexGrow: 1}}>
						<Routes>
							<Route path="/informatica-website/" element={<Home/>}/>
							<Route path="/informatica-website/vwo" element={<VWO/>}/>
							<Route path="/informatica-website/havo" element={<HAVO/>}/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	)
}

export default App
