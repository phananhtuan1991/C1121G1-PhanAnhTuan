import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigataionComponent } from './navigataion/navigataion.component';
import { ServiceListComponent } from './service-component/service-list/service-list.component';
import { SerivceEditComponent } from './service-component/serivce-edit/serivce-edit.component';
import { ServiceCreateComponent } from './service-component/service-create/service-create.component';
import { CustomerListComponent } from './customer-component/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-component/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-component/customer-create/customer-create.component';
import { ContractListComponent } from './contract-component/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract-component/contract-create/contract-create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigataionComponent,
    ServiceListComponent,
    SerivceEditComponent,
    ServiceCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    ContractListComponent,
    ContractCreateComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }