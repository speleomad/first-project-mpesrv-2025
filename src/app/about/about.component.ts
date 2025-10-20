import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
 info={
     name: "Demo",
     email: "demo@gmail.com",
     tel: "88 8888 888"
    }
 comments=[]
 comment={date:new Date(), message:"default message"}
 newComment:boolean=false

 addComment(){
 console.log("New comment");
 this.comments.push({date:this.comment.date, message:this.comment.message})

 //console.log("message="+this.comment.message)
 // this.newComment=true;
 }
}
