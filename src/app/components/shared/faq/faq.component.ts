import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs/';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  TabIndex: number;
  TabChanged: boolean;

  constructor() {
    this.TabIndex = 0;
    this.TabChanged = false;
  }

  ngOnInit(): void {
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent);
    console.log('index => ', tabChangeEvent.index);
    this.TabChanged = true;
    this.TabIndex = tabChangeEvent.index;
  }
}
