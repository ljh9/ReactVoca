import { useState } from "react";
import UserName from "./UseName";


export default function Hello({age}){
    const [name, setName] = useState("Mike");
    //const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "111": "22";

    return(
        <div>
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            <UserName name={name} />
            <button
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike");
                    //setAge(age + 1);
                }}>
                Change
            </button>
        </div>
    );
}