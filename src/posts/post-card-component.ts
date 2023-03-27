import { Component, EventEmitter, Input } from '@angular/core';
import { Post } from './types';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  @Input() post!: Post;

  @Input('class')
  cssClass: string = '';

  /**
   * @attr clickable
   */
  @Input()
  clickable: boolean = false;
  postsService: any;

  get ngClass() {
    return {
      clickable: this.clickable,
    };
  }

}
