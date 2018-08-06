import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

complexForm : FormGroup;
constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'movieName' : [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(30),Validators.pattern('[a-zA-Z0-9 ]+')])],
      'movieRating': ["",Validators.compose([Validators.required, Validators.min(1),Validators.max(5),Validators.pattern('^(?:([1-5])[.]{1}[0-9]|[1-5])')]) ],
      'movieGenre' : ["", Validators.required]
    })
  }

  submitForm(value: any):void{
    console.log('Submitted Movie Data: ')
    console.log(value);
  }

  ngOnInit() {
  }

}
