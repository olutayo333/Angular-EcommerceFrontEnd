import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedItemsComponent } from './watched-items.component';

describe('WatchedItemsComponent', () => {
  let component: WatchedItemsComponent;
  let fixture: ComponentFixture<WatchedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchedItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WatchedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
