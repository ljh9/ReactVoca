import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import dummy from "../db/data.json";

export default function DayList(){
    // console.log(dummy);
    const [days, setDays] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/days')
        .then(res => {
            return res.json()
        })
        .then(data =>{
            setDays(data);
        })
    }, []);//의존성배열


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