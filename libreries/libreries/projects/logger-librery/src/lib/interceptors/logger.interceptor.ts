import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { LoggerService } from '../logger-librery.service';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  constructor(private loggerService: LoggerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        this.loggerService.setFlush(error);
        return throwError(error);
      })
    );
  }
}
