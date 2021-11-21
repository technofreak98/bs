import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  addInventory(payload: any){
    console.log('payload',payload)
    return this.http.post(`/add/`, payload);
  }
}
