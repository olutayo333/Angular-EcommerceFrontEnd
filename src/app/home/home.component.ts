import { Component } from '@angular/core';
import { WatchedItemsComponent } from '../watched-items/watched-items.component';
import { RecentlyViewedComponent } from '../recently-viewed/recently-viewed.component';
import { PicksForYouComponent } from '../picks-for-you/picks-for-you.component';
import { SponsoredItemsComponent } from '../sponsored-items/sponsored-items.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ WatchedItemsComponent, RecentlyViewedComponent, PicksForYouComponent, SponsoredItemsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
//WatchedItemsComponent, RecentlyViewedComponent, PicksForYouComponent, SponsoredItemsComponent,
