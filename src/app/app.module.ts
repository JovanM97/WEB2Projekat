import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AvioViewComponent } from './avio-view/avio-view.component';
import { FilterComponent } from './avioViewComp/filter/filter.component';
import { SortingBarComponent } from './avioViewComp/sorting-bar/sorting-bar.component';
import { SearchBarComponent } from './avioViewComp/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    AvioViewComponent,
    FilterComponent,
    SortingBarComponent,
    SearchBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
