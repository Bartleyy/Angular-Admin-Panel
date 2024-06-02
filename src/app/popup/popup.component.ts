import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

type customer = {
  id: number,
  name: String,
  info: String
}

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnChanges{
@Input() display!: String
@Input() data!: Array<customer>;
@Input() i!: number;

@Output("close") Close = new EventEmitter;
@Output("save") Save = new EventEmitter<{name: String, info: String}>;

name: String = "";
info: String = "";
indicator: number =-1;

//Handles Input Changes of Textboxes
  change = (name: String, info: String) => {
    this.name = name;
    this.info = info;
    //this.save();
  }

  //refreshes the shown values in the popup
  ngOnChanges(changes: SimpleChanges): void {
    console.log("test");
    
    if (this.indicator != this.i) {
      this.indicator = this.i;
      this.name = this.data[this.i].name;
      this.info = this.data[this.i].info;
    }
  }

  //closes popup
  close = () => {
    this.Close.emit();
  }

  //saves the data changes finally
  save = () => {
    console.log(this.name);
    
    this.Save.emit({
      name: this.name,
      info: this.info
    });
  }
}
