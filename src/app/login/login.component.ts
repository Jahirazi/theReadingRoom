import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  username='';
  password='';
  errormsg='';
  imageUrl:string="https://cdn.dribbble.com/userupload/4488163/file/original-10106973d919ba6b19473d47fc07bb7c.png?resize=1600x1200";
  
   
 constructor( private auth:AuthService , private router:Router){ }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.username.trim().length===0){
      this.errormsg='Username is Required';
    }else if(this.password.trim().length===0){
      this.errormsg='Password is Required'
    }else{
      this.errormsg=''
      let res =this.auth.login(this.username , this.password);
      if (res === 200){
        this.router.navigate(['home'])
      }
      if (res === 403){
        alert('Wrong Credentials')      
      }

    }
  }

}
