import React from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// global variable
const API_KEY = process.env.REACT_APP_GIFHY_API_KEY; 

const Tag = () =>{
    const[tag, setTag] = useState('');

    const {gif, loading, fetchData} = useGif(tag);
    function changeHandler(event){
        setTag(event.target.value);
    }

    function clickHandler(){
        fetchData(tag);
    }

    return(
        <div className="w-1/2 bg-blue-500 mt-10 rounded-lg border border-black 
        px-10 py-10 flex flex-col items-center gap-7">
            <h1 className="text-3xl font-bold underline uppercase">Random {tag} Gif</h1>
            {
                loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
            }
           
            <input 
            onChange={changeHandler}
            className="w-10/12 text-black font-[500] uppercase text-lg rounded-lg py-3 text-center"
            value={tag}
            />

            <button onClick={clickHandler}
            className="w-10/12 text-black font-[500] uppercase text-lg  bg-yellow-500 rounded-lg py-3">
                Generate
            </button>
        </div>
    );
}
// const Tag = () =>{
//     return (
//         <div>

//         </div>
//     )
// }

export default Tag;