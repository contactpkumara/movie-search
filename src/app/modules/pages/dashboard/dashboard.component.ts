import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieService } from './../../core/service/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public searchForm: FormGroup;
  public movies: any = [];

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createSearchForm();
  }

  createSearchForm() {
    this.searchForm = this.fb.group({
      searchKey: ['', Validators.required]
    });
  }

  searchMovie() {
    console.log(this.searchForm.value.searchKey);
    this.movieService.searchMovie(this.searchForm.value.searchKey).subscribe(response => {
      this.movies = response;
    },
      error => {
        this.snackBar.open("Unable to Search Movies", "close", {
          duration: 3000,
        });
      });
  }

}
