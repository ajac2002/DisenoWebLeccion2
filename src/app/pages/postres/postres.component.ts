import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostresService } from '../../services/postres.service';

@Component({
  selector: 'app-postres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {
  recetas: any[] = [];
  visibleIndices: Set<number> = new Set();

  constructor(private postresService: PostresService) {}

  ngOnInit(): void {
    this.postresService.getPostres().subscribe(data => {
      this.recetas = data;
    });
  }

  toggleDetalle(index: number): void {
    if (this.visibleIndices.has(index)) {
      this.visibleIndices.delete(index);
    } else {
      this.visibleIndices.add(index);
    }
  }

  isVisible(index: number): boolean {
    return this.visibleIndices.has(index);
  }
}
