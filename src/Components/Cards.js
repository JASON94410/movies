const Cards = ({movie}) => {
    
    const img = `https://image.tmdb.org/t/p/original/${movie.poster_path}`

    function formatDate(dateString) {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      }

    return (
        
        <figure className="card-container"> 
        <img className="card-poster" src={img} alt="poster movie"/>
        <figcaption>
          <ul>
            <p>{movie.title}</p>
            <p> Sortie le : {formatDate(movie.release_date)}</p>
            <p> Nombre de vote : {movie.vote_count}</p>
            <p> Synopsis : {movie.overview}</p>
            <p> Note moyennne : {movie.vote_average}/10</p>
          </ul>
        </figcaption>
      </figure>
            
        
    );
};



export default Cards;