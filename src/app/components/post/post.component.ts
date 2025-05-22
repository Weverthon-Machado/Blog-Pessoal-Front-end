import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  listaPostagens: Post[] = [];
  post: Post = {} as Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findAllPostagens();
  }

  findAllPostagens() {
    this.postService.getAll().subscribe((resp: Post[]) => {
      this.listaPostagens = resp;
    });
  }

  cadastrar() {
    this.postService.create(this.post).subscribe((resp: Post) => {
      this.post = resp;
      alert('Postagem cadastrada com sucesso!');
      this.findAllPostagens();
      this.post = {} as Post;
    });
  }

  atualizar() {
    this.postService.update(this.post).subscribe((resp: Post) => {
      this.post = resp;
      alert('Postagem atualizada com sucesso!');
      this.findAllPostagens();
      this.post = {} as Post;
    });
  }

  deletar(id: number) {
    this.postService.delete(id).subscribe(() => {
      alert('Postagem deletada!');
      this.findAllPostagens();
    });
  }

  selecionarPostagem(post: Post) {
    this.post = { ...post };
  }
  limpar() {
  this.post = {
    id: 0,
    titulo: '',
    texto: '',
    tema: '',
    data: new Date()
  };
}

}
