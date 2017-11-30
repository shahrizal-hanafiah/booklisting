import { Component, OnInit, OnDestroy, EventEmitter, Input, Output, Directive } from '@angular/core';
import { BookModels } from './models/bookModels';
import { BOOKS } from './details/sample-data';
import { Router, ActivatedRoute } from '@angular/router';
import { debug } from 'util';

@Component({
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})

export class BookListingComponent implements OnInit {
  dataRefresher: any;
  title = 'Bookstore';
  listBooks: BookModels[];
  private book: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.listBooks = BOOKS;
  }

  goToDetails(id: string) {
    var hit = (parseInt(localStorage[id]) || 0);
    hit += 1;
    localStorage.setItem(id, hit.toString());
    window.location.href = `/details/` + id;
    //this.router.navigate([`/details/` + id], { relativeTo: this.route });
  }

}

