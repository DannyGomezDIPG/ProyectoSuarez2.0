import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarRegistroPage } from './agregar-registro.page';

describe('AgregarRegistroPage', () => {
  let component: AgregarRegistroPage;
  let fixture: ComponentFixture<AgregarRegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
