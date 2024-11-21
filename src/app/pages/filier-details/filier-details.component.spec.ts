import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilierDetailsComponent } from './filier-details.component';

describe('FilierDetailsComponent', () => {
  let component: FilierDetailsComponent;
  let fixture: ComponentFixture<FilierDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilierDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
