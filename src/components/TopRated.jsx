import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAction } from '../redux/Actions';
import MoviesApi from '../services/MoviesApi';
import MovieCard from './MovieCard';

const TopRated = () => {
	const { toprated } = useSelector((state) => state.movies);
	const dispatch = useDispatch();

	const fetchMovies = async () => {
		try {
			const data = await MoviesApi.getInTheatresNow();
			dispatch(fetchMoviesAction(data));
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<div className="container">
			<h1 className="mt-4 mb-4">In Theatres Now</h1>
			<div className="row">{toprated  && toprated.map((movie) => <MovieCard movie={movie} />)}</div>
		</div>
	);
};

export default TopRated;