import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename ='Hello word!!';
  sitelogo="/assets/images/logo.png";
  sitetitle="<mark>記載著 Will 在網路世界的學習心得與技術分享</mark>"; //innerHTML

  constructor() { }

  ngOnInit(): void {
    //示範內嵌繫結
    //setTimeout(()=>{
    //  this.sitename="The Will Will Web"
    //},2000)
  }

  //click事件
  changename($event: MouseEvent){
    console.log($event);
    if($event.ctrlKey){
      this.sitename="The Will Will Web";
    }
  }
}
