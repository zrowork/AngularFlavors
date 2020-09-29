import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  userName: string;
  @ViewChild('userRef') userElementRef: ElementRef;

  sayHello(updatedName) {
    this.userName = updatedName;
    if (updatedName.length >= 5) {
      alert(`Hello ${this.userName}`);
    }
  }

  ngAfterViewInit() {
    this.userElementRef.nativeElement.focus();
  }

  constructor() {}

  ngOnInit(): void {}
}
