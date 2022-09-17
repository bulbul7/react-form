
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Header from "./Layout/Header";
import Sidebar from "./Layout/sidebar";

import Dashbard from "./component/Dashbard";

function App() {
  return (
    <div>
      <Header />
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <Routes>
                    <Route path="/dashbard" element={<Dashbard />} />
                    {/*<Route path="/about" element={<About />} />*/}
                </Routes>
            </div>
        </div>

    </div>
  );
}

export default App;
