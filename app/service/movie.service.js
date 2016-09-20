"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/Rx');
var movie_1 = require('../model/movie');
var movie_information_1 = require("../model/movie-information");
var searchMoviesUrl = function (title) { return ("http://www.omdbapi.com/?s=" + title); };
var movieInformationUrl = function (imdbId) { return ("http://www.omdbapi.com/?i=" + imdbId); };
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.searchMovies = function (title) {
        console.log(searchMoviesUrl(title));
        return this.http.get(searchMoviesUrl(title)).map(function (result) { return result.json().Search; })
            .map(function (movies) {
            var result = [];
            if (movies) {
                movies.forEach(function (movie) {
                    result.push(new movie_1.Movie(movie.imdbID, movie.Title, movie.Year, movie.Poster, false));
                });
            }
            return result;
        });
    };
    MovieService.prototype.getMovieInformation = function (movie) {
        console.log(movieInformationUrl(movie.imdbID));
        return this.http.get(movieInformationUrl(movie.imdbID)).map(function (result) { return result.json(); })
            .map(function (m) { return new movie_information_1.MovieInformation(m.imdbID, m.Title, m.Year, m.Genre, m.Runtime, m.Poster, m.Director, m.Writer, m.Actors, m.Plot, m.Metascore, m.imdbRating, m.imdbVotes, m.Type, movie.favorite); });
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map