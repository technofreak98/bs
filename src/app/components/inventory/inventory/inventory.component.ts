import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

   inventoryForm = new FormGroup({
      productName: new FormControl(''),
      salePrice: new FormControl('')
    })
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }

  onlyNumberKey(evt: any) {
    // Only ASCII character in that range allowed
    const ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    return !(ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57));
  }

  addInventory(){
    // this.inventoryService.addInventory(this.inventoryForm.getRawValue()).subscribe((res: any) => {
    //   console.log(res);
    // })
    console.log(this.inventoryForm.getRawValue());
  }

}
