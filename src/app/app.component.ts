import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WatchedItemsComponent } from './watched-items/watched-items.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { PicksForYouComponent } from './picks-for-you/picks-for-you.component';
import { SponsoredItemsComponent } from './sponsored-items/sponsored-items.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WatchedItemsComponent, RecentlyViewedComponent, PicksForYouComponent, 
            SponsoredItemsComponent, FooterComponent, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'eccommerce Front End';
  public img1 = "../assets/images/categorylink.png" ;
  public img2 = ""
}
