import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  info: any = {};
  comments :Comment[] = []
  comment: Comment = { id: 0, date: new Date(), message: "default message" };
  newComment: boolean = false
  constructor(private aboutService: AboutService) { }
  ngOnInit(): void {
    this.info = this.aboutService.getInfos();
    this.comments = this.aboutService.getComments();
  }


  addComment() {
    console.log("New comment");
    // this.comments.push({ date: this.comment.date, message: this.comment.message })
    this.aboutService.addComment({
      id: this.comments.length + 1,
      date: this.comment.date,
      message: this.comment.message
    });
    //console.log("message="+this.comment.message)
    // this.newComment=true;
  }
}
