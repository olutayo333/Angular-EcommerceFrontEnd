import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredItemsComponent } from './sponsored-items.component';

describe('SponsoredItemsComponent', () => {
  let component: SponsoredItemsComponent;
  let fixture: ComponentFixture<SponsoredItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsoredItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsoredItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
