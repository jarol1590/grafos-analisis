import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'inicio',
        loadComponent: () => import('./inicio/inicio.component'),
        children: [
            {

                path:'grafo/:id',
                title:'Vista de Grafo',
                loadComponent: () => import('./inicio/pages/grafo/grafo.component'),
            },
            {
                path:'information',
                title:'Información del Grafo',
                loadComponent: () => import('./inicio/pages/information/information.component'),
            },
            

        ]
    },{
        path:'',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo:'/inicio/information',
        pathMatch: 'full'
    }
];
