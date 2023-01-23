import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { InputFieldComponent } from './input-field/input-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
