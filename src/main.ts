import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "zone.js/dist/zone";
import { AppModule } from "./app.module";
platformBrowserDynamic().bootstrapModule(AppModule).catch(console.error);

// @Component({
//   selector: 'my-app',
//   standalone: true,
//   imports: [SharedModule, PostsModule, HeaderModule],
//   template: `
//     <app-header [name]="'Publications'"></app-header>
//     <div class="container">
//       <app-posts></app-posts>
//     </div>
//   `,
//   styles: [
//     `
//       h1 {
//         text-align: center;
//       }
//       .container {
//         padding: 16px;
//       }
//     `,
//   ],
//   // providers: [PostsService],
// })
// export class App {
//   // private _subject = new Subject<string>();
//   // _subject$ = this._subject.asObservable();

//   // private _behaviorSubject = new BehaviorSubject<string>('Paul');
//   // _behaviorSubject$ = this._behaviorSubject.asObservable();

//   // private _replaySubject = new ReplaySubject<string>();
//   // _replaySubject$ = this._replaySubject.asObservable(); // AsyncSubject

//   constructor() {
//     // setTimeout(async () => {
//     //   await lastValueFrom(this.posts.addPost({
//     //     title: 'Paul qui regarde derrière!',
//     //     comments: [],
//     //   }));
//     // }, 5000);

//     // this.posts.posts$.subscribe((state) => console.log('Posts: ', state));
//     // let count = 0;
//     // const interval = setInterval(() => {
//     //   if (count >= 1) {
//     //     clearInterval(interval);
//     //   }
//     //   const value = `Fernanda${Array.from(new Array(count).keys())
//     //     .map(() => '!')
//     //     .join('')}`;
//     //   console.log('Produced value: ', value);
//     //   this._subject.next(value);
//     //   count += 1;
//     // }, 1000);
//     // setTimeout(() => {
//     //   this._subject$.subscribe((state) =>
//     //     console.log('Received value: ', state)
//     //   );
//     //   this._behaviorSubject$.subscribe((state) =>
//     //     console.log('Received Behavior subject value: ', state)
//     //   );
//     // }, 4000);
//     // setTimeout(() => {
//     //   this._behaviorSubject.next('Fernanda');
//     // }, 6000);
//     // setTimeout(() => {
//     //   console.log('Last state value: ', this._behaviorSubject.getValue());
//     //   this._behaviorSubject$.subscribe((value) =>
//     //     console.log('After 8 seconds:', value)
//     //   );
//     // }, 8000);
//     // setTimeout(() => {
//     //   this._replaySubject.next('Christophe!');
//     // }, 2000);
//     // setTimeout(() => {
//     //   this._replaySubject.next('Benjamin!');
//     // }, 3000);
//     // setTimeout(() => {
//     //   this._replaySubject.next('Harry!');
//     // }, 4000);
//     // setTimeout(() => {
//     //   this._replaySubject$.subscribe((value) =>
//     //     console.log('After 5 seconds: ', value)
//     //   );
//     // }, 5000);
//     // setTimeout(() => {
//     //   this._replaySubject$.subscribe((value) =>
//     //     console.log('After 10 seconds: ', value)
//     //   );
//     // }, 10000);
//   }
// }
