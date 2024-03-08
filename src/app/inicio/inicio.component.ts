import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent, CommonModule],
  templateUrl: './inicio.component.html',
  styles: ``
})
export default class InicioComponent {
  openSubMenu: boolean = false;
  openSubSubMenu: boolean = false;
  isNuevoGrafoSelected: boolean = false;
  isExportarDatosSelected: boolean =false;
  isImportarDatosSelected: boolean =false;

  


  toggleSubMenu(event: MouseEvent): void {
    this.openSubMenu = !this.openSubMenu;
    event.stopPropagation(); // Para evitar que el clic se propague al hacer clic dentro del submenú
  }
  toggleSubSubMenu(event: MouseEvent): void{
    this.openSubSubMenu = !this.openSubSubMenu;
    event.stopPropagation();
  }

  closeSubMenu(): void {
    this.openSubMenu = false;
  }

  closeSubSubMenu():void {
    this.openSubSubMenu = false;
  }

  toggleNuevoGrafoSubMenu(event: MouseEvent): void {
    this.isNuevoGrafoSelected = !this.isNuevoGrafoSelected;
    event.stopPropagation(); // Para evitar que el clic se propague al hacer clic dentro del submenú
  }

  toggleEImportarDatosSubMenu(event: MouseEvent): void{
    this.isImportarDatosSelected = !this.isImportarDatosSelected;
    event.stopPropagation();

  }

  closeNuevoGrafoSubMenu(): void{
    this.isNuevoGrafoSelected = false;
  }

  toggleExportarDatosSubMenu(event: MouseEvent): void {
    this.isExportarDatosSelected= !this.isExportarDatosSelected;
    event.stopPropagation();
  }

  closeExportarDatosSubMenu():void{
    this.isExportarDatosSelected = false;
  }

  closeImportarDatosSubMenu():void{
    this.isImportarDatosSelected = false;
  }

 

  // si se da click en otro lugar cierra el submenu
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.relative')) {
      this.closeSubMenu();
      this.closeSubSubMenu();
      this.closeNuevoGrafoSubMenu();
      this.closeExportarDatosSubMenu();
      this.closeImportarDatosSubMenu();
    }
  }

}
