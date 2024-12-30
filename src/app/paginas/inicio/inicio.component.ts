import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { VideocardComponent } from '../../layout/videocard/videocard.component';
import { SliderComponent } from '../../layout/slider/slider.component';
import { BeneficiosComponent } from '../../layout/beneficios/beneficios.component';
import { CardsComponent } from '../../layout/cards/cards.component';
import { AngolacablesComponent } from '../../layout/angolacables/angolacables.component';

@Component({
  selector: 'app-inicio',
  imports: [
    MenuComponent,
    VideocardComponent,
    SliderComponent,
    BeneficiosComponent,
    CardsComponent,
    AngolacablesComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
