import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { CardsComponent } from './cards/cards.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';
import { MoviesHttpService } from './movies/movies-http.service';
import { GetMoviesService } from './get-movies.service';
import { HomeComponent } from './home/home.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    //CardsComponent,
    DialogModalComponent,
    MoviesComponent,
    HomeComponent,
    TvShowsComponent,
    ResumeComponent,
  ],
  entryComponents: [DialogModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [MoviesService, MoviesHttpService, GetMoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
