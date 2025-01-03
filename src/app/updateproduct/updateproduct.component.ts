import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/Model/Module';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  product: Product = { name: '', price: 0, category: '' };
  originalProductName: string = '';
  originalProduct: Product = { name: '', price: 0, category: '' };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productName = this.route.snapshot.paramMap.get('name');
    if (productName) {
      this.loadProductByName(productName);
    }
  }

  // Load product data based on the name passed in the route
  loadProductByName(name: string): void {
    const products = this.productService.getProducts();
    const product = products.find(p => p.name === name);

    if (product) {
      this.product = { ...product }; // Clone product data
      this.originalProductName = product.name; // Save original name to locate it later
    } else {
      alert('Product not found!');
      this.router.navigate(['/']);
    }
  }


   // Update the product, whether changed or not
   updateProduct(): void {
    const products = this.productService.getProducts();
    const index = products.findIndex(p => p.name === this.originalProductName);

    if (index !== -1) {
      this.productService.updateProduct(this.product, index);
      alert('Product updated successfully!');
      this.router.navigate(['/']); // Navigate back to home
    } else {
      alert('Error updating product!');
    }
  }
  
  

  // Delete the product
  deleteProduct(): void {
    const products = this.productService.getProducts();
    const index = products.findIndex(p => p.name === this.originalProductName);

    if (index !== -1) {
      const confirmation = window.confirm(`Are you sure you want to delete ${this.product.name}?`);
      if (confirmation) {
        this.productService.deleteProduct(index);
        alert('Product deleted successfully!');
        this.router.navigate(['/']); // Navigate back to home
      }
    } else {
      alert('Error deleting product!');
    }
  }
  

}


