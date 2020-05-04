var resumeData = {
  name : "陳曉瑜",
  egname:"Julia Chen",
  label:"AR&VR&3D | 多媒體軟體工程師 | 台北台灣",
  school:" 學歷：國立聯合⼤學 資訊管理學系四年級",
  work:"擔任過職務：⼤⼀下公關、⼤⼆家族家⻑、大三專題實務組長"
}
var labelData = {
  basic:"專業技能",
  skillname:"程式設計",
  skillname2:"美宣",
  skillname3:"文書處理"
  
}
var experienceData = {
  name:"特殊事蹟" ,
  tiname:"新加坡商鈦坦科技-實習生",
  tiname1:"為期半年的實習，負責優化公司內部系統及開發新產品。",
  tinamet:"2020 年 3 月 - 至今",
  ti2name:"資訊應用創新服務競賽-產學合作組第一名",
    ti2name1:"擔任專題組長，以實作AR及VR多媒體創新應用於醫療方面。",
  ti2namet:"2019 年 11 月",
 ti3name:"衛生福利部苗栗醫院產學合作",
   ti3name1:"透過醫學及資訊的整合，製作出3D多媒體衛教系統。",
  ti3namet:"2018 年 7 月 - 2020 年 12 月",
}

var skillname = [
  {id : 0 , content : "網⾴設計 Adobe Dreamweaver"},
  {id : 1 , content : "網⾴程式設計 phpMyAdmin"},
  {id : 2 , content : "網⾴程式設計 C#.Net"},
   {id : 3 , content : "程式設計 C++"},
  {id : 4 , content : "資料庫 MySQL"} 
];
var skillname2 = [
  {id : 0 , content : "影像處理 PhotoImpact"},
  {id : 1 , content : "影像處理 3Dmax"},
  {id : 2 , content : "影⾳處理 Movie maker"},
   {id : 3 , content : "影⾳處理 Animate cc"},
  {id : 4 , content : "動畫設計 Unity"} 
];
var skillname3 = [
  {id : 0 , content : "文書處理 Microsoft Word"},
  {id : 1 , content : "試算表 Microsoft Excel"},
  {id : 2 , content : "簡報設計 Microsoft PowerPoint"},
   {id : 3 , content : "資料庫 Microsoft Access"}
];

var vm = new Vue({
  el: "#resume",
  data: {
    resume: resumeData
  }
})
var vm = new Vue({
  el: "#label",
  data: {
    label: labelData
  }
})
var vm = new Vue({
  el: "#experience",
  data: {
    experience: experienceData
  }
})