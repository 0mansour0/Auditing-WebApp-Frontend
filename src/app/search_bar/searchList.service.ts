import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { ISearchList } from "./searchList";

@Injectable({
    providedIn: 'root'
})

export class SearchListService{
    private url = 'http://127.0.0.1:8080/searchLists';
    private paramListUrl = 'http://127.0.0.1:8080/searchLists/param?type=';
    private searchUrl = 'http://127.0.0.1:8080/action?be=';
    
    constructor(private httpClient: HttpClient) { }

    getlists(){
        const header = {'Access-Control-Allow-Origin':'*',
           'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
           'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'};
        return this.httpClient.get(this.url,{
            'headers':header
          }).pipe(
            tap(data=>console.log("All ",JSON.stringify(data))),
            catchError(this.handelError)
          );
    }

    getParamList(type : string){
        const header = {'Access-Control-Allow-Origin':'*',
           'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
           'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'};
        return this.httpClient.get(this.paramListUrl + type,{
            'headers':header
          }).pipe(
            tap(data=>console.log("All ",JSON.stringify(data))),
            catchError(this.handelError)
          );
    }

    getActions(user : string, action : string, app : string, be : string, param : string, paramV : string){
        const header = {'Access-Control-Allow-Origin':'*',
           'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
           'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'};
        return this.httpClient.get(this.searchUrl+be+"&app="+app+"&user="+user+"&action="+action+"&param="+param+"&pValue="+paramV,{
            'headers':header
          }).pipe(
            tap(data=>console.log("All ",JSON.stringify(data))),
            catchError(this.handelError)
          );
    }

    private handelError(err : HttpErrorResponse){
        let errorMessage='';
        if(err.error instanceof ErrorEvent){
          errorMessage = `an error occured: ${err.error.message}`;
        }else{
          errorMessage = `server return code: ${err.status},error msg ${err.message}`;
        }
        console.log(errorMessage);
        alert("No Matching Searching Criteria ,Please Try Again with valid data");
        return throwError(()=>errorMessage);
      }
}