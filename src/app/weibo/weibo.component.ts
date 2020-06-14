import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weibo',
  templateUrl: './weibo.component.html',
  styleUrls: ['./weibo.component.scss'],
})
export class WeiboComponent implements OnInit {
  isShowBigImg = false;
  imgArr = [];
  currentI = 0;
  constructor() { }

  ngOnInit() {
    this.imgArr = [
      'https://beyond-html.oss-cn-shenzhen.aliyuncs.com/ruirui1.jpg',
      'https://beyond-html.oss-cn-shenzhen.aliyuncs.com/ruirui2.jpg',
      'https://beyond-html.oss-cn-shenzhen.aliyuncs.com/ruirui3.jpg',
      'https://beyond-html.oss-cn-shenzhen.aliyuncs.com/ruirui4.jpg',
      'https://beyond-html.oss-cn-shenzhen.aliyuncs.com/ruirui5.jpg',
      'https://beyond-html.oss-cn-shenzhen.aliyuncs.com/ruirui6.jpg',
      'https://beyond-html.oss-cn-shenzhen.aliyuncs.com/ruirui7.jpg',
      'https://beyond-html.oss-cn-shenzhen.aliyuncs.com/ruirui8.jpg',
      'https://beyond-html.oss-cn-shenzhen.aliyuncs.com/ruirui9.jpg'
    ];
  }

  xxx(i){
    this.currentI = i;
    this.isShowBigImg = true;
    console.log("sg__");
  }

}
