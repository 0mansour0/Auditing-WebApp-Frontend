import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ISearchList } from "./searchList";
import { SearchListService } from "./searchList.service";

@Component({
    selector : 'pm-search',
    templateUrl : './search.component.html',
    styleUrls : ['search.component.css']
})
export class Search implements OnInit{
    lists: any;
    paramValueList:any;
    actions:any;
    private _paramType: string = "";
    private _application: string = "";
    private _action: string = "";
    private _user: string = "";
    private _be: string = "";
    private _paramValue: string = "";
    @Output() listOfActions : EventEmitter<any> = 
    new EventEmitter<any>();

    constructor(private service:SearchListService) {}

    get paramType(){
        return this._paramType;
    }

    set paramType(value : string){
        this._paramType = value;
        this.service.getParamList(value)
        .subscribe({
            next: response => this.paramValueList = response
        });
    }

    get application(){
        return this._application;
    }

    set application(value : string){
        this._application = value;
    }

    get action(){
        return this._action;
    }

    set action(value : string){
        this._action = value;
    }

    get paramValue(){
        return this._paramValue;
    }

    set paramValue(value : string){
        this._paramValue = value;
    }

    get user(){
        return this._user;
    }

    set user(value : string){
        this._user = value;
    }

    get be(){
        return this._be;
    }

    set be(value : string){
        this._be = value;
    }

    ngOnInit(){
        this.service.getlists()
        .subscribe({
            next: response => this.lists = response 
        });
    }
    search(){
        this.service.getActions(this._user, this._action, this._application, this._be, this._paramType, this._paramValue)
        .subscribe({
            next: response => {this.actions = response 
                this.listOfActions.emit(this.actions)
            }
        });
    }
}