import { Component} from '@angular/core';


@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'this is a string interpolation';
  numberInterpolation = 2;

  onClicked(value:string){
    alert(value);
  }


}
