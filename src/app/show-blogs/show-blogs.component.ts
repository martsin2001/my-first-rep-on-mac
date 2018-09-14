import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-blogs',
  templateUrl: './show-blogs.component.html',
  styleUrls: ['./show-blogs.component.scss']
})
export class ShowBlogsComponent implements OnInit {

  @Input() dataBlogs;
  @Output() closePost = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }

  closeBlocg(id){
   this.closePost.emit(id)
  }

}
