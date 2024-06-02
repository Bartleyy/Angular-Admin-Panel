import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';

type customer = {
  id: number,
  name: String,
  info: String
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, TableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AdminPanel';

  sort = () => {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = i; j > 0; j--) {
        if (this.data[j].id < this.data[j-1].id) {
          const temp = this.data[j];
          this.data[j] = this.data[j-1];
          this.data[j-1] = temp;
        }
      }
    }
  }

  create = () => {
    let id = this.data.length;
    for (let i=0; i < this.data.length; i++) {
      if (this.data[i].id>i) {
        id = i;
        break;
      }
    }

    this.data.push({
      id: id,
      name: "TEST" + id,
      info: "test" + id
    });
    this.sort();
  }

  delete = (i: number) => {
    const arr = new Array;
    for (let a=0; a<this.data.length; a++){
      if (a!=i) {
        arr.push(this.data[a]);
      }
    }
    this.data=arr;
  }

  data: Array<customer> = [
    {
      id: 0,
      name: "TEST0",
      info: "test0"
    },
    {
      id: 1,
      name: "TEST1",
      info: "test1"
    },
    {
      id: 2,
      name: "TEST2",
      info: "test2"
    },
    {
      id: 3,
      name: "TEST3",
      info: "test3"
    },
    {
      id: 4,
      name: "TEST4",
      info: "test4"
    }
  ];
}
