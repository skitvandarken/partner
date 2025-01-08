import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AuthComponent } from './paginas/auth/auth.component';

export const routes: Routes = [

    {path:'', component:InicioComponent},
    {path:'auth', component: AuthComponent}

];
