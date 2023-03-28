import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderModule } from "./header";
import { PostsModule } from "./posts";
import { PostsService } from './posts/post.service';
import { SharedModule } from "./shared.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./interceptors/request-interceptor";

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
  imports: [BrowserModule, SharedModule, PostsModule, HeaderModule],
  providers: [
    PostsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
