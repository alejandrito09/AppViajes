import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlojamientoPage } from './alojamiento.page';

describe('AlojamientoPage', () => {
  let component: AlojamientoPage;
  let fixture: ComponentFixture<AlojamientoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlojamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
