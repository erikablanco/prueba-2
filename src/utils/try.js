//import { useEffect, useState} from "react";
//
//
//export const Homepage= () =>  {
//    const [articles, setArticles] = useState([]);
//    const [term, setTerm] = useState('election');    
//    const [hold, setHold] = useState(true);    
//    
//    useEffect(() => {        
//        const fetch = async () => {      
//            try {            
//                const res = await fetch (` https://newsapi.org/v2/everything?q=keyword&apikey=095c57b3009d42ce8ed450f53b9c955d`        
//                )         
//                 const articles = await res.json()          
//                 setArticles(articles.response.docs)         
//                 console.log(articles.response.docs)          
//                 setHold(false)
//      } catch (error) {          
//        console.error(error);        
//     }            
//}
//          
//}, [term])
//  return undefined;
//}