import { Component } from '@angular/core';
import { WatchedItemsComponent } from '../watched-items/watched-items.component';

@Component({
  selector: 'app-sponsored-items',
  standalone: true,
  imports: [WatchedItemsComponent],
  templateUrl: './sponsored-items.component.html',
  styleUrl: './sponsored-items.component.css'
})
export class SponsoredItemsComponent {

}
