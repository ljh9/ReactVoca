import React from 'react';
//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import dummy from "../db/data.json";

export interface IDay{
    id: number;
    day: number;
}

export default function DayList(){
    const days : IDay[] = useFetch("http://localhost:3001/days");
    // console.log(dummy);
    // const [days, setDays] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(data =>{
    //         setDays(data);
    //     })
    // }, []);//의존성배열

    if(days.length === 0) {
        return <span>Loadding...</span>;
    }


    return (
        <ul className="list_day">
            {days.map(day =>(
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}