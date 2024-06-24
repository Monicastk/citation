import { Component, OnInit } from '@angular/core';
import { citationInterface } from '../shared/entites';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private service:citationInterface, private route:ActivatedRoute ){}


  ngOnInit(): void {
      this.fetchAll();
  }

    


}
