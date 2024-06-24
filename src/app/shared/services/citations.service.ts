import { Injectable, OnInit } from '@angular/core';
import { citationInterface } from '../entites';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CitationsService implements OnInit{

  constructor(private service:CitationsService,private route:ActivatedRoute ) {};

  citations:citationInterface | undefined;

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll(){
    return this.fetchAll()<citationInterface[]>
  }
}
