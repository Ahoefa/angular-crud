import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderModule } from "./header";
import { PostsModule } from "./posts";
import { PostsService } from './posts/post.service';
import { SharedModule } from "./shared.module";

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
  imports: [BrowserModule, SharedModule, PostsModule, HeaderModule],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
