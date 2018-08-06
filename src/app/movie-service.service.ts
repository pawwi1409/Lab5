import { Injectable } from '@angular/core';
import { Movie } from './movie-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  static movieId:number;
  static movieName:string;
  static movieGenre:string;
  static movieRating:number;
  movie:Movie;
   constructor(private http:HttpClient) {}
   getMovies():Observable<Movie[]> {
      return this.http.get<Movie[]>('../assets/movies.json');
    }

    setMovies():Observable<Movie[]>{
      let movie=("moviesId :"+MovieServiceService.movieId+", moviesName :"+MovieServiceService.movieName+", moviesGenre :"+MovieServiceService.movieGenre+", moviesRating :"+MovieServiceService.movieRating);
      return this.http.post<Movie[]>('../assets/movies.json',JSON.parse(movie));
    }
}
