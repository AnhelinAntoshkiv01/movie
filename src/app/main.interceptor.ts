import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTBkMTk1ZjU4YzI2MGQxMDFiNTdlZWE4MmI5NjdjZSIsInN1YiI6IjYyOTcyNGQyNTUwN2U5MTQ5Mzg0N2U0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iMIY8WySVnoNlVg1wDc5itnpF8jzhiJDn_X4Uap-JXE';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {Authorization: `Bearer ${this.token}`}
    })
    return next.handle(request);
  }
}
