import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  posts: Post[];
  postUrl= "https://jsonplaceholder.typicode.com/posts?_limit=5";
  constructor(public http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }
}
