import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-side';
  public list = [{
    productId: '1',
    productName: 'VIVO',
    categoryId: 'V10',
    categoryName: 'Mobile',
  }, {
    productId: '1',
    productName: 'VIVO',
    categoryId: 'V10',
    categoryName: 'Mobile'
  }];
}
