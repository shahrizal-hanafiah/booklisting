import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { BookListingComponent } from './book-listing.component';


const routes:Routes = [
  {
    path: '',
    component:BookListingComponent,
    pathMatch: 'full'
  },
  { path:'details/:id',component:DetailsComponent },
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  // exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { 
  
}
