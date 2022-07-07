import React from 'react';
// import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word, { IWord } from "./word";
//import { useEffect, useState } from "react";
import useFetch from '../hooks/useFetch';
export default function Day(){

//const day = 1;
// const day = useParams().day;
const {day} = useParams<{day:string}>();
// const wordList = dummy.words.filter(word => word.day === Number(day));
//const [words, setWords] = useState([]);

const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

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
        {words.length === 0 && <span>Loading...</span>}
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