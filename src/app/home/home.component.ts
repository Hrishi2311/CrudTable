import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Model/Module';
import { ProductService } from '../Service/product.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //products: Product[] = [];
  displayedColumns: string[] = ['name', 'price', 'category', 'actions'];
  products = JSON.parse(localStorage.getItem('products') || '[]'); // Retrieve products from localStorage


  constructor(private productService: ProductService, private dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  // Load products from localStorage
  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

  deleteAllProducts() {
    // Clear all products from localStorage
    const confirmation = window.confirm('Are you sure you want to delete this product?');

    if (confirmation) {

      localStorage.removeItem('products');
      // Update the localStorage with the new list
      this.products = [];

    // Optional: Notify user of success
    alert('All products have been deleted.');
    }

  }

    




  deleteProduct(product: any): void {
    const confirmation = window.confirm('Are you sure you want to delete this product?');
    if (confirmation) {
      const index = this.products.findIndex((p: { name: any; }) => p.name === product.name);
      if (index > -1) {
        this.productService.deleteProduct(index);  // Use ProductService to delete the product
        this.loadProducts();  // Reload products to update the table
        alert('Product deleted successfully!');
      }
    }
  }
}










