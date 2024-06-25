import { Component, OnInit } from '@angular/core';
import { citationInterface } from '../shared/entites';
import { ActivatedRoute } from '@angular/router';
import { citationsMock } from '../shared/mockCitations';
import { CommonModule, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

 citations:citationInterface [] = [];

 ngOnInit():void{
  this.fetchAll();
 
 }

 fetchAll(){
  this.citations =  citationsMock;
 }



}
