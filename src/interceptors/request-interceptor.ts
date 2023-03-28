import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs'

export class RequestInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let okay: String;
    
    return next.handle(req).pipe(
        tap({
        next: (event) => (okay = event instanceof HttpErrorResponse ? 'succeed': ''),
        error : () => (okay = 'failed')
    })

    )

    // return next.handle(req).pipe(
    //     // tap(console.log),
    //     catchError((error) => {
    //         // console.log('posts');
    //       if (error instanceof HttpResponse) {
    //         console.error('failed', error);
    //       }
    //     //   req = req.clone();
    //       return throwError(() => error);
    //     })
    //   );


    // if (req.headers.get('posts')) {
    //    let ok: String;    
    //     console.log('posts');
    //     req = req.clone();
    //     return next.handle(req)
    //     // .pipe(tap({
    //     //     next: (event) => (ok = event instanceof HttpResponse ? 'succed': ''),
    //     //     error : (error) => (ok = 'failed')
            
    //     // }));
    // }

  }

}
