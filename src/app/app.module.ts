import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './flavors/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { SplitTwoWayBindingComponent } from './flavors/split-two-way-binding/split-two-way-binding.component';
import { GettersAndSettersComponent } from './flavors/getters-and-setters/getters-and-setters.component';
import { ViewChildComponent } from './flavors/component-interaction/view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    SplitTwoWayBindingComponent,
    GettersAndSettersComponent,
    ViewChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
