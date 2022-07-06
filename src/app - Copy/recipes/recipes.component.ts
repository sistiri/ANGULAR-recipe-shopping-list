import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
//   constructor(private changeDetector : ChangeDetectorRef) { }

// ngAfterViewChecked(){
//    this.changeDetector.detectChanges();
// }

  ngOnInit(): void {}

  setSelectedRecipe($event: Recipe) {
    console.log($event)
    this.selectedRecipe = $event;
  }
}
