import { Component, OnInit } from '@angular/core';
import { GetBlogsservice } from './get-blogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private service: GetBlogsservice){}
  
  blogs:object[] = [];

  refrechDataPost(){
    this.service.getBlogs().subscribe((data:object[])=>{
      this.blogs = data;
    })
  }
  ngOnInit(){
    this.refrechDataPost()
  }

  closePost(id){
    this.service.deletePost(id).subscribe(data=>{
      this.refrechDataPost()
    })
  }
  
}
