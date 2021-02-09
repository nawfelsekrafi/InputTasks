import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts : Post[];
  write: boolean = false;
  title:string;
  body:string;
  id:number;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(post =>{
      this.posts = post;
    })
  }

  togglePost(){
    this.write = !this.write;
  }


  addPost(){
    const post ={
      id: Math.random(),
      title: this.title,
      body: this.body
    }
    
    this.postService.addPost(post).subscribe(p =>{
      this.posts.push(p);
    });
  }

  deletePost(post: Post){
      this.posts = this.posts.filter(p => p.id != post.id);
      this.postService.deletePost(post).subscribe();
  }

  updatePost(post: Post){
    
    this.postService.updatePost(post).subscribe();
  }


}
