import { Component, Input } from "@angular/core";

@Component({
  template: ''
})
export class DynamicComponentBase {
  @Input() displayText: string;
}
