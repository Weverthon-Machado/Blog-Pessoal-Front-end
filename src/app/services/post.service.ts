import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'http://localhost:8080/postagens';

  constructor(private http: HttpClient) { }

  // Headers (se necessário, ex.: token)
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // CRUD
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post, this.httpOptions);
  }

  update(post: Post): Observable<Post> {
    return this.http.put<Post>(this.apiUrl, post, this.httpOptions);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
