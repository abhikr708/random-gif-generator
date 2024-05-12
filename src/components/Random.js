import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// global variable
const API_KEY = process.env.REACT_APP_GIFHY_API_KEY; 

const Random = () =>{

    const{gif, loading, fetchData} = useGif();

    function clickHandler(){
        fetchData();
    }

    return(
        <div className="w-1/2 bg-green-500 mt-10 rounded-lg border border-black 
        px-10 py-10 flex flex-col items-center gap-7">
            <h1 className="text-3xl font-bold underline uppercase">Random Gif</h1>
            {
                loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
            }
           
            <button onClick={clickHandler}
            className="w-10/12 text-black font-[500] uppercase text-lg  bg-yellow-500 rounded-lg py-3">
                Generate
            </button>
        </div>
    );
}

export default Random;