import {Component, OnInit, ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredient} from '../../shared/intredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
      parseInt(this.amountInputRef.nativeElement.value, 10) );
    // this.ingredientAdded.emit( newIngredient );
    this.shoppingListService.addIngredient(newIngredient);
  }
}
