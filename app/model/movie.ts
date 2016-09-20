export class Movie {
    constructor(
        public imdbID: number,
        public title: string,
        public year: number,
        public poster: string,
        public favorite: boolean = false
    )
    {

    }
}
