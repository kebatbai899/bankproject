import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplycreditcompComponent } from './applycreditcomp/applycreditcomp.component';
import { InstantdecisioncompComponent } from './instantdecisioncomp/instantdecisioncomp.component';
import { StatuscompComponent } from './statuscomp/statuscomp.component';
import { RetrieveapplicationcompComponent } from './retrieveapplicationcomp/retrieveapplicationcomp.component';
import { HeaderComponent } from './header.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ApplycreditcompComponent,
    InstantdecisioncompComponent,
    StatuscompComponent,
    RetrieveapplicationcompComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
