import React, { useContext, useEffect, useState } from "react";
import "./WinePage.css";
import winecard from "../components/Images/winecard.jpg";
import AppContext from "../AppContext";

export default function WinePage() {
    const { wineDetails } = useContext(AppContext);
    const [wine, setWine] = useState({});
    const [buyWineURL, setBuyWineURL] = useState(
        "https://www.wine-searcher.com/find/"
    );
    const params = new URL(document.location).searchParams;
    const id = params.get("id");
    console.log(wineDetails);
    useEffect(() => {
        setWine({ ...wineDetails[id] });
        const wineTitle = wineDetails[id].title;
        const split = wineTitle.split(" ");
        setBuyWineURL(buyWineURL + split.join("+"));
        //eslint-disable-next-line
    }, []);
    console.log(wine);

    return (
        <div className="wine-page-card-container">
            <div className="wine-page-card">
                <div className="wine-card-top">
                    <img
                        className="wine-card-img"
                        src={winecard}
                        alt="Avatar"
                    />
                    <div className="wine-card-top-txt">
                        <div className="wine-card-txt">
                            <b>{wine.title}</b>
                        </div>
                        <div className="wine-card-txt">
                            <b>Variety: {wine.varietal}</b>
                        </div>
                        <div className="wine-card-txt">
                            <b>Country: {wine.country}</b>
                        </div>
                        <div className="wine-card-txt">
                            <b>
                                Region: {wine.province} {wine.region}
                            </b>
                        </div>
                    </div>
                </div>
                <div className="wine-card-txt">
                    Description: {wine.description}
                </div>
                <div className="wine-card-txt">Winery: {wine.winery}</div>
                <div className="wine-card-txt">
                    Rating: {wine.points}, Price: ${wine.price}
                </div>
                <a href={buyWineURL} target="_blank" rel="noreferrer">
                    <button id="btn-buy-now">Buy Now</button>
                </a>
            </div>
        </div>
    );
}
