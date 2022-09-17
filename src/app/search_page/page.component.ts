import { Component } from "@angular/core";

@Component({
    selector : 'pm-main',
    templateUrl : './page.component.html',
    styleUrls : ['page.component.css']
})

export class SearchPage{
    public page = 1;
    listOfActions: any;
    private _lang = false;

    get lang(){
        return this._lang;
    }

    set lang(value : boolean){
        this._lang = value;
        console.log(value);
    }

    onClickResult(actions: any): void {
        this.page = 1;
        this.listOfActions = actions;
        console.log(JSON.stringify(this.listOfActions));
    }
}