// import { useEffect, useState } from "react";


// export const GetData = () => {

//     const [dataApi, setDataApi] = useState ([])

//     const API= `https://newsapi.org/v2/top-headlines?country=co&apiKey=095c57b3009d42ce8ed450f53b9c955d`
//     //console.log(API);

//     useEffect(() => {
//         fetch(API)
//         .then(res => res.json()).then(results => {
//             //console.log(results);
//             setDataApi(results);

//         })
//     }, [])
//     return dataApi;
// }