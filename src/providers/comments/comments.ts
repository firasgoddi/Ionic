import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommentsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentsProvider {
apiUrl:'';
  constructor(public http: HttpClient) {
    console.log('Hello CommentsProvider Provider');
    console.log(localStorage.getItem("token"));
  }
  getallcomments(){
    return new Promise(resolve=>{
      this.http.get('http://localhost:5000/api/coments/',{
                      headers: new HttpHeaders({
                          'Content-Type': 'application/json',
                          'Authorization':localStorage.getItem("token")
                      })
                  }).subscribe(data=>{
        resolve(data);
      },
    err=>{
      console.log(err);
    })
  });
  }
}
