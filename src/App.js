import './App.css';
//import {GetNews} from "./utils/GetNews";
import { GetNewsLog } from './utils/GetNewsLog';
import { GetNewsGlobal } from './GetNewsGlobal.js';
//import { GetData } from './simulacro';
import { News } from './componets/News.js';
function App() {

  //GetNews(); 
  //News();
  // GetNewsLog();
  //GetData ();
  return (
    <div className="App">
    <News/>
    <GetNewsGlobal/>
    </div>
  );
}

export default App;

// import './App.css';
// import { News } from './news';
// //import { GetData } from './simulacro';
// import { GetNews } from './utils/GetNews';
// import { ViewNews } from './ViewNews';





// function App() {

//   GetNews();
//   //GetData ();
//   return (
//     <div className="App">
//      <ViewNews/>
//     </div>
//   );
// }

// export default App;

