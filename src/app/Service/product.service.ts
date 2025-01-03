import { Injectable } from '@angular/core';
import { Product } from 'src/Model/Module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsKey = 'products';  // key to store products in localStorage
  getProductByName: any;

  constructor() {}

  // Get all products from localStorage
  getProducts(): Product[] {
    const products = localStorage.getItem(this.productsKey);
    return products ? JSON.parse(products) : [];
  }

  // Add a new product
  addProduct(product: Product): void {
    try {
      const products = this.getProducts(); // Retrieve existing products
      products.push(product); // Add the new product
      localStorage.setItem(this.productsKey, JSON.stringify(products)); // Save back to localStorage
      console.log('Updated products list:', products); // Debugging log
    } catch (error) {
      console.error('Error adding product:', error); // Catch and log errors
    }
  }
  

    // Update an existing product
    updateProduct(updatedProduct: Product, index: number): void {
      const products = this.getProducts();
      products[index] = updatedProduct;
      localStorage.setItem(this.productsKey, JSON.stringify(products));
    }

  // Delete a product
  deleteProduct(index: number): void {
    const products = this.getProducts();
    products.splice(index, 1);  // remove product at the specified index
    localStorage.setItem(this.productsKey, JSON.stringify(products));
  }
}
