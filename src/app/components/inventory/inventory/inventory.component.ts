import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

   submitted = false;
   inventoryForm = new FormGroup({
      product_name: new FormControl('', [Validators.required]),
      product_price: new FormControl('', [Validators.required])
    })
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

  onlyNumberKey(evt: any) {
    // Only ASCII character in that range allowed
    const ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    return !(ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57));
  }

  get inventoryFormData(){
    return this.inventoryForm.controls;
  }

  resetForm(){
    this.submitted = false;
    this.inventoryForm.reset();
    this.inventoryForm.patchValue({
      productName: '',
      salePrice: ''
    })
  }

  addInventory(){
    this.submitted = true;
    if (this.inventoryForm.invalid){
      return ;
    }
    this.inventoryService.addInventory(this.inventoryForm.getRawValue()).subscribe((res: any) => {
      console.log('success', res);
      console.log(this.inventoryForm.getRawValue());
      this.resetForm();
    }, (err) => {
      console.log('error', err);
    });
  }

}
