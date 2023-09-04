import { useEffect, useState } from "react";
import Cards from "./Cards"

const Movie = () => {

    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmE0YjkxYmNjNGZiMmMyZDk1NGFlZjlkMmViMmU0NCIsInN1YiI6IjY0ZjBmZWZjM2E5OTM3MDExY2JkZDZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sPjp8MlpHbSaX30XcjKyPlVcmv8-_N50jApvjq4x7bg'
        }
      };
      
      // Permet de récupérer les données d'une API // Similaire à Axios 
    // ATTENTION /!\ RESSOURCE EXTERNE, qui dit RESSOURCE EXTERNE DIT UN HOOK SPECIFIQUE, /!\
    // ATTENTION AUX BOUCLES INFINIES MEME SI CA FONCTIONNE
    
   useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options)
    .then(response => response.json())
    .then(response => {
      setData(response.results)
       
        console.log("Test pour récupération de la Data ") 
        console.log(data)
        
      



    })
    .catch(err => console.error(err));
   },[])
    return (
        <div>
            {data.map((oneData, i) => <Cards key={i} movie={oneData} /> )}
        </div>
    );
};

export default Movie;