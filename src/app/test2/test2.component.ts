import { Component, OnInit } from '@angular/core';
import { DynamicComponentBase } from '../dynamicComponentBase/dynamic-base-component';

@Component({
  selector: 'dl-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component extends DynamicComponentBase implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
