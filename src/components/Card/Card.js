
import React, { useState } from "react";
import "./card.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
// import { data } from "../../data";

const Card = ({data,id}) => {
    const[show,setShow]=useState(true);
    console.log(show);
 { if(show==true) 
    {return (
   <div className="card">
      <div className="card__cont">
        <div className="card__iconcont">
          <div className="card__name">{data}</div>
          <div className="card__icon">
            <DeleteOutlineIcon  onClick={()=>setShow(false)} className="card__icons" />
            <EditIcon className="class__icons   icon" />
          </div>
        </div>
        <button className="card__btn">Click to View Video</button>
      </div>
    </div>

 
  
  
  );
 }
}
};

export default Card;
