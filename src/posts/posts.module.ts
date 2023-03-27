import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { PostAddComponent } from './post-add.component';
import { PostCardComponent } from './post-card-component';
import { PostListComponent } from './post-list.component';
// import { PostsService } from './post.service';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [SharedModule],
  declarations: [PostsComponent, PostAddComponent, PostListComponent, PostCardComponent],
  exports: [PostsComponent, PostAddComponent],
  providers: []
})

export class PostsModule {
  // static forRoot(): any {
  //   return {
  //     ngModule: PostsModule,
  //     providers: [PostsService]
  //   };
  // }
}
