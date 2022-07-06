import React from "react";
import context from "./Login";
import {useContext} from 'react';

    const Logout=()=>{
        const ctx = useContext(context);
        console.log(ctx);
        return(<>      
          
           { localStorage.clear()}
            </>
        )
    }


export default Logout ;