import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  private _loggedIn: boolean;

  get loggedIn(): boolean {
    return this._loggedIn;
  }
  @Input()
  set loggedIn(value: boolean) {
    this._loggedIn = value;
    if (value === true) {
      console.log('true');
    } else {
      console.log('false');
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
