import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-viewer',
  templateUrl: './date-viewer.component.html',
  styleUrls: ['./date-viewer.component.scss'],
})
export class DateViewerComponent implements OnInit {
  today: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
