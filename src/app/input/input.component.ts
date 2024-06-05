import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Output("createEntry") Creation = new EventEmitter;
  @Output("filter") Filter = new EventEmitter;

  ft = (e: String) => {
    this.Filter.emit(e);
  }


  create = () => {
    console.log("create");
    this.Creation.emit();
    }
}
