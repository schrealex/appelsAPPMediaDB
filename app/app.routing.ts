import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail.component';
import { GamesComponent } from './games.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'movie/detail/:title/:id',
        component: MovieDetailComponent
    },
    {
        path: 'games',
        component: GamesComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);