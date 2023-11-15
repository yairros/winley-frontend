import React from "react";
import Search from "../components/Search";
import AllCountries from "../components/AllCountries";
import FavoriteCountries from "../components/FavoriteCountries";
import "./SearchPage.css";
export default function SearchPage() {
    return (
        <div id="search-page-container">
            <Search />
            <FavoriteCountries />
            <AllCountries />
        </div>
    );
}
