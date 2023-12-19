import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-from',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  userId = this.activatedRoute.snapshot.params['id']
  customer: FormGroup;
  constructor(protected  httpClient: HttpClient, protected  formBuilder: FormBuilder,protected  router: Router,private activatedRoute: ActivatedRoute) {
    if (activatedRoute.snapshot.params['id'] == '0'){}
    this.customer = this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      photo: [null, Validators.required],
      phone: [null, Validators.required],
      user_id: [this.userId]
    });
 }

 submit() {
  if (this.customer.valid) {
    const data = this.customer.value;
    this.httpClient.post('http://localhost:3000/customer', data).subscribe(response => {
      alert('Usuario creado')
      this.router.navigate(['login'])
    },(error) => {
      console.log(error)
      alert('Error al crear el usuario');
    });
  }
  this.customer.reset();
}
}