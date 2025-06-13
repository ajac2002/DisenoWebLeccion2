import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imagenes = [
    {
      src: 'https://images.aws.nestle.recipes/original/2024_10_18T11_18_16_badun_images.badun.es_ab713d48a93a_tarta_de_limon.jpg',
      alt: 'Tarta de limón',
      caption: 'Tarta de limón refrescante'
    },
    {
      src: 'https://thesweetoccasion.com/wp-content/uploads/2023/12/Easy-Tiramisu-11.jpg',
      alt: 'Tiramisú',
      caption: 'Clásico tiramisú italiano'
    },
    {
      src: 'https://7diasdesabor.com/wp-content/uploads/2022/05/churros-con-salsa-de-chocolate.jpg',
      alt: 'Churros',
      caption: 'Churros con salsa de chocolate'
    }
  ];
}

