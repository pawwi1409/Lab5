import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MovieServiceService } from '../movie-service.service'
import { Movie } from '../movie-interface';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  valid=false;
  movies=[];
  displayMovies=[];
  complexForm : FormGroup;
  constructor(fb: FormBuilder,private movieService:MovieServiceService){
    this.complexForm = fb.group({
      'movieGenre' : ["", Validators.required]
    })
  }

  submitForm(value: any):void{
    this.displayMovies=[];
    this.valid=true;
    console.log(this.movies)
    console.log('Submitted Search Movie Data: ')
    console.log(value);
    for(let m of this.movies){
      if(m.moviesGenre===value.movieGenre){
        //console.log(m.moviesGenre);
        this.displayMovies.push(m);
      }
    }
    console.log(this.displayMovies);
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe(movie=>this.movies=movie);
  }

}
