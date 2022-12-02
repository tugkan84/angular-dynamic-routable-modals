import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-modal',
  templateUrl: './first-modal.component.html',
  styleUrls: ['./first-modal.component.less']
})
export class FirstModalComponent implements OnInit {
  
  stateParams:any;
  constructor() { }

  ngOnInit(): void {
  }

}
