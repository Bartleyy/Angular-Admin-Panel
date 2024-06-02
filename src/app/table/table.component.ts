import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

type customer = {
  id: number,
  name: String,
  info: String
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent{
 @Input() data?: Array<customer>;

 @Output('deleteEntry') Deletion = new EventEmitter<number>();
 @Output('editEntry') Edit = new EventEmitter<number>();

delete = (i: number) => {
  this.Deletion.emit(i);
}

edit = (i: number) => {
  this.Edit.emit(i);
}
}
