import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoggerConfig, Target } from './interfaces/logger.interface';
import { LoggerToken } from './tokens/logger.token';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private errorsQueue: any = [];
  private flush = new Subject<any>();

  constructor(@Inject(LoggerToken) private loggerConfig: LoggerConfig) {
    console.log(this.loggerConfig);
    this.flush
      .pipe(debounceTime(this.loggerConfig.timestamp || 5000))
      .subscribe((error) => this.handleErrors(error));
  }

  setFlush(error: HttpErrorResponse) {
    this.flush.next(error);
  }

  handleErrors(error: HttpErrorResponse) {
    if (!this.loggerConfig.isProduction) {
      return;
    }
    this.errorsQueue.push(error);
    if (this.loggerConfig.target === Target.Console) {
      console.error(error.message);
    } else if (this.loggerConfig.target === Target.Localstorage) {
      const logs: string | null = localStorage.getItem('logs');
      const logsArr = logs ? JSON.parse(logs) : [];
      logsArr.push(error.message);
      localStorage.setItem('logs', JSON.stringify(logsArr));
    }
  }
}
