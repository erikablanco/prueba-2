import { useEffect } from "react";

//esta sirviendo

export const GetNewsLog = () => {

    const API =`https://newsapi.org/v2/top-headlines?country=co&apiKey=095c57b3009d42ce8ed450f53b9c955d`;
 
    
    useEffect(() => {
        fetch(API).then(response=> response.json())
        .then(data=>{
            console.log(data);

            // data.articles.map(news => {console.log(news.title);
            // //console.log("Fuente: ", news.source.name);
            // });
            

        });
    },[])

}


























// import { GetNews } from "./GetNews"


// export const GetNewsLog = () => {

//     const newsCO = GetNews();
//     console.log(newsCO);



//     return(
//         console.log(newsCO.article.title)
//     )
//     // return(
//     //     <div>

//     //         {newsCO.length !== 0  ? newsCO.articles.map( article => <h1 key={article.title}>{article.title}</h1>): null}
//     //         {/* {newsCO.length !== undefined ? newsCO.articles.map( article => <h1 key={article.title}>{article.title}</h1>): null} */}
//     //         {/* {newsCO !== undefined  ? newsCO.articles.map( article => <h1 key={article.title}>{article.title}</h1>): null} */}
//     //     </div>
//     // )

// }


// import { GetData } from "./simulacro"

// export const News = () => {

//     const news = GetData();
//     //console.log(news);      
//  return (        
//      <div>   
//      {news.length !== 0 ? news.articles.map (article  => <h1 key={article.title}>  {article.title} </h1>):null}      
             
//      </div>
//          )       
    
 
// }