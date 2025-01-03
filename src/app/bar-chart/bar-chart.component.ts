import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  view: [number, number] = [700, 400]; // Size of the chart

  // Options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Category';
  yAxisLabel = 'Price';
  barPadding = 8;
  
  // Data for the chart
  multi: any[] = [];
  
  // Define the colorScheme with required properties
  colorScheme: Color = {
    name: 'coolwarm', // Optional name for the color scheme
    selectable: true, // Can select the color
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] // Array of colors for the chart
    ,
    group: ScaleType.Time
  };

  ngOnInit() {
    // Fetch data from localStorage
    const data = JSON.parse(localStorage.getItem('products') || '[]');
    
    // Transform the data for the chart
    this.multi = this.transformData(data);
  }

  // Transform data for bar chart
  transformData(data: any[]) {
    const transformed: { name: unknown; value: any; }[] = [];
    const categories = new Set();

    // Collect categories and prices
    data.forEach((product) => {
      categories.add(product.category);
    });

    // Sum prices for each category
    categories.forEach((category) => {
      const totalPrice = data
        .filter((product) => product.category === category)
        .reduce((sum, product) => sum + product.price, 0);
      transformed.push({
        name: category,
        value: totalPrice,
      });
    });

    return transformed;
  }
}



