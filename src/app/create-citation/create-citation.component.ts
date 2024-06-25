import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-citation',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule,CommonModule,],
  templateUrl: './create-citation.component.html',
  styleUrl: './create-citation.component.css'
})
export class CreateCitationComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
}

}
