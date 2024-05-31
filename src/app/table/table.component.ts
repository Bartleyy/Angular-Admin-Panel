import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
 arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
}
