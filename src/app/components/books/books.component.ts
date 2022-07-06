import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { AfficheBooksService } from 'src/app/services/affiche-books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  choix : string = 'Pas de choix pour le moment';

  ordre : string = 'ASC';

  biblio : Book[] = [];

  constructor(private afficheBook : AfficheBooksService) {
  }

  switchOrder() {
      this.ordre = this.ordre === 'ASC' ? 'DESC' : 'ASC';
  }

  receptionchoix(choix : string) {
    this.choix = choix;
  }

  ngOnInit(): void {
    this.afficheBook.getBooks().subscribe({
      next: (books: Book[]) => {
        this.biblio = books;
      }, error: err => {
        console.log(err);
      }, complete: () => {
        console.log('fin de chargement');
      }
    });
  }

}
