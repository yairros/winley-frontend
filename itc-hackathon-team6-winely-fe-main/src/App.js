import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppContext from "./AppContext";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import WinePage from "./pages/WinePage";
import RecommendationPage from "./pages/RecommendationPage";
import WineForm from "./components/WineForm";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [wineDetails, setWineDetails] = useState({});

    return (
        <>
            <AppContext.Provider
                value={{
                    searchResults,
                    setSearchResults,
                    wineDetails,
                    setWineDetails,
                }}
            >
                <Routes>
                    <Route index element={<LandingPage />} />
                    <Route path="/Search" element={<SearchPage />}></Route>
                    <Route path="/RecommendationPage" element={<RecommendationPage />}></Route>
                    <Route path="/Wines" element={<WinePage />}></Route>
                    <Route path="/WineForm" element={<WineForm />}></Route>
                </Routes>
            </AppContext.Provider>
        </>
    );
}

export default App;
