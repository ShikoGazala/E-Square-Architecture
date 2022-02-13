import { Component } from '@angular/core';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private httpService: HttpService) {}
  httpError() {
    this.httpService.getProducts().subscribe();
  }

  applicationError() {
    const value: any = '';
    value.title = 'abc';
  }
}
