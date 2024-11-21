import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilierListComponentComponent } from './filier-list-component.component';

describe('FilierListComponentComponent', () => {
  let component: FilierListComponentComponent;
  let fixture: ComponentFixture<FilierListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilierListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilierListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
