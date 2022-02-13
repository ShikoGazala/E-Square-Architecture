import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerInterceptor } from './interceptors/logger.interceptor';
import { LoggerConfig } from './interfaces/logger.interface';
import { LoggerService } from './logger-librery.service';
import { LoggerToken } from './tokens/logger.token';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class LoggerLibreryModule {
  static forRoot(
    config: LoggerConfig
  ): ModuleWithProviders<LoggerLibreryModule> {
    return {
      ngModule: LoggerLibreryModule,
      providers: [
        LoggerService,
        {
          provide: LoggerToken,
          useValue: config,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoggerInterceptor,
          multi: true,
        },
      ],
    };
  }
}
