import React, { useState } from "react";
import "./bucket.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "../Card/Card";

const Bucket = () => {
  const [show, setShow] = useState(true);
  console.log(show);
  return (
    <div className="bucket">
      <div className="bucket__container">
        <div className="bucket__title">Entertainment</div>
        <div className="bucket__icon">
          <DeleteOutlineIcon
            classname="bucket__icon"
            onClick={() => setShow(false)}
            // style={{
            //   cursor: "pointer",
            //   padding: "7px",
            //   color: "white",
            // }}
          />
        </div>
      </div>
      <div className="card__container">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Bucket;
