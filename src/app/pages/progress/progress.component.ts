import { Component, OnInit } from '@angular/core';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;

  constructor() { }

  ngOnInit() {
  }

}
