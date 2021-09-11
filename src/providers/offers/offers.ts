import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OffersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OffersProvider {
apiUrl:'';
  constructor(public http: HttpClient) {
    console.log('Hello OffersProvider Provider');
    console.log(localStorage.getItem("token"));
  }
  addoffer(offre){
    return new Promise(resolve=>{
      this.http.post('http://localhost:5000/api/offres',offre,{
                      headers: new HttpHeaders({
                          'Content-Type': 'application/json',
                          'Authorization': localStorage.getItem("token")
                      })
                  }).subscribe(data=>{
        resolve(data);
      },
    err=>{
      console.log(err);
    })
  });
}
modifier(id ,offre ){
  return new Promise(resolve=>{
    this.http.put('http://localhost:5000/api/offres/'+id,offre,{
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
getalloffers(){
  return new Promise(resolve=>{
    this.http.get('http://localhost:5000/api/offres/',{
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
getallcoffees(){
  return new Promise(resolve=>{
    this.http.get('http://localhost:5000/api/coffes/',{
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
