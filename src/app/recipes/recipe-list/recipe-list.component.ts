import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @Output() recipeWasSelected = new EventEmitter();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChanges.subscribe( (recipes: Recipe[]) => {
      console.log('updating recipes', recipes);
      this.recipes = recipes;
    });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onRecipeSelected(recipe: Recipe) {
    // this.recipeWasSelected.emit(recipe);
  }

}
