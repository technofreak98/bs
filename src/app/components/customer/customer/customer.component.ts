import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm = new FormGroup({
    customer_name: new FormControl('', [Validators.required]),
    ph_no: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

  onlyNumberKey(evt: any) {
    // Only ASCII character in that range allowed
    const ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    return !(ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57));
  }

  addCustomer(){
    console.log(this.customerForm.getRawValue());
  }

}
