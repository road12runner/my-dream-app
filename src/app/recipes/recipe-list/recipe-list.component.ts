import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is sample test',
      'http://www.seriouseats.com/images/2017/02/20170228-pressure-cooker-recipes-roundup-collage.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
