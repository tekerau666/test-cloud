import './App.css';
import {FirstPage} from "./pages/FirstPage";
import {SecondPage} from "./pages/SecondPage";
import {ThirdPage} from "./pages/ThirdPage";
import {FourthPage} from "./pages/FourthPage";
import {ModalWindow} from "./ui/ModalWindow";
import {BrowserRouter as Router} from "react-router-dom";
import {AppRouter} from "./components/AppRouter";
import {Select} from "./ui/Select/Select";
import {SelectTest} from "./ui/Select/SelectTest";


function App() {
    return (
        <div className="page">
            {/*<Router>
                <AppRouter/>
            </Router>*/}
            <SelectTest/>
        </div>
    );
}

export default App;
