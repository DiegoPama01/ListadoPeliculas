export interface SearchPetition {
    Search:       MovieDisplay[];
    TotalResults: string;
    Response:     String;
    Error:        string;
}

export interface MovieDisplay {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   Type;
    Poster: string;
}

export enum Type {
    Movie = "Movie",
}