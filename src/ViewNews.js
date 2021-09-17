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
