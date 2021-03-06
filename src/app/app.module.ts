import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
import { SearchComponent } from '../search/search.component';
import { AppRoutingModule } from './app-routing.module';
 
 

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
