import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  openSubMenuArchivo: boolean = false;
  openSubMenuEditar: boolean = false;
  isNuevoGrafoSelected: boolean = false;
  isExportarDatosSelected: boolean = false;
  isImportarDatosSelected: boolean = false;
  isNodoSelected: boolean = false;
  isArcoSelected: boolean = false;
  isNodoEditarSelected: boolean = false;
  isArcoEditarSelected: boolean = false;
  




  toggleSubMenuArchivo(event: MouseEvent): void {
    this.closeAllSubMenus();
    this.openSubMenuArchivo = !this.openSubMenuArchivo;
    event.stopPropagation(); // Para evitar que el clic se propague al hacer clic dentro del submenú
  }

  closeSubMenuArchivo(): void {
    this.openSubMenuArchivo = false;
  }

  toggleSubMenuEditar(event: MouseEvent): void {
    this.closeAllSubMenus();
    this.openSubMenuEditar = !this.openSubMenuEditar;
    event.stopPropagation();
  }

  closeSubMenuEditar(): void {
    this.openSubMenuEditar = false;
  }

  toggleNuevoGrafoSubMenu(event: MouseEvent): void {
    this.closeAllSubSubMenus();
    this.isNuevoGrafoSelected = !this.isNuevoGrafoSelected;
    event.stopPropagation(); // Para evitar que el clic se propague al hacer clic dentro del submenú
  }

  closeNuevoGrafoSubMenu(): void {
    this.isNuevoGrafoSelected = false;
  }

  toggleEImportarDatosSubMenu(event: MouseEvent): void {
    this.closeAllSubSubMenus();
    this.isImportarDatosSelected = !this.isImportarDatosSelected;
    event.stopPropagation();

  }

  closeImportarDatosSubMenu(): void {
    this.isImportarDatosSelected = false;
  }  

  toggleExportarDatosSubMenu(event: MouseEvent): void {
    this.closeAllSubSubMenus();
    this.isExportarDatosSelected = !this.isExportarDatosSelected;
    event.stopPropagation();
  }

  closeExportarDatosSubMenu(): void {
    this.isExportarDatosSelected = false;
  }

  toggleNodoEditarSubMenu(event: MouseEvent): void{
    this.isNodoEditarSelected = !this.isNodoEditarSelected;
    event.stopPropagation();
  }

  closeNodoEditarSubMenu():void{
    this.isNodoEditarSelected = false;
  }

  toggleSubSubMenuNodo(event: MouseEvent): void {
    this.closeAllSubSubMenus();
    this.isNodoSelected = !this.isNodoSelected;
    event.stopPropagation();
  }

  closeNodoSubMenu(): void {
    this.isNodoSelected = false;
  }

  toogleSubSubMenuArco(event: MouseEvent): void{
    this.closeAllSubSubMenus();
    this.isArcoSelected = !this.isArcoSelected;
    event.stopPropagation();
  }

  closeArcoSubMenu(): void{
    this.isArcoSelected= false;
  }

  toggleArcoEditarSubMenu(event: MouseEvent): void{
    this.isArcoEditarSelected = !this.isArcoEditarSelected;
    event.stopPropagation();
  }

  closeArcoEditarSubMenu():void{
    this.isArcoEditarSelected = false;
  }



  // si se da click en otro lugar cierra el submenu
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.relative')) {
      this.closeAllSubMenus();
      this.closeAllSubSubMenus();
    }
  }

  closeAllSubSubMenus(): void {
    this.closeNuevoGrafoSubMenu();
    this.closeExportarDatosSubMenu();
    this.closeImportarDatosSubMenu();
    this.closeNodoSubMenu();
    this.closeArcoSubMenu();
    this.closeNodoEditarSubMenu();
    this.closeArcoEditarSubMenu();
  }

  closeAllSubMenus(): void {
    this.closeAllSubSubMenus();
    this.closeSubMenuArchivo();
    this.closeSubMenuEditar();
  }

  onFileSelected(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    // Aquí puedes manejar el archivo seleccionado
    console.log('Archivo seleccionado:', file);
  }

}
