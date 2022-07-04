import React from 'react';
// import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./word";
//import { useEffect, useState } from "react";
import useFetch from '../hooks/useFetch';
export default function Day(){

//const day = 1;
// const day = useParams().day;
const {day} = useParams();
// const wordList = dummy.words.filter(word => word.day === Number(day));
//const [words, setWords] = useState([]);

const words = useFetch(`http://localhost:3001/words?day=${day}`);

// useEffect(()=>{
//     fetch(`http://localhost:3001/words?day=${day}`)
//     .then(res => {
//         return res.json()
//     })
//     .then(data =>{
//         setWords(data);
//     })
// }, [day]);

    return(
        <>
        <h2>Day{day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}