import { Component, OnInit } from '@angular/core';
import { DynamicComponentBase } from '../dynamicComponentBase/dynamic-base-component';

@Component({
  selector: 'dl-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component extends DynamicComponentBase implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
  }

}
