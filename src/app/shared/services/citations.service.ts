import { Injectable } from '@angular/core';
import { citationsMock } from '../mockCitations';

@Injectable({
  providedIn: 'root'
})
export class CitationsService {
  
  constructor(){}

  fetchAll(){
    return citationsMock
  }

  // POSSIBLE AUSSI DE LE FAIRE : postCitation(auteur:string,citation:string)
}
