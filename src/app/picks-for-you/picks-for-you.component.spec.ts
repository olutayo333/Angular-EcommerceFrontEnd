import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicksForYouComponent } from './picks-for-you.component';
import { WatchedItemsComponent } from '../watched-items/watched-items.component';

describe('PicksForYouComponent', () => {
  let component: PicksForYouComponent;
  let fixture: ComponentFixture<PicksForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicksForYouComponent,]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PicksForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
