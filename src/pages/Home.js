import  { useEffect, useState } from "react";


//import Anime from "../Anime.json"

 function Home (){
  const [Anime,setAnime] = useState()

 
  useEffect(function(){
    fetch("http://localhost:3000/api/anime")
         .then(response=>response.json()).then(data=>{
           setAnime(data)
           console.log(data) 
           
         })
         .catch(error=>console.log(error))
         
   

 } ,[])

   return(
    <div>
      {Anime&&Anime.map(...(anime,i)=>(
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