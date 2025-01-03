import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { Product } from 'src/Model/Module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = { name: '', price: 0, category: '' };

  constructor(private productService: ProductService,private router:Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Add product to the service
  onAddProduct(): void {
    console.log('Product to be added:', this.product); // Debugging log
    if (this.product.name && this.product.price && this.product.category) {
      try {
        this.productService.addProduct(this.product);
        alert('Product added successfully!');
        this.clear();
      } catch (error) {
        console.error('Error while adding product:', error);
        alert('An error occurred while adding the product. Please try again.');
        }
        this.router.navigate(['']);
    } else {
      alert('Please fill in all fields!');
    }
  }
  


  // Clear the form
  clear() {
    this.product = { name: '', price: 0, category: '' };
  }

}
