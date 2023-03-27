import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `
      .header {
        margin: 0;
        padding: 8px 16px;
        width: auto;
        height: 56px;
        background-color: hsl(217.5, 55.04%, 46.44%);
        display: flex;
        align-items: flex-start;
        align-content: space-around;
        flex-basis: 1;
        color: #fff;
      }

      .header-left {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .branding {
        font-size: 1.3rem;
        font-weight: bold;
        display: block
      }

      .header-right {
        flex-grow: 1;
      }
    `,
  ],
})
export class HeaderComponent {
  @Input() name!: string;
}
