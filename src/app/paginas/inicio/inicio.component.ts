import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { VideocardComponent } from '../../layout/videocard/videocard.component';
import { SliderComponent } from '../../layout/slider/slider.component';
import { BeneficiosComponent } from '../../layout/beneficios/beneficios.component';
import { AngolacablesComponent } from '../../layout/angolacables/angolacables.component';
import { CategoriasComponent } from '../../layout/categorias/categorias.component';
import { CardsComponent } from '../../layout/cards/cards.component';
import { ServicosComponent } from '../../layout/servicos/servicos.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

@Component({
  selector: 'app-inicio',
  imports: [
    MenuComponent,
    VideocardComponent,
    SliderComponent,
    BeneficiosComponent,
    AngolacablesComponent,
    CategoriasComponent,
    CardsComponent,
    ServicosComponent,
    RodapeComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
