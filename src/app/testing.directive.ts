import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTesting]'
})
export class TestingDirective {

  constructor(private eleRef: ElementRef) { }
      @HostListener('mouseenter') onMouseEnter(){
        this.highlight(this.highlightColor || this.defaultColor || 'red');

        //this.highlight(this.highlightColor || 'red');
      }

      @HostListener('mouseleave') onMouseLeave(){
        this.highlight(null);
      }
    
      private highlight(color:string){
        this.eleRef.nativeElement.style.background= color;
      }
      // eleRef.nativeElement.innerText= "Text is changed by changeText Directive.";
      
      @Input('appTesting') highlightColor: string;
      @Input() defaultColor : string;

}
