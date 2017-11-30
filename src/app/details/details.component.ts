import { Component, OnInit,OnDestroy,Injectable,Input } from '@angular/core';
import { BookModels } from '../models/bookModels';
import { BookListingComponent } from '../book-listing.component';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { BOOKS } from '../details/sample-data';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() book: BookModels;
  id: string;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.book = BOOKS.find(x=>x.id===this.id);
      console.log(this.book);
      // In a real app: dispatch action to load the details here.
   });

   }
   ngOnDestroy() {
    this.sub.unsubscribe();
  
  }

}
