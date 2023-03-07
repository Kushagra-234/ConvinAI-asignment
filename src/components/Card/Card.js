import { blue } from "@mui/material/colors";
import React from "react";
import "./card.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

const Card = () => {
  return (
    <div className="card">
      <div className="card__cont">
        <div className="card__iconcont">
          <div className="card__name">Card1</div>
          <div className="card__icon">
            <DeleteOutlineIcon className="card__icons" />
            <EditIcon className="class__icons   icon" />
          </div>
        </div>
        <button className="card__btn">Click to View Video</button>
      </div>
    </div>
  );
};

export default Card;
