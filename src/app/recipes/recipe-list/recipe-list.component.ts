import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
