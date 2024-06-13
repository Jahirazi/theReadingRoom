import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  type ='';
  id='';
  url ='';
  books:any;
  book:any;
  plans:any;

  constructor( private route:ActivatedRoute , private http:HttpClient){}
  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if(this.type === 'bookLists'){
      this.url = 'http://localhost:4200/assets/Data/bookLists.json';
    }
    this.getbook();
    this.getplans();
  }

  getplans(){
    this.http.get('http://localhost:4200/assets/Data/plans.json').subscribe((plans)=>{
      this.plans = plans
    });
  }

  getbook(){
    this.http.get(this.url).subscribe((books)=>{
      this.books=books;
      let index = this.books.findIndex((book: { id: string; }) =>book.id == this.id);
      if(index > -1){
        this.book = this.books[index];
      }
    });

  }

  read(){
    const notNull=document.getElementById('vipmodal');
    if(notNull !== null){
      notNull.style.display ='block';
    }
  }

  onCloseModal(){
    const notNull=document.getElementById('vipmodal');
    if(notNull !== null){
      notNull.style.display ='none';
    
  }
}

}
