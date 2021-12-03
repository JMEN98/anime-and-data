import react from "react";
import Anime from "../Anime.json"

function Home (){
   return(
    <div>
      {Anime.map((anime,i)=>(
         <div key={i}> 
         <h1>
         {anime.title}
         </h1>
         <h2>
           {anime.years}<br></br>
           {anime.genres}<br></br>
           {anime.maincharater}
         </h2>
         
          



         </div>








      ))}

    </div>


   );





};
export default Home