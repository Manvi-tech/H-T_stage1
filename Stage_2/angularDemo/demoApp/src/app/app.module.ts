import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent } from './pentHouse/pentHouse.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlatListComponent } from './flats/flat-list.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { StarComponent } from './star/star.component';
import { CartListComponent } from './cart/cart-list.component';
import { RepeatDataPipe } from './repeat-data.pipe';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './events-list/event-list.component';
import { EventDetailComponent } from './events/event-detail.component';
import { InMemoryDbEventService } from '../../shared/inMemDbEventService';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductAddComponent } from './products/product-add.component';
import { HomeComponentComponent } from './home/home-component.component';
import { EmojiDirective } from './emoji.directive';
import { TrusteeComponent } from './trustees/trustee.component';
import { BookComponent } from './books/book.component';
import { EmployeeArrayComponent } from './employees/employees-array.component';
import { AnimalImgComponent } from './animals/animal-img.component';
import { MenuComponent } from './home/menu.component';
import { LoginComponent } from './user/login.component';
import { ShellComponent } from './home/shell.component';
import { ProductComponent } from './products/display/product.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ParentComponent } from './contentViewChild/parent.component';
import { ChldComponent } from './contentViewChild/chld.component';
import { AnimalAddComponent } from './animals/animal-add/animal-add.component';
// import { TodoModule } from './todo/todo.module';
 

@NgModule({
  declarations: [
    AppComponent,
    PentHouseComponent,
    WelcomeComponent,
    FlatListComponent,
    AnimalListComponent,
    ProductListComponent,
    StarComponent,
    CartListComponent,
    RepeatDataPipe,
    NavbarComponent,
    EventListComponent,
    EventDetailComponent,
    ProductAddComponent,
    HomeComponentComponent,
    EmojiDirective,
    TrusteeComponent,
    BookComponent,
    EmployeeArrayComponent,
    AnimalImgComponent,
    MenuComponent,
    LoginComponent,
    ShellComponent,
    ProductComponent,
    GreetingComponent,
    ParentComponent,
    ChldComponent,
    AnimalAddComponent,
    
  ],
  imports: [
    // TodoModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDbEventService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
