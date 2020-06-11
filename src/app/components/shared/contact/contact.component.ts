import { Component, OnInit } from '@angular/core';

export interface Employee {
  name: string;
  email: string;
  phone: string;
  image: string;
  horario: string;
}
const ELEMENT_DATA: Employee[] = [

  { name: 'Frida Esparza Navarro', email: 'francia@mozej.com', phone: '476-398-1490', image: 'assets/Employees/Frida.png', horario:'7:00am - 16:00pm' },
  { name: 'Jennifer López Navarro', email: 'jennifer_L_N@mozej.com', phone: '476-345-1983', image: 'assets/Employees/Jennifer.png', horario: '23:00pm - 6:00am' },
  { name: 'Hugo Flores de la Cruz', email: 'hugo_flowers@mozej.com', phone: '476-632-6719', image: 'assets/Employees/Hugo.png',horario:'16:00pm- 23:00pm'}
];

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Correo', 'Teléfono', 'Foto','Horario'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
