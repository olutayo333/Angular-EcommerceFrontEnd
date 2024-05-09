import { Component } from '@angular/core';
import { WatchedItemsComponent } from '../watched-items/watched-items.component';

@Component({
  selector: 'app-recently-viewed',
  standalone: true,
  imports: [WatchedItemsComponent],
  templateUrl: './recently-viewed.component.html',
  styleUrl: './recently-viewed.component.css'
})
export class RecentlyViewedComponent {

}
