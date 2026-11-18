

function MovieList(props){

    return(
    
         <div>

             
             <ul>
		
				{props.filterMovies.map((movie) =>(
					<li  key= {movie.id}>
						{movie.title}
					</li>
				))}
		
		    </ul>



        </div>
    )

}



	
export default MovieList