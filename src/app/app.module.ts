import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AddProductComponent } from './add-product/add-product.component';
import {MatInputModule} from '@angular/material/input';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AddProductComponent,
    UpdateproductComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    NgxChartsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
