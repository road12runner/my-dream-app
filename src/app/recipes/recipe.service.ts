import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/intredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanges = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is sample test',
      'http://www.seriouseats.com/images/2017/02/20170228-pressure-cooker-recipes-roundup-collage.jpg',
      [
        new Ingredient('Bread', 1), new Ingredient('Milk', 10),
      ]),
    new Recipe('Another recipe', 'This new recipe',
      'http://www.seriouseats.com/images/2016/07/20160711-eggplant-recipes-roundup-01.jpg', [
        new Ingredient('Meat', 1), new Ingredient('Apple', 2),
      ])
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return  this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredirents: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredirents);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.notifyChanges();
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.notifyChanges();
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.notifyChanges();
  }
  notifyChanges() {
    this.recipeChanges.next( this.recipes.slice());
  }

}
