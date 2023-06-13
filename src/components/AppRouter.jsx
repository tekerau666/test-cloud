import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FirstPage} from "../pages/FirstPage";
import {SecondPage} from "../pages/SecondPage";
import {ThirdPage} from "../pages/ThirdPage";
import {FourthPage} from "../pages/FourthPage";

export function AppRouter() {
	return (
		<>
				<Routes>
					<Route path="/" element={<FirstPage/>}/>
					<Route path="/second" element={<SecondPage/>}/>
					<Route path="/third" element={<ThirdPage/>}/>
					<Route path="/fourth" element={<FourthPage/>}/>
				</Routes>
		</>
	)
}