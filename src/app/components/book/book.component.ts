import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  
  @Input()
  book!: Book;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}