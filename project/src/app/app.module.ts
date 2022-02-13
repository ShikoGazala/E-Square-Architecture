import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerLibreryModule } from '../../../libreries/libreries/projects/logger-librery/src/lib/logger-librery.module';
import { Target } from '../../../libreries/libreries/projects/logger-librery/src/lib/interfaces/logger.interface';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerLibreryModule.forRoot({
      message: '',
      target: Target.Console,
      timestamp: 2000,
      isProduction: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
