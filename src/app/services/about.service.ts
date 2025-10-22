import { Injectable } from '@angular/core';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  info = {
    name: "Demo",
    email: "demo@gmail.com",
    tel: "88 8888 888"
  }
  comments :Comment[] = []
  constructor() { }
  getInfos() {
    console.log("getInfos called");
    return this.info;
  }
  addComment(comment:Comment) {
    console.log("addComment called");
    this.comments.push(comment);
  }
  getComments(): Comment[] {
    console.log("getComments called");
    return this.comments;
  }
}
