import {RouterModule, Routes } from '@angular/router';
import { PicksForYouComponent } from './picks-for-you/picks-for-you.component';
import { RecentlyViewedComponent } from './recently-viewed/recently-viewed.component';
import { SponsoredItemsComponent } from './sponsored-items/sponsored-items.component';
import { WatchedItemsComponent } from './watched-items/watched-items.component';
import { HomeComponent } from './home/home.component';
import { SellersProfileComponent } from './sellers-profile/sellers-profile.component';


export const routes: Routes = [
     {path:"", component: HomeComponent},
     //{path:'', redirectTo:"/home", pathMatch:'full'},
     {path:'home', component:HomeComponent}, 
     {path:"picksforyou", component:PicksForYouComponent},
     {path:'recentlyviewed', component:RecentlyViewedComponent},
     {path:'sponsoreditems', component:SponsoredItemsComponent},
     {path:'watcheditems', component:WatchedItemsComponent},
     {path:"sellers", 
          children:[
                    {path:"", redirectTo:"/home", pathMatch:'full'},
                    {path:"dashboard", component:SellersProfileComponent}
                    ]
     },
     {path:"**", component:HomeComponent}, 
];
