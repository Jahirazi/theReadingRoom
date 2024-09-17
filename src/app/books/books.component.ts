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
  urlFromJson: string='';

  constructor( private route:ActivatedRoute , private http:HttpClient){}
  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if(this.type === 'bookLists'){
      this.url = 'assets/Data/bookLists.json';
    }
    this.getbook();
    this.getplans();
  }

  getplans(){
    this.http.get('assets/Data/plans.json').subscribe((plans)=>{
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
// read(downloadUrl:string){
//   if(downloadUrl){
//     window.open(downloadUrl,'_blank');
//   }else{
//     console.error('DownloadUrl Not Available');
//   }

// }

read(book:any){
  if (book.subscription){
    const notNull=document.getElementById('vipmodal');
    if(notNull !== null){
      notNull.style.display ='block';
    }
  }else if (book.downloadUrl){
window.open(book.downloadUrl,'_blank');
  }else{
console.error('Book Not Available');
  }
}
  

// read(downloadUrl:string){
//   this.http.get<{downloadUrl:string}>('assets/Data/bookLists.json').subscribe(data=>{
//     const downloadUrl = data.downloadUrl;
//     if(downloadUrl){
//       console.log('download:',downloadUrl);

//       window.(downloadUrl,'_blank');
//     }
//   });
// }

  // read(downloadUrl:string){
  //   window.location.href=("")
  // }

  // read(){
  //   const notNull=document.getElementById('vipmodal');
  //   if(notNull !== null){
  //     notNull.style.display ='block';
  //   }
  // }


  onCloseModal(){
    const notNull=document.getElementById('vipmodal');
    if(notNull !== null){
      notNull.style.display ='none';
    
  }
}

}
