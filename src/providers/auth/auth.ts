import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class AuthProvider {
url:any="http://localhost:5000/api/coffes/authentication";
apiUrl:any;
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
    this.apiUrl='http://localhost:5000/api/';

  }
  login(email,password){
    return this.http.post(this.url,{
  	"email":email,
  	"password":password

  }
  )
}

addcoffee(coffe){
  return new Promise(resolve=>{
    this.http.post(this.apiUrl +'coffes',coffe,{
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
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
