import './App.css';
import {FirstPage} from "./pages/FirstPage";
import {SecondPage} from "./pages/SecondPage";
import {ThirdPage} from "./pages/ThirdPage";
import {FourthPage} from "./pages/FourthPage";
import {ModalWindow} from "./pages/ModalWindow";
import {BrowserRouter as Router} from "react-router-dom";
import {AppRouter} from "./pages/AppRouter";

function App() {
    return (
        <div className="page">
            <Router>
                <AppRouter/>
            </Router>
        </div>
    );
}

export default App;
