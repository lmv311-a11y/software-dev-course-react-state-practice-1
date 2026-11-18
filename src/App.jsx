import { useState } from 'react';
import {movies as initialMovie} from './mock-data/movies';
import GenreList from './components/GenreList';
import {genres} from './mock-data/genres';
import MovieList from './components/MovieList';
import './App.css';


function App() {
	const[currentGenre, setCurrentGenre] = useState('')
	const[movies, setMovies] = useState(initialMovie)
	
	const selectMovie = movies.filter(
    (movieByGenre) => movieByGenre.genre === currentGenre
	);
	
	function missingGenre(){
		if(selectMovie.length === 0){
			return (
			
			<p>No movies are available for this genre</p>
			);
		}
	}		
	

	return <>
		
		<div>

			<GenreList movieGenre = {genres}
					   changeGenre = {setCurrentGenre}
					   
			/>	
	
			<MovieList filterMovies = {selectMovie}/>
			
			
			<p>Select genre :{currentGenre}</p>

	
			
	
	{missingGenre()}
		</div>
		</>;
}


export default App;
