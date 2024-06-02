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

  create = () => {
    console.log("create");
    this.Creation.emit();
    }
}
