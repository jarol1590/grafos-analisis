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
  isNuevoGrafoSelected: boolean = false;

  openSubSubMenu(event: MouseEvent) {
    event.stopPropagation(); // Evita que el evento se propague a elementos padre
    // Agrega aquí la lógica para abrir el segundo submenú
  }


  toggleSubMenu(event: MouseEvent): void {
    this.openSubMenu = !this.openSubMenu;
    event.stopPropagation(); // Para evitar que el clic se propague al hacer clic dentro del submenú
  }

  closeSubMenu(): void {
    this.openSubMenu = false;
  }

  toggleNuevoGrafoSubMenu(event: MouseEvent): void {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    this.isNuevoGrafoSelected = !this.isNuevoGrafoSelected;
    event.stopPropagation(); // Para evitar que el clic se propague al hacer clic dentro del submenú
}



// si se da click en otro lugar cierra el submenu
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.relative')) {
      this.closeSubMenu();
    }
  }

}
