import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateCitationComponent } from './create-citation/create-citation.component';
import { citationInterface } from './shared/entites';
import { CitationListComponent } from './citation-list/citation-list.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'citation', component:CitationListComponent},
    {path:'forms',component:CreateCitationComponent}
];
