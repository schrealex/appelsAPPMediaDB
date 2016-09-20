import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from "./app.component";
import { DashboardComponent }  from './dashboard.component';
import { MoviesComponent }  from './movies.component';
import { MovieDetailComponent } from './movie-detail.component';
import { GamesComponent } from './games.component';

import { MovieService } from "./service/movie.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        MoviesComponent,
        MovieDetailComponent,
        GamesComponent
    ],
    providers: [
        MovieService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule
{

}
