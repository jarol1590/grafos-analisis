import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-heavy-loader-slow',
    standalone: true,
    imports: [CommonModule],
    template: `
    <h1>Hola Heavy-loader-slow</h1>
    `
})
export class HeavyLoaderSlowComponent{
    
}