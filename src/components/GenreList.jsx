


function GenreList(props){
    return(
        <div>

           {props.movieGenre.map((genreAvailable)=> (
            <button  key ={genreAvailable.id} onClick={()=>(props.changeGenre(genreAvailable.name))}>
            {genreAvailable.name}
            </button>
            ))}
       
        </div>
    
    )
}

export default GenreList
