import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppContext from "../AppContext";
import { useContext } from "react";

export default function CountryCard({ countryName, flagUrl }) {
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
        <Container>
            <Row className="country-card mb-2  " onClick={handleCountrySearch}>
                <Col xs={2}>
                    <img
                        className=" country-img m-0"
                        src={flagUrl}
                        alt={countryName}
                    />{" "}
                </Col>
                <Col xs={10} className=" ">
                    {" "}
                    <p className="card-countryName p-2   "> {countryName}</p>
                </Col>
            </Row>
        </Container>
    );
}
