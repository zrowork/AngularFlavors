import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DateViewerComponent } from './date-viewer/date-viewer.component';

@Component({
  selector: 'app-view-child-in-depth',
  templateUrl: './view-child-in-depth.component.html',
  styleUrls: ['./view-child-in-depth.component.scss'],
})
export class ViewChildInDepthComponent implements OnInit, AfterViewInit {
  // @ViewChild('someContent') someContent: ElementRef;

  @ViewChildren(DateViewerComponent) dateViewerRef: QueryList<
    DateViewerComponent
  >;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log('dateViewer', this.dateViewerRef.toArray());
  }
}
