import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfItems = [
    "assets/Hotel-Images/Hotel1.jpg",
    "assets/Hotel-Images/Hotel2.jpg",
    "assets/Hotel-Images/Hotel3.jpg",
    "http://placeimg.com/640/480/any?4",
    "http://placeimg.com/640/480/any?5"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
