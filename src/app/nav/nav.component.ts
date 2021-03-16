import { Component, OnInit } from '@angular/core';
import { faYoutube,faTwitter,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone,faSearch,faShoppingBasket,faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  //ubberNav Icons
  youtube  =  faYoutube ;
  twitter  =  faTwitter;
  facebook =  faFacebookF;
  envelope =  faEnvelope;
  phone    =  faPhone;
  search   =  faSearch;
  pasket   = faShoppingBasket;
  user = faUser

  //images
  logo:string='assets/img/logo.png'

  constructor() { }

  ngOnInit(): void {
  }

}
