import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { CartComponent } from './components/categories/cart/cart.component';
import { ItemDetailsComponent } from './components/categories/items/item-details/item-details.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: 'itemdetails/:id', component: ItemDetailsComponent},
  { path: 'placeholder', component: PlaceholderComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PlaceholderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
