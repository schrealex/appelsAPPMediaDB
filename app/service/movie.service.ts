import {Injectable} from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import {Movie} from '../model/movie';
import {MovieInformation} from "../model/movie-information";

const searchMoviesUrl = (title) => `http://www.omdbapi.com/?s=${title}`;
const movieInformationUrl = (imdbId) => `http://www.omdbapi.com/?i=${imdbId}`;

@Injectable()
export class MovieService {
    constructor(private http:Http) {

    }

    searchMovies(title:string): Observable<Movie[]> {
        console.log(searchMoviesUrl(title));
        return this.http.get(searchMoviesUrl(title)).map(result => <Movie[]> result.json().Search)
            .map((movies: Array<any>) =>
                {
                    let result:Array<Movie> = [];
                    if (movies) {
                        movies.forEach((movie) => {
                            result.push(new Movie(movie.imdbID, movie.Title, movie.Year, movie.Poster, false));
                        });
                    }
                    return result;
                }
            );
    }

    getMovieInformation(movie:Movie): Observable<MovieInformation> {
        console.log(movieInformationUrl(movie.imdbID));
        return this.http.get(movieInformationUrl(movie.imdbID)).map(result => <MovieInformation> result.json())
        .map(m => new MovieInformation(m.imdbID, m.Title, m.Year, m.Genre, m.Runtime, m.Poster, m.Director,
                m.Writer, m.Actors, m.Plot, m.Metascore, m.imdbRating, m.imdbVotes, m.Type, movie.favorite));
    }
}
