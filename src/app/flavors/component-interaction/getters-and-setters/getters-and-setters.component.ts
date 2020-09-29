import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getters-and-setters',
  templateUrl: './getters-and-setters.component.html',
  styleUrls: ['./getters-and-setters.component.scss'],
})
export class GettersAndSettersComponent implements OnInit {
  private _userName: string;

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
    if (this.userName.length > 5) {
      alert(`The name is ${this.userName}`);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
