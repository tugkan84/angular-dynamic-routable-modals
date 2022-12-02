import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-modal',
  templateUrl: './second-modal.component.html',
  styleUrls: ['./second-modal.component.less']
})
export class SecondModalComponent implements OnInit {

  stateParams:any;
  constructor() { }

  ngOnInit(): void {
  }

}
