import { InjectionToken } from '@angular/core';
import { LoggerService } from '../logger-librery.service';

export const LoggerToken = new InjectionToken<LoggerService>(
  'LoggerServiceToken'
);
