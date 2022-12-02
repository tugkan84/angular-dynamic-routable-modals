import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { SecondParentComponent } from './second-parent/second-parent.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FirstModalComponent } from './first-modal/first-modal.component';
import { SecondModalComponent } from './second-modal/second-modal.component';
import { ModalWrapperComponent } from './modal-wrapper/modal-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstParentComponent,
    SecondParentComponent,
    HomePageComponent,
    FirstModalComponent,
    SecondModalComponent,
    ModalWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
