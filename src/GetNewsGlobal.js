import { useState } from "react";
import { GetNews } from "./utils/GetNews";

import Loader from "react-loader-spinner";
import { GetNewsLog } from "./utils/GetNewsLog";

export function GetNewsGlobal(){
     
    const [news, SetNews]= useState([]);
    const [loading, setLoading]= useState(false);
    const [error, Seterror] = useState("");

    // const articles = GetNewsLog();
    const API =`https://newsapi.org/v2/top-headlines?country=co&apiKey=095c57b3009d42ce8ed450f53b9c955d`;
    const handleclick = async () => {
        try{
            const response = await fetch(API);
            SetNews(response);
            setLoading(false)
             console.log(news);
        }
        catch (error){
          console.error('error data');
        }
    };
    return (
           <div className="App">
       
           <h1>¿Quieres saber a cuanto está el dolar hoy?</h1>
           {loading ? (
            <Loader />
          ) : error !== "" ? (
            <h3>
              El servidor no esta disponible en este momento. Vuelve más tarde.{" "}
              {error}
            </h3>) 
        }

          <button onClick={handleClick} className="btn-primary">
            Lo quiero saber ya
          </button>
        
      </div> 
        
    )
};



// import { useState } from "react";
// import { GetNewsLog } from "./utils/GetNewsLog";

// import Loader from "react-loader-spinner";

// export function GetNewsGlobal(){
    
//     const API =`https://newsapi.org/v2/top-headlines?country=co&apiKey=095c57b3009d42ce8ed450f53b9c955d`;
 
//     const [news, SetNews]= useState([]);
//     const [loading, setLoading]= useState(false);
//     const [ error, setError] = useState("");

//     const handleClick = async () => {
//         try {
//             setLoading(true);
//             const response = await fetch(API);
//             const news = await response.json();
//             console.log(news.response.doc);
//             setLoading(false);

//         }catch (error){
//             console.error(error);
//             setError(error.messeage);
//             setLoading(false);
//         }
//     } 
    
    
//     return (
//         <div className="App">
       
//           <h1>¿Quieres saber a cuanto está el dolar hoy?</h1>
//           {loading ? (
//             <Loader />
//           ) : error !== "" ? (
//             <h3>
//               El servidor no esta disponible en este momento. Vuelve más tarde.{" "}
//               {error}
//             </h3>) 
//         }

//           <button onClick={handleClick} className="btn-primary">
//             Lo quiero saber ya
//           </button>
        
//       </div> 
        
//     )
// };

// import React from "react";
// import ReactDOM from "react-dom";

// const people = [
//   "Siri",
//   "Alexa",
//   "Google",
//   "Facebook",
//   "Twitter",
//   "Linkedin",
//   "Sinkedin"
// ];

// function App() {
//  const [searchTerm, setSearchTerm] = React.useState("");
//  const [searchResults, setSearchResults] = React.useState([]);
//  const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };
//  React.useEffect(() => {
//     const results = people.filter(person =>
//       person.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);

//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <ul>
//          {searchResults.map(item => (
//           <li>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }