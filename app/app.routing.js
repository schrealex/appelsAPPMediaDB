"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require("./dashboard.component");
var movies_component_1 = require('./movies.component');
var movie_detail_component_1 = require('./movie-detail.component');
var games_component_1 = require('./games.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'movies',
        component: movies_component_1.MoviesComponent
    },
    {
        path: 'movie/detail/:title/:id',
        component: movie_detail_component_1.MovieDetailComponent
    },
    {
        path: 'games',
        component: games_component_1.GamesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map