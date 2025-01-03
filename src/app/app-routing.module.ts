import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:"addpro",component:AddProductComponent
  },
  {
    path:'updatepro/:name',component:UpdateproductComponent
  },
  {
    path:'viewbar',component:BarChartComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
