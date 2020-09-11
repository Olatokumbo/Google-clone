import { useEffect, useState } from "react";
const CONTEXT_KEY = "5a4561113ea8aa34f";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      ).then((res)=>res.json()).then((result)=>{
          console.log(result)
          setData(result)
      });
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
