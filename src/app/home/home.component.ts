import { Component, OnInit } from '@angular/core';
import{HttpClient, HttpClientModule} from "@angular/common/http"
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  bookLists:any
  mostReaded:any
  constructor(private http: HttpClient, private router:Router){
   
  }
  ngOnInit(): void {
   this.getBookLists();
   this.getmostReaded();
  }
  getBookLists(){
    this.http.get('assets/Data/bookLists.json').subscribe((books)=>{
      this.bookLists = books;
    });
  }
  getmostReaded(){
    this.http.get('assets/Data/mostReaded.json').subscribe((books)=>{
      this.mostReaded = books;
    });
  }

  gotoBooks(type:string,id:string){
    this.router.navigate(['books',type,id])
  }

}
