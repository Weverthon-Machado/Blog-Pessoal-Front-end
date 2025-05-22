import { Injectable } from "@angular/core"
import type { HttpClient } from "@angular/common/http"
import { type Observable, of } from "rxjs"
import { delay } from "rxjs/operators"
import type { Post } from "../models/post.model.js"

@Injectable({
  providedIn: "root",
})
export class PostService {
  // In a real application, this would be an environment variable
  private apiUrl = "api/posts"

  // Mock data for demonstration
  private MOCK_POSTS: Post[] = [
    {
      id: "1",
      title: "Introdução ao Angular 18",
      content:
        "O Angular 18 é a mais recente versão do framework, trazendo melhorias significativas em performance e developer experience. Com o novo compilador Ivy aprimorado, as aplicações ficam menores e mais rápidas.",
      author: "João Silva",
      date: "2023-05-15",
    },
    {
      id: "2",
      title: "TypeScript: Por que usar?",
      content:
        "TypeScript adiciona tipagem estática ao JavaScript, tornando seu código mais robusto e fácil de manter. É essencial para aplicações de grande escala e melhora significativamente a experiência de desenvolvimento com autocomplete e detecção de erros em tempo de compilação.",
      author: "Maria Santos",
      date: "2023-06-20",
    },
    {
      id: "3",
      title: "Angular Material: Componentes prontos para uso",
      content:
        "O Angular Material oferece uma biblioteca completa de componentes de UI que seguem as diretrizes do Material Design, acelerando o desenvolvimento. Com temas personalizáveis e componentes acessíveis, é uma excelente escolha para aplicações profissionais.",
      author: "João Silva",
      date: "2023-07-10",
    },
  ]

  constructor(private http: HttpClient) {
    this.initializeStorage()
  }

  // Helper to initialize localStorage with mock data if empty
  private initializeStorage(): void {
    if (typeof localStorage !== "undefined") {
      const storedPosts = localStorage.getItem("blog_posts")
      if (!storedPosts) {
        localStorage.setItem("blog_posts", JSON.stringify(this.MOCK_POSTS))
      }
    }
  }

  // Get all posts
  getPosts(): Observable<Post[]> {
    // In a real application, this would be:
    // return this.http.get<Post[]>(this.apiUrl);

    // For demonstration, we're using localStorage
    const posts = this.getPostsFromStorage()
    return of(posts).pipe(delay(500)) // Simulate API delay
  }

  // Get a single post by ID
  getPostById(id: string): Observable<Post> {
    // In a real application, this would be:
    // return this.http.get<Post>(`${this.apiUrl}/${id}`);

    const posts = this.getPostsFromStorage()
    const post = posts.find((p) => p.id === id)

    if (!post) {
      throw new Error(`Post with ID ${id} not found`)
    }

    return of(post).pipe(delay(500)) // Simulate API delay
  }

  // Create a new post
  createPost(postData: Omit<Post, "id">): Observable<Post> {
    // In a real application, this would be:
    // return this.http.post<Post>(this.apiUrl, postData);

    const posts = this.getPostsFromStorage()
    const newPost: Post = {
      ...postData,
      id: Date.now().toString(), // Generate a unique ID
    }

    const updatedPosts = [...posts, newPost]
    this.savePostsToStorage(updatedPosts)

    return of(newPost).pipe(delay(500)) // Simulate API delay
  }

  // Update an existing post
  updatePost(id: string, postData: Partial<Post>): Observable<Post> {
    // In a real application, this would be:
    // return this.http.put<Post>(`${this.apiUrl}/${id}`, postData);

    const posts = this.getPostsFromStorage()
    const postIndex = posts.findIndex((p) => p.id === id)

    if (postIndex === -1) {
      throw new Error(`Post with ID ${id} not found`)
    }

    const updatedPost = {
      ...posts[postIndex],
      ...postData,
    }

    const updatedPosts = [...posts]
    updatedPosts[postIndex] = updatedPost
    this.savePostsToStorage(updatedPosts)

    return of(updatedPost).pipe(delay(500)) // Simulate API delay
  }

  // Delete a post
  deletePost(id: string): Observable<void> {
    // In a real application, this would be:
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);

    const posts = this.getPostsFromStorage()
    const updatedPosts = posts.filter((p) => p.id !== id)
    this.savePostsToStorage(updatedPosts)

    return of(undefined).pipe(delay(500)) // Simulate API delay
  }

  // Helper methods for localStorage
  private getPostsFromStorage(): Post[] {
    if (typeof localStorage !== "undefined") {
      const storedPosts = localStorage.getItem("blog_posts")
      return storedPosts ? JSON.parse(storedPosts) : this.MOCK_POSTS
    }
    return this.MOCK_POSTS
  }

  private savePostsToStorage(posts: Post[]): void {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("blog_posts", JSON.stringify(posts))
    }
  }
}
