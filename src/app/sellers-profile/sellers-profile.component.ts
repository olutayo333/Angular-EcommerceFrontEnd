import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sellers-profile',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './sellers-profile.component.html',
  styleUrl: './sellers-profile.component.css'
})
export class SellersProfileComponent {
  public all =""
  public productName:any ="";
  public productCategory:any =""
  public productPrice:any="";
  public productDescription:any=""


  public electronicsObj = {productName:"", productPrice:"", productCategory:'', productDescription:'', productImg:''}; 
  public electronicsArray:any = []
  
  addProduct(){
    alert(this.productCategory)
  }
  // public todoItem ="";
  // public todoObj:any = {todo_Item:"", todo_index:0}
  // public todoArray:any = []
  // public index = 0
}
