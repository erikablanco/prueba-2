// import { useState } from "react";
// import { GetNews } from "./utils/GetNews";

// import Loader from "react-loader-spinner";

// export function ViewNews(){
     
//     const [news, SetNews]= useState("");
//     const [loading, setLoading]= useState(false);

    
//     const handleclick = async () => {
//         try{
//             const response = await GetNews();
//             SetNews(response);
//             setLoading(false)
//              console.log(news);
//         }
//         catch (error){
//           console.error('error data');
//         }
//     };
//     return (
//         <div>
//             {
//                 loading ? ( <Loader/> ) : error === "" ? {error}
//             }
//            <button onClick={handleclick}>
//             Enviar Noticias
//            </button>
//         </div> 
        
//     )
// };






//1.
export const GetNews = () => {


    const [dataApi, setDataApi]=useState([]);
    // const API= `https://newsapi.org/v2/everything?q=keyword&apikey=095c57b3009d42ce8ed450f53b9c955d`;
    const API= `https://newsapi.org/v2/top-headlines?country=co&apiKey=095c57b3009d42ce8ed450f53b9c955d`;

    useEffect(() =>{
        fetch(API).then(response => response.json())
        .then( results => {
           // console.log(results);
            setDataApi(results)
        })
    },[])
    return dataApi;
}


// //Ahustin 1.2
// import { useEffect } from "react"
// export const GetNewsLog =()=>{
//  const API = `https://newsapi.org/v2/top-headlines?country=co&apiKey=41591f6601fd4d07bd0b7784aec55083`;
//  useEffect(()=>{
//      fetch(API).then(response=> response.json()).then(data=>{ 
//          console.log(data); /*Primer punto (solo mostrar Array en consola) */
//          data.articles.map(news =>  {console.log(news.title); 
//          console.log("Fuente: ", news.source.name);
//          });
//      })
//  },[])

// ///Opcion del 1.2 
// //funcion 
// import { useEffect, useState } from "react";


// export const GetData = () => {

//  const [dataApi, setDataApi] = useState ([])

//  const API= `https://newsapi.org/v2/top-headlines?country=co&apiKey=095c57b3009d42ce8ed450f53b9c955d`
//  //console.log(API);

//  useEffect(() => {
//      fetch(API)
//      .then(res => res.json()).then(results => {
//          //console.log(results);
//          setDataApi(results);

//      })
//  }, [])
//  return dataApi;
// }

// import { GetData } from "./simulacro"

//  export const News = () => {
 
//      const news = GetData();
//      console.log(news.articles);
     
     
//   return (
         
//       <div>   
//       {news.length !== 0 ? news.articles.map (article  => <h1 key={article.title}>  {article.title} </h1>):null}
       
              
//       </div>
//           )   
// }
