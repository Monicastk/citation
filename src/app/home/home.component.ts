import { Component, OnInit } from '@angular/core';
import { citationInterface } from '../shared/entites';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { citationsMock } from '../shared/mockCitations';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CitationsService } from '../shared/services/citations.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

 citations:citationInterface [] = [];

 constructor(private service:CitationsService ){}
 // service = inject(CitationsService)

 ngOnInit():void{
  this.fetchAll();
 
 }

 fetchAll(){
  
  this.citations = this.service.fetchAll();
 }



}
