import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private data?: any;
  private data2?: any;
  constructor(private http: HttpClient) { }

  setData(data: any) {
    this.data = data;
  }

  //this is 
  getData() {
    let temp = this.data;
    this.clrData();
    return temp;
  }

  //this is 
  clrData() {
    this.data = 'undefined';
  }
  getAllCharacters() :Observable<any> {
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey='+environment.api+'&hash='+environment.hash).pipe(catchError(this.errorHandler));
  }
  
  getCharacterByName(name : string) :Observable<any> {
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters?name=' + name + '&ts=1&apikey=' + environment.api + '&hash=' + environment.hash).pipe(catchError(this.errorHandler));
  }
  
  getComicbyId(id: string){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters/' + id + '/comics?ts=1&apikey=' + environment.api + '&hash='+environment.hash).pipe(catchError(this.errorHandler));
  }

  getSeriesbyId(id: string){
    return this.http.get('https://gateway.marvel.com:443/v1/public/characters/' + id + '/series?ts=1&apikey=' + environment.api + '&hash='+environment.hash).pipe(catchError(this.errorHandler));
  }

  getAllComics(){
    return this.http.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=' + environment.api + '&hash='+environment.hash).pipe(catchError(this.errorHandler));
  }

  getComicsByName(name :string){
    return this.http.get('https://gateway.marvel.com:443/v1/public/comics?title='+ name +'&ts=1&apikey=' + environment.api + '&hash='+environment.hash).pipe(catchError(this.errorHandler));
  }

  getAllSeries(){
    return this.http.get('https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=' + environment.api + '&hash='+environment.hash).pipe(catchError(this.errorHandler));
  }

  getSeriesByName(name: string){
    return this.http.get('https://gateway.marvel.com:443/v1/public/series?title='+ name +'&ts=1&apikey=' + environment.api + '&hash='+environment.hash).pipe(catchError(this.errorHandler));
  }

  errorHandler(error :HttpErrorResponse){
    console.log(error)
    return throwError(error.message || 'server error');
  }

}
