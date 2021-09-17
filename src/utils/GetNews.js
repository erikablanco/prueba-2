// import { useState } from "react";
// import { useEffect } from "react";

// export const GetNews = () => {

//     const [ dataApi, setDataApi] = useState([]);

//     const API =  `https://newsapi.org/v2/top-headlines?country=co&apiKey=095c57b3009d42ce8ed450f53b9c955d`;
//     console.log(API);

//     useEffect(()=> {
//         fetch(API).then(response => response.json())
//         .then(results => {
//             console.log(results);
//             setDataApi(results);
//         })
//     },[])
//     return dataApi;
// }











//Co0n try y catch
// const API= `https://newsapi.org/v2/top-headlines?country=us&apiKey=095c57b3009d42ce8ed450f53b9c955d`
// export async function GetNews () {
//  try{
//      const response = await fetch(API);
//      const data = await response.json();
//      console.log(data);
//      return data;   
     
//  }catch(error){
//      console.error('Error Api');
//  }
// }



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

