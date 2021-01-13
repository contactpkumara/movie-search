import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  searchMovie(searchString: string) {
    return this.http.get(`${this.baseUrl}/?s=${searchString}&apikey=d16c8979`)
      .pipe(map(res => {
        return res;
      },
        error => {
          catchError(error);
        }));
  }

  getMovieDetailsByImdbId(imdbId: string) {
    return this.http.get(`${this.baseUrl}/?i=${imdbId}&apikey=d16c8979`)
      .pipe(map(res => {
        return res;
      },
        error => {
          catchError(error);
        }));
  }
}
