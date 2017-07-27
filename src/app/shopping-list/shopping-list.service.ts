import {Ingredient} from '../shared/intredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  private ingredients: Ingredient[] = [ new Ingredient('Apples', 5), new Ingredient('Tomatos', 10)];
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChangedSubject = new Subject();
  startedEditing = new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChangedSubject.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChangedSubject.next(this.ingredients.slice());
  }
  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }
  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index]  = ingredient;
    this.ingredientsChangedSubject.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChangedSubject.next(this.ingredients.slice());
  }

}
