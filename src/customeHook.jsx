import { useState } from "react";

export const useCounter = ()=>{

    const [counter,setCounter] = useState(0); 


    const decCounter = ()=>{

        setCounter( counter - 1 );

    }

    const incCounter = ()=>{

        setCounter( counter + 1 );

    }


    return [counter,decCounter,incCounter];


}