import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/intredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    // this.shoppingListService.ingredientsChanged.subscribe( (ingredients: Ingredient[]) => {
    //   this.ingredients = ingredients;
    // })
    this.ingredientsSubscription = this.shoppingListService.ingredientsChangedSubject.subscribe( (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });

  }


  ngOnDestroy(): void {
    this.ingredientsSubscription.unsubscribe();
  }

  onIngredientAdded(event) {
    this.ingredients.push(event);
  }
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
