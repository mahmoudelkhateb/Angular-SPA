import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slider:string='assets/img/slider.png'

  constructor() { }

  ngOnInit(): void {
  }

}
