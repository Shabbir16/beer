import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-beer-comp',
  templateUrl: './beer-comp.component.html',
  styleUrls: ['./beer-comp.component.css']
})
export class BeerCompComponent implements OnInit {

  havevalue = false;
  items:any;
  obj:any[] =[];
  keyset = [];
  keyset2 = [];
  colorpallet=['Aquamarine','Beige','CadetBlue','CornflowerBlue','DeepPink','Gainsboro','HotPink','Khaki'
                  ,'LightSalmon','LightBlue']
   myList = new Map<string, any[]>(); 
  constructor(private service:CommonService) { }

  ngOnInit() {
    this.service.getData().subscribe(
      (data:any)=>{
        this.items = data;
        for(let i of data){
          let someval = this.myList.get(i.style);
          if(someval == undefined)
            someval = [];
          someval.push(i);
          this.myList.set(i.style,someval);
        }

       let co = 0;
        this.myList.forEach((value: any[], key: string) => {
          // console.log(key, value);
          let color = this.colorpallet[(co%10)];
          co++;
          this.keyset.push(key);
          this.keyset2.push(key);
          this.obj.push({"title":key,"value":value,"color":color});
         });
         this.sortarray();
         this.obj[0].title = '~Special~'
         this.havevalue = true;
        console.log(this.obj);
      }
    )
  }

  display: boolean = false;
  dobj={};
  displayInfo(j){
    this.display = true;
    this.dobj = j;
  }
  c = 0;
  setMyStyles(){

    let styles = {
      'background-color': this.colorpallet[(this.c)],
      'font-weight':  'bold'
    };
    this.c++;
    if(this.c>9)
      this.c=0;
    return styles;
  }

  search='';
  sobj:any[] = [{}];
  found = false;
  searchBear(){
    console.log('sddsdsd');
    this.myList.forEach((value: any[], key: string) => {
      value.forEach(element => {
        if(element.name == this.search){
          console.log('Element Found');
          this.displayInfo(element);
          this.found = true;
        }
      });
     });
     if(!this.found){
       this.showError();
     }
  }

  display2 = false;
  selectedStyle=[];
  openFilter(){
    this.display2 = true;
    console.log(this.selectedStyle);
    
  }

  searchtext='';
  
  changeKeySet(){
    this.keyset = this.filter(this.searchtext);
  }

  filter(val: string): string[] {
    return this.keyset2.filter(option =>
      option.toLowerCase().includes(val.toLowerCase()));
  }

  newobj:any[]=[];
  onBoxClose(){
    // // console.log('Console closed');
    // let co = 0;
    // this.obj= [];
    // this.selectedStyle.forEach(element => {
    //   let color = this.colorpallet[(co%10)];
    //   co++;
    //   this.obj.push({"title":element,"value":this.myList.get(element),"color":color});
    // });
    // // this.obj  = this.newobj;  
    // console.log(this.newobj);
  }

  sortd(){
    this.obj.forEach(element => {
      element.value.sort((a,b)=>{return b.abv-a.abv});
    });
  }

  sorta(){
    this.obj.forEach(element => {
      element.value.sort((a,b)=>{return a.abv-b.abv});
    });
  }

  sortarray(){
    this.obj.sort(function(a, b) {
      var nameA = a.title.toUpperCase(); // ignore upper and lowercase
      var nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
  }


  msgs: Message[] = [];
  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'No Beer Found'});
}

}
