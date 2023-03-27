import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, map, Observable, retry, tap } from "rxjs";
import { Post } from "./types";

const POSTS: Post[] = [
  {
    title: "Angular Training",
    id: new Date().getTime() + Math.random(),
    comments: [],
  },
  {
    title: "ReactJS Training",
    id: new Date().getTime() + Math.random(),
    comments: [
      {
        content: "ReactJS is an awesome UI framework",
      },
    ],
  },
];

@Injectable({
  providedIn: "root",
})
export class PostsService {
  _post$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  posts$ = this._post$.asObservable();
  // private valueUpdate = new BehaviorSubject<Post[]>();

  public constructor(private httpClient: HttpClient) {}

  getAll(): Observable<boolean> {
    // return timer(1500).pipe(
    //   // tap(() => this._post$.next(POSTS)),
    //   mergeMap(() => this.httpClient.get('http://localhost:3000/posts')),
    //   map(() => true)
    // );
    return this.httpClient
      .get<Post[]>("http://localhost:3000/posts", {
        // headers: {
        //   "Content-Type": "text/plain", // application/json
        // },
        // params: {
        //   id: 1,
        // },
        // responseType: 'arraybuffer' // Default: json : blob - Pour les fichier en Blob
      })
      .pipe(
        tap(console.log),
        map((response) => this._post$.next(response)),
        map(() => true)
      );
  }

  addPost(post: Omit<Post, "id">): Observable<Post> {
    const _post: Post = { ...post } as Post;
    // return timer(3000).pipe(
    //   tap(() => this._post$.next([...this._post$.getValue(), _post])),
    //   map(() => _post)
    // );
    return this.httpClient
      .post<Post>("http://localhost:3000/posts", _post)
      .pipe(tap((post) => {
        this._post$.next([...this._post$.getValue(), post])
      }));
  }

  deletePost(id: number): Observable<Post> {  
    return this.httpClient.delete<Post>("http://localhost:3000/posts/" + id)
    .pipe(tap(() => {
      const currentValue = this._post$.getValue();
      currentValue.splice(currentValue.indexOf(currentValue.find(e => e.id == id)), 1)
      this._post$.next(currentValue)
    })
    );
  }

  updatePost(post: Post) {
    return this.httpClient.put<Post>("http://localhost:3000/posts/" + post.id, post).pipe(tap ((response) => {
      const currentValue = this._post$.getValue();
        currentValue.splice(currentValue.findIndex(p => p.id === post.id), 1, response)
        console.log(currentValue)
        this._post$.next(currentValue)
      })
    )
  }

}
