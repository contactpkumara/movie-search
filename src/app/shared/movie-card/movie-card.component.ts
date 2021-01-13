import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieService } from 'src/app/modules/core/service/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input('title') public title: string;
  @Input('poster') public poster: string;
  @Input('year') public year: string;
  @Input('imdbID') public imdbID: string;
  public movieDetais: any;
  public showDetails: boolean = false;

  constructor(
    private movieService: MovieService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  getMovieDetailsByImdbId(imdbId) {
    this.movieService.getMovieDetailsByImdbId(imdbId).subscribe(response => {
      this.movieDetais = response;
      this.showDetails = true;
    },
      error => {
        this.snackBar.open("Unable to get Movie Details", "close", {
          duration: 3000,
        });
      });
  }

  readMore() {
    if (this.showDetails) {
      this.showDetails = false;
    } else {
      this.showDetails = true;
    }
  }

}
