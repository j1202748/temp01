import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  loadArticle(){
    return this.http.get<Article[]>('/api/articles.json');

  }
}
