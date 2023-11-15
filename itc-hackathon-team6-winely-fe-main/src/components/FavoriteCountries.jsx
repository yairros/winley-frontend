import { Container, Row, Col } from "react-bootstrap";
import FavoriteCountry from "./FavoriteCountry";

const countryNames = [
    { countryName: "Argentina", flagUrl: "../flagImages/argentina.png" },
    { countryName: "Australia", flagUrl: "../flagImages/australia.png" },
    { countryName: "Germany", flagUrl: "../flagImages/germany.png" },
    { countryName: "Hungary", flagUrl: "../flagImages/hungary.png" },
    { countryName: "Italy", flagUrl: "../flagImages/italy.png" },
    { countryName: "Spain", flagUrl: "../flagImages/spain.png" },
    { countryName: "United States", flagUrl: "../flagImages/unitedStates.png" },
];

const favCountries = countryNames.filter(
    object =>
        object.countryName === "Argentina" ||
        object.countryName === "Italy" ||
        object.countryName === "Spain"
);

function FavoriteCountries() {
    return (
        <>
            <div className="wrap">
                <Container className="  mb-4 FavoriteCountrys">
                    <Row className="m-0">
                        <Col>
                            {" "}
                            <h3 className="headline">Most Popular Countries </h3>
                        </Col>
                    </Row>

                    <Row className="m-0">
                        {favCountries.map(country => (
                            <Col
                                key={country.countryName}
                                //  md={2} lg={2}
                            >
                                <FavoriteCountry
                                    countryName={country.countryName}
                                    flagUrl={country.flagUrl}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default FavoriteCountries;
