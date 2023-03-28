import React, { useState } from "react";
import "./bucket.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Card from "../Card/Card";
// import { data } from "../../data";
import { Button } from "@mui/material";

const Bucket = ({ value }) => {
  const [show, setShow] = useState(true);
  const[arr,setArr]=useState([]);
  const[values,setValue]=useState("");

  const handleSearch=(e)=>{
     setValue(e.target.value);
  } 

  // console.log(value.value);

  // console.log({value});
  //   console.log(show);
  const addCard=()=>{

    setArr((prev)=>{
       return [...prev,{
         values:values,
       }]
    })

    setValue("")


  }
  {

    if (show == true) {
      return (
        <div className="bucket">
          <div className="bucket__container">
            <div className="bucket__title">{value.value}</div>

            <div className="bucket__icon">
              <DeleteOutlineIcon
                className="bucket__icon"
                onClick={() => setShow(false)}
                // style={{
                //   cursor: "pointer",
                //   padding: "7px",
                //   color: "white",
                // }}
              />
            </div>
          </div>
          <input value={values} onChange={(e)=>handleSearch(e)} placeholder="Enter new card" className="bucket_input" />
          <Button onClick={addCard} className="btn_bucket">ADD</Button>

          <div className="card__container">
            {arr.map((item) => {
              return (
                <>
                  <Card data={item} />
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
