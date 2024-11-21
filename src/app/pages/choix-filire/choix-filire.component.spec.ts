import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixFilireComponent } from './choix-filire.component';

describe('ChoixFilireComponent', () => {
  let component: ChoixFilireComponent;
  let fixture: ComponentFixture<ChoixFilireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoixFilireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixFilireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
