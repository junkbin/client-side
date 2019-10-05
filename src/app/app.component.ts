import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'client-side';
  public list = [];

  public constructor(private http: HttpClient) { }


  public ngOnInit() {

    // this is hardcoded.
    this.list = [{
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

    this.listProduct();
  }


  /** CALL API TO LIST THE PRODCUT */
  public listProduct() {

  }

  /** Call API HERE FOR SERVER SIDE */
  public addProduct() {
    console.log('add.product.');
  }
}
