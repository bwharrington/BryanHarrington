import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuContainerComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
