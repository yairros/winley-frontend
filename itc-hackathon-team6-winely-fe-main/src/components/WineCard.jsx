import React from "react";
import "./WineCard.css";
import { IoIosWine } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

export default function WineCard(item) {
    const navigate = useNavigate();

    const toWinePage = async e => {
        e.stopPropagation();
        try {
            navigate(`/Wines?id=${item.id}`);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div onClick={toWinePage} className="card">
                <div className="container">
                    <h3>
                        <b>{item.title}</b>
                    </h3>
                    <h4>{item.varietal}</h4>
                    <h4>{item.country}</h4>
                    <Tooltip title="Details">
                        <div>
                            <IoIosWine size={30} />
                        </div>
                    </Tooltip>
                </div>
            </div>
        </>
    );
}
