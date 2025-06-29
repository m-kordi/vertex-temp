import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { MobilemenuComponent } from './layout/mobilemenu/mobilemenu.component';
import { AsideComponent } from './components/categories/aside/aside.component';
import { ItemsComponent } from './components/categories/items/items.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/categories/cart/cart.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ItemDetailsComponent } from './components/categories/items/item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CategoriesComponent,
    SliderComponent,
    MobilemenuComponent,
    AsideComponent,
    ItemsComponent,
    PlaceholderComponent,
    CartComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
