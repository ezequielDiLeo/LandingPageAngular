import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  productList: IProduct[]= [];

  private _apiServices = inject(ApiService);
  private _router = inject(Router)

  ngOnInit(): void {
    this._apiServices.getProducts().subscribe((data: IProduct[]) => {
      this.productList = data;
    })
  }

  navigate(id: number): void {
    this._router.navigate(['/products', id])
  }

}
