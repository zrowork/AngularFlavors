import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './flavors/component-interaction/binding/binding.component';
import { GettersAndSettersComponent } from './flavors/component-interaction/getters-and-setters/getters-and-setters.component';
import { ChildComponent } from './flavors/component-interaction/parent-child-interaction/child/child.component';
import { ParentComponent } from './flavors/component-interaction/parent-child-interaction/parent/parent.component';
import { SplitTwoWayBindingComponent } from './flavors/component-interaction/split-two-way-binding/split-two-way-binding.component';
import { ViewChildComponent } from './flavors/component-interaction/view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    SplitTwoWayBindingComponent,
    GettersAndSettersComponent,
    ViewChildComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
