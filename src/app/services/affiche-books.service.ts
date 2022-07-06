import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class AfficheBooksService {
  
  constructor(private httpClient : HttpClient) { }

  private BASE_URL = "http://localhost:8080/api";

  
  getBooks(): Observable<Book[]> {

    return this.httpClient.get<Book[]>(`${this.BASE_URL}/books-management/books`);

    // return this.pokedex;
  }

}
