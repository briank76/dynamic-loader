import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Test1Component } from '../test1/test1.component';
import { Test2Component } from '../test2/test2.component';
import { ClassMapping } from '../utilities/utilities';

@Component({
  selector: 'dl-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  public isError = false;
  @ViewChild("componentInstance", {read: ViewContainerRef}) container: {
    clear: () => void;
    createComponent: (arg0: ComponentFactory<unknown>) => ComponentRef<any>;
  };
  private componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  public loadComponent(type: string): void {
    this.container.clear();
    let factory: ComponentFactory<any>;
    const dynamicClass = ClassMapping[type];

    if (dynamicClass) {
      this.isError = false;
      factory = this.resolver.resolveComponentFactory(dynamicClass.prototype.constructor);
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.displayText = type;
    } else {
      this.componentRef = undefined;
      this.isError = true;
    }
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
