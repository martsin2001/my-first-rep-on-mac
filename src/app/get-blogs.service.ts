import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class GetBlogsservice {
    constructor(private http : HttpClient){};

    readonly URL:string = 'http://localhost:3000/blogs';

    getBlogs(){
        return this.http.get(`${this.URL}`)
    }
    
    deletePost(id){
        return this.http.delete(`${this.URL+'/'+id}`)
    }
}