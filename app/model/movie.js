"use strict";
var Movie = (function () {
    function Movie(imdbID, title, year, poster, favorite) {
        if (favorite === void 0) { favorite = false; }
        this.imdbID = imdbID;
        this.title = title;
        this.year = year;
        this.poster = poster;
        this.favorite = favorite;
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map