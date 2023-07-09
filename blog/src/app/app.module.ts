import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './componentes/menu-title/menu-title.component';
import { HomeComponent } from './pages/home/home.component';
import { BigcardComponent } from './componentes/bigcard/bigcard.component';
import { SmallcardComponent } from './componentes/smallcard/smallcard.component';
import { LinksComponent } from './pages/links/links.component';
import { Smallcard2Component } from './componentes/smallcard2/smallcard2.component';
import { Smallcard3Component } from './componentes/smallcard3/smallcard3.component';
import { Smallcard4Component } from './componentes/smallcard4/smallcard4.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,

    HomeComponent,
    BigcardComponent,
    SmallcardComponent,
    LinksComponent,
    Smallcard2Component,
    Smallcard3Component,
    Smallcard4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
