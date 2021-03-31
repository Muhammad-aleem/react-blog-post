import  { useState, useEffect } from "react";

export default function useFetch(url) {
    const [Data, getData] = useState([]);
    const [padding, complete] = useState(true);
    const [error, seterror] = useState();
  
      useEffect(() => {
        const abortController = new AbortController();
        //AbortController:  to stop the fetch request when i go to other page
        setTimeout(() => {
          fetch(url, {signal:abortController.signal}) 
            .then((res) => {
              if (!res.ok){
                throw Error(' could not fetch the data for that resourc');
              }
              return res.json();
            })
            .then((data) => {
              getData(data);
              complete(false);
              seterror(null);
            }).catch( err => {
              if(err.name === 'abortError'){
                console.log('abortError');
              }else{
                complete(false);
                seterror(err.message);
              }
            })
        }, 1000);
        return () => abortController.abort();
    }, [url]);
    return {Data ,padding, error}
}
