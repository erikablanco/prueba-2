import { useEffect, useState } from "react";
import "./news.css"
// import { GetNewsLog } from "../utils/GetNewsLog";


// const newsdata = GetNewsLog();

export const News = ({searchText}) => {    
    
    const [text, setText] = useState('')
    const handleInputChange = (e) => { 
        e.preventDefault()
        searchText(text)  
    }

   
    return (  
        
        <div>
          <div className="news-container">            
             <form onSubmit={handleInputChange}>                
             <input type="text"                  
             placeholder="Search... Hit Enter"                  
             className="input"                  
             name="Text"                  
             autoComplete="off"                  
             onChange={(e) => setText(e.target.value)}
             ></input>  
             </form>   
              <button type="submit " >CONSULTAR NOTICIAS</button>
        </div>


        </div>    
    )
}

// const newsdata = GetNewsLog();

// export const News = ({searchText}) => {    
    
//     const [text, setText] = useState('')
//     const handleInputChange = (e) => { 
//         e.preventDefault()
//         searchText(text)  
//     }

//     const [searchTerm, setSearchTerm] = useState("");
//    const [searchResults, setSearchResults] = useState([]);
//     const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };
//  useEffect(() => {
//     const results = newsdata.filter(article =>
//       article.toLowerCase().includes(searchTerm)
//     );
//     setSearchResults(results);
//   }, [searchTerm]);
//     return (  
        
//         <div>
//           <div className="news-container">            
//              <form onSubmit={handleInputChange}>                
//              <input type="text"                  
//              placeholder="Search... Hit Enter"                  
//              className="input"                  
//              name="Text"                  
//              autoComplete="off"                  
//              onChange={handleChange}
//              value={searchTerm}
//              ></input>  
//              </form>   
              
//         {searchResults.map(item => (
//             <button>{item}</button>
//         ))}CONSULTAR NOTICIAS
//         </div>


//         </div>    
//     )
// }

// export const News = () => {
//  const [searchTerm, setSearchTerm] = useState("");
//  const [searchResults, setSearchResults] = useState([]);
//  const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };
//  useEffect(() => {
//     const results = newsdata.filter(article =>
//       article.toLowerCase().includes(searchTerm)
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


// export const News  = () =>{
    
//     const [usuarios, setUsuarios]= useState([]);  
//     const [tablaUsuarios, setTablaUsuarios]= useState([]);  
//     const [busqueda, setBusqueda]= useState("");
   
//     const peticionGet=async()=>{  await axios.get("https://jsonplaceholder.typicode.com/users")  
//     .then(response=>{ setUsuarios(response.data);    setTablaUsuarios(response.data);  })
//     .catch(error=>{    console.log(error);  })}

//      const handleChange=e=>{  setBusqueda(e.target.value);  
//     filtrar(e.target.value);}
//      const filtrar=(terminoBusqueda)=>{  
//          var resultadosBusqueda=tablaUsuarios
//          .filter((elemento)=>{    
//              if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())    
//              || elemento.company.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())    
//              ){      
//                  return elemento;    
//                 } 
//              });  
//              setUsuarios(resultadosBusqueda);
//             }
//             useEffect(()=>{peticionGet();
// },[])
  
//      return (    
//      <div className="App">      
//      <div className="containerInput">       
//       <input  className="form-control inputBuscar"
//          value={busqueda} 
//           placeholder="Búsqueda por Nombre o Empresa"          
//           onChange={handleChange} />        
//           <button className="btn btn-success">         
                  
//            </button>      
//            </div>
//          <div className="table-responsive">      
//           <table className="table table-sm table-bordered">         
//           <thead>          
//                <tr>             
//                    <th>ID</th>            
//                     <th>Nombre</th>            
//                      <th>Teléfono</th>             
//                      <th>Nombre de Usuario</th>           
//                        <th>Correo</th>           
//                          <th>Sitio Web</th>             
//                          <th>Ciudad</th>            
//                           <th>Empresa</th>           
//                           </tr>        
//                            </thead>

//             <tbody>{usuarios && usuarios.map((usuario)=>(<tr key={usuario.id}><td>{usuario.id}</td> 
//             <td>{usuario.name}</td>              
//              <td>{usuario.phone}</td>              
//               <td>{usuario.username}</td>              
//                <td>{usuario.email}</td>               
//                <td>{usuario.website}</td>              
//                 <td>{usuario.address.city}</td>            
//                    <td>{usuario.company.name}</td>          
//                       </tr> ))}       
//                         </tbody>

//                    </table>
//                 </div>   
//          </div>
//   );
// }

// export const News = () => {
  
  
//   /*
//   async componentDidMount(){
//     await this.fetchJale()
//   }*/

//   fetchtry = async () => {
   
//     let res = await fetch(`https://newsapi.org/v2/top-headlines?country=co&apiKey=41591f6601fd4d07bd0b7784aec55083${this.state.name}`)
//     let data = await res.json()

    
//     console.log(data.articles);
   
//     this.setState({
      
//     })
//   }
  

//   handleArticle = event => {
//     this.setState({
//       name: event.target.value
//     })
//   }
  

//   handleSubmit = event =>{
//     var alert = this.state.name;
//     console.log(alert)
//     alert(alert)
//     this.fetchtry()
//     //limpiar
//     this.setState({
//       name: '',
//     })
//     event.preventDefault()
//   }
  
    

//     render() 
//         return (
//         <div className="card text-center">
          
//           <div className="card-body">
//         <form onSubmit={this.handleSubmit}>    
           
//             <input 
//                 type="text"
//                 placeholder="nombre"
//                 value={this.state.articles}
//                 onChange={this.handleName}
//             />
//             <button type="submit" className="btn btn-primary">submit</button>
//         </form>
//         <img src={this.state.articles}/>
//           </div>
          
//         </div>
//         );
// }



























// import "./news.css";
// import React, {useState} from 'react';

// export const News = ({searchText}) => {    
    
//     const [text, setText] = useState('')
//     const handleInputChange = (e) => { 
//         e.preventDefault()
//         searchText(text)  
//     }
//     return (  
        
//         <div>
//           <div className="news-container">            
//              <form onSubmit={handleInputChange}>                
//              <input type="text"                  
//              placeholder="Search... Hit Enter"                  
//              className="input"                  
//              name="Text"                  
//              autoComplete="off"                  
//              onChange={(e) => setText(e.target.value)}
//              ></input>  
//              </form>   
//               <button>CONSULTAR NOTICIAS</button>
//         </div>


//         </div>    
//     )
// }