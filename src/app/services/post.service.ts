import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl = "https://jsonplaceholder.typicode.com/posts";
  post_limit:string = "?_limit=5";
  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postUrl}${this.post_limit}`);
  }

  addPost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.postUrl,post, httpOptions);
  }

  updatePost(post: Post): Observable<any> {
    const url = `${this.postUrl}/${post.id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }

  deletePost(post: Post): Observable<Post> {
    const url = `${this.postUrl}/${post.id}`;
    return this.http.delete<Post>(url,httpOptions);
  }

}
