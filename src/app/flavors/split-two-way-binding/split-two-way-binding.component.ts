import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-split-two-way-binding',
  templateUrl: './split-two-way-binding.component.html',
  styleUrls: ['./split-two-way-binding.component.scss'],
})
export class SplitTwoWayBindingComponent implements OnInit {
  userName: string;

  sayHello(updatedName) {
    this.userName = updatedName;
    if (updatedName.length >= 5) {
      alert(`Hello ${this.userName}`);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
