import { Container, Row, Col } from "react-bootstrap";
import CountryCard from "./CountryCard";

const countryNames = [
    { countryName: "Greece", flagUrl: "../flagImages/greece.png" },
    { countryName: "Austria", flagUrl: "../flagImages/austria.png" },
    { countryName: "Mexico", flagUrl: "../flagImages/mexico.png" },
    { countryName: "Israel", flagUrl: "../flagImages/israel.png" },
    { countryName: "Australia", flagUrl: "../flagImages/australia.png" },
    { countryName: "Germany", flagUrl: "../flagImages/germany.png" },
    { countryName: "Portugal", flagUrl: "../flagImages/portugal.png" },
    { countryName: "Hungary", flagUrl: "../flagImages/hungary.png" },
    { countryName: "US", flagUrl: "../flagImages/unitedstates.png" },
    { countryName: "Chile", flagUrl: "../flagImages/chile.png" },
    { countryName: "South Africa", flagUrl: "../flagImages/south-africa.png" },
];

function AllCountries() {
    return (
        <>
            <div className="wrap">
                <Container>
                    <Row className="m-0">
                        <Col>
                            {" "}
                            <h3 className="headline mb-3">Countries:</h3>
                        </Col>

                        {countryNames.map(country => (
                            <Col
                                key={country.countryName}
                                md={12}
                                lg={12}
                                className="m-0"
                            >
                                <CountryCard
                                    className="m-0"
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

export default AllCountries;
