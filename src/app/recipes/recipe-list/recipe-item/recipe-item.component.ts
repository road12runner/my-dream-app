import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSelected() {
    // this.recipeSelected.emit();
    // this.recipeService.recipeSelected.emit(this.recipe);
    // this.router.navigate([this.recipe.name], {relativeTo: this.route});
  }
}
