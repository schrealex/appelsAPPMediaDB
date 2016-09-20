import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from './model/movie';
import { MovieService } from  './service/movie.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit
{
    movies: Movie[] = [];

    constructor(private router: Router, private movieService: MovieService)
    {

    }

    ngOnInit(): void
    {
        this.movieService.searchMovies('Blair Witch').subscribe(movies => this.movies = movies);
    }

    gotoDetail(movie: Movie): void
    {
        let link = ['/movie/detail', movie.title, movie.imdbID];
        console.log(link);
        this.router.navigate(link);
    }
}
