import { Component } from '@angular/core';
import { WatchedItemsComponent } from '../watched-items/watched-items.component';

@Component({
  selector: 'app-picks-for-you',
  standalone: true,
  imports: [WatchedItemsComponent],
  templateUrl: './picks-for-you.component.html',
  styleUrl: './picks-for-you.component.css'
})
export class PicksForYouComponent {

}
