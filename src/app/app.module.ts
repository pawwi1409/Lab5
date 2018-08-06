import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'
import { ReactiveFormsModule,FormsModule,Validators } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const appRoutes:Routes=[
  {path:'addMovie',component:AddMovieComponent},
  {path:'searchMovie',component:SearchMovieComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    SearchMovieComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
