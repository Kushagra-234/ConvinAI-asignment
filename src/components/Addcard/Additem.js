import { Button } from "@mui/material";
import React, { useState } from "react";
import "./additem.css";
import Bucket from "../Bucketcard/Bucket";

const Additem = () => {
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);
  

  const handleItemInput = (e) => {
    setValue(e.target.value);
  };

  // console.log(value);

  const handleContainer = () => {
    setArr((prev) => {
      return [
        ...prev,
        {
          value: value,
        },
      ];
    });

    setValue("");
    
  };

  // console.log(arr);
  return (
    <>
      <div className="bucket_cont">
        <div className="add_item">
          <input
             value={value}
            placeholder="enter Container name"
            onChange={(e) => handleItemInput(e)}
            className="item_input"
          />
          <Button onClick={handleContainer} className="btn-danger">
            ADD
          </Button>
        </div>
        <div className="bucketis">
          {
            arr.map((prod)=>{
              return(
              <div className="bucketis">
                <Bucket value={prod}/>
                
              </div>
              )

            })
          }
        </div>
      </div>
    </>
  );
};

export default Additem;
