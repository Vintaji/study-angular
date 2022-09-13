import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  imgLogo = 'https://app.linkapi.solutions/assets/images/cloud.svg';
  constructor() {}

  ngOnInit(): void {}
}
