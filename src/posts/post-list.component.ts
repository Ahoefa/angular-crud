import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PostsService } from "./post.service";
import { Post } from "./types";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styles: [
    `
      .post-card-list-container {
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .card-container {
        display: inline;
        padding: 16px 8px;
      }
    `,
  ],
})
export class PostListComponent {
  @Input() posts: Post[];

  @Output() postChange = new EventEmitter();

  constructor(private postService: PostsService) {}

  delete(post: Post): void {
    console.log(post);
    if (confirm("Voulez-vous vraiment effectuer cette action ?")) {
      this.postService.deletePost(post.id).subscribe();
    }
  }

  // selectedPost!: Post;
  // onSelect(post: Post): void {
  //   this.selectedPost = post;
  //   console.log(post);
  // }
  
  onSelect(post: Post): void {
    this.postChange.emit(post);
    console.log(post);
  }
}
