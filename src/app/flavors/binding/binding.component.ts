import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent implements OnInit {
  pageTitle = 'Angular Biding';
  count = 0;
  name: string;

  incrementCount() {
    this.count += 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
