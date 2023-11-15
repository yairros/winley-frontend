import React from "react";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppContext from "../AppContext";
import { useContext } from "react";

export default function FavoriteCountry({ countryName, flagUrl }) {
    const navigate = useNavigate();
    const { setSearchResults } = useContext(AppContext);
    const handleCountrySearch = async e => {
        e.preventDefault();
        try {
            const res = await axios.get(
                `https://itc-hackathon-group6-be.azurewebsites.net/search/country?country=${countryName}`
            );
            console.log(res);
            setSearchResults(res.data);
        } catch (err) {
            alert(err);
        }
        navigate("/RecommendationPage");
    };

    return (
        <Row className="favorite-country" onClick={handleCountrySearch}>
            <img className=" fav-country-img" src={flagUrl} alt={countryName} />
            <p className="favorite-country-name"> {countryName}</p>
        </Row>
    );
}
