import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FirstPage} from "./FirstPage";
import {SecondPage} from "./SecondPage";
import {ThirdPage} from "./ThirdPage";
import {FourthPage} from "./FourthPage";

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