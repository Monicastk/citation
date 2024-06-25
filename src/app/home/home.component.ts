import { Component, OnInit } from '@angular/core';
import { citationInterface } from '../shared/entites';
import { ActivatedRoute } from '@angular/router';
import { citationsMock } from '../shared/mockCitations';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

 citations:citationInterface [] = [];

 ngOnInit():void{
  this.fetchAll();
 }

 fetchAll(){
  this.citations =  citationsMock;
 }

}
