import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { DriverFormComponent } from './pages/driver-vehicle/driver-form/driver-form.component';
import { VehicleFormComponent } from './pages/driver-vehicle/vehicle-form/vehicle-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { RoutesComponent } from './pages/routes/routes/routes.component';
import { RoutesFormComponent } from './pages/routes/routes-form/routes-form.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { DriverHomeComponent } from './pages/driver-home/driver-home.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    DriverFormComponent,
    VehicleFormComponent,
    RegisterComponent,
    HomeComponent,
    RoutesComponent,
    RoutesFormComponent,
    CustomerComponent,
    DriverHomeComponent,
    ReceiptComponent
    ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
