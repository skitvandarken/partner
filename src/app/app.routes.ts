import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';

export const routes: Routes = [

    {path:'', component:InicioComponent},
    {path:'login', component: LoginComponent}

];
