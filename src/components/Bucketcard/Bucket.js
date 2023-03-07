import React, { useState } from "react";
import "./bucket.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "../Card/Card";
import { data } from "../../data";

const Bucket = () => {
  const [show, setShow] = useState(true);
//   console.log(show);
  {if(show==true){
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
        {data.map((item)=>{
            return (
              <>
              <Card 
              data={item.name}
              id={item.id} />
                
              </>
            );
        })}
       
       
      </div>
    </div>
  );
}
  }
};
// 
export default Bucket;
