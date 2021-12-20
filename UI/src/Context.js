import React, { useState } from 'react'
import { api, endpoint } from './config';

 const GLOBAL_CONTEXT=React.createContext();

export const Provider=({children})=>{
    const [list, setList] = useState();
    const [search, setSearch] = useState("");
    const getData = async () => {
      let res = await fetch(
        `${api}${endpoint}${search}`
      );
      let result = await res.json();
      setList(result.breweries);
    };
      const handleKeyPress = (e) => {
        if (e.keyCode == 13) {
          getData();
        }
      };
      const handleClick = () => {
        if (search.length > 0) {
          getData();
        } else {
          alert("Please enter");
        }
      };
    return(

        <GLOBAL_CONTEXT.Provider value={{search,setSearch,list,handleClick,handleKeyPress}}>{children}</GLOBAL_CONTEXT.Provider>
        )
}

export default GLOBAL_CONTEXT;