import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext, useEffect, useRef } from "react";
import "./Search.css";
import AppContext from "../AppContext";

const Dropdown = ({ wines }) => {
    const navigate = useNavigate();
    const { setSearchResults } = useContext(AppContext);
    const redirectToWine = async wineId => {
        const wineList = await axios.get(
            //eslint-disable-next-line
            "https://itc-hackathon-group6-be.azurewebsites.net" +
                "/Wines?id=" +
                wineId
        );
        setSearchResults(wineList.data);
        navigate("/RecommendationPage");
    };
    if (wines.length === 0) {
        return (
            <div className="drop ">
                <div className="f">
                    <div className="p-3">
                        No results, please try another search term.
                    </div>
                </div>
            </div>
        );
    }
    const wineList = wines.map((wine, index) => {
        return (
            <div
                onClick={() => {
                    redirectToWine(wine.id);
                }}
                key={index}
                className="f"
            >
                <div className="px-1">{wine.title}</div>
                <div className="px-1">{wine.country}</div>
                <div className="px-1 score">{wine.points}</div>
            </div>
        );
    });
    return <div className="drop">{wineList}</div>;
};

const SearchBar = ({ keyword, onChange }) => {
    const navigate = useNavigate();
    const { searchResults, setSearchResults } = useContext(AppContext);
    const [userDetails, setUserDetails] = useState("");
    const [showDrop, setShowDrop] = useState(false);
    const debounce = useRef("");

    console.log(showDrop);
    useEffect(() => {
        setSearchResults([]);
        debounce.current = userDetails;
        setShowDrop(false);
        const clear = setTimeout(() => {
            console.log(userDetails, debounce.current);
            if (userDetails === debounce.current && userDetails !== "") {
                try {
                    axios
                        .get(
                            `https://itc-hackathon-group6-be.azurewebsites.net/search?title=${userDetails.title}`
                        )
                        .then(res => {
                            console.log(res);
                            setSearchResults(res.data);
                            if (res.data) {
                                setShowDrop(true);
                            }
                        });
                } catch (err) {
                    alert(err);
                }
            }
        }, 500);
        return () => clearTimeout(clear);
    }, [userDetails, setSearchResults]);
    const handleUserDetails = async e => {
        setUserDetails({ [e.target.id]: e.target.value });
        e.preventDefault();
    };

    const handleSearch = async e => {
        setSearchResults([]);
        e.preventDefault();
        try {
            const res = await axios.get(
                `https://itc-hackathon-group6-be.azurewebsites.net/search?title=${userDetails.title}`
            );
            console.log(res);
            setSearchResults(res.data);
        } catch (err) {
            alert(err);
        }
        navigate("/RecommendationPage");
    };

    return (
        <div className="search-container">
            <h1>Search Wines</h1>
            <p>
                Search for a name or varietal of wine to get a recommendation.
                Otherwise pick a country and explore wine from a new culture.
            </p>
            <div className="search-bar-container">
                <input
                    className="search-bar"
                    id="title"
                    value={keyword}
                    placeholder={"Find your next favorite wine"}
                    onChange={handleUserDetails}
                />
                {showDrop ? <Dropdown wines={searchResults} /> : <></>}

                <button className="search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
