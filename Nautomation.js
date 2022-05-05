
let puppeteer = require("puppeteer");
const { head } = require("request");

let pageobj;
let mail ="biyof1051@hhmel.com";
let pass = "123456";
const code = require('./code');
let openbrowser = puppeteer.launch({headless:false,defaultViewport:null,args:['--start-fullscreen--']});  //promise



openbrowser.then(function(browser){           //open
      console.log("browser is opened");
 
      let openpagepromise = browser.newPage();     //promise
          console.log("new page is opened")
          return openpagepromise;

}).then(function(page){

        pageobj = page;

 let urlpromise = pageobj.goto("https://www.hackerrank.com");
           console.log("hackerrank is opened")
           return urlpromise;

}).then(function(){

  return waitandclick('#menu-item-2887 a',{delay:200});

  //.then(function(){


// let waitforselector =  pageobj.waitForSelector("#menu-item-2887 a");
//    console.log(" selected  selector")
//     return waitforselector;

// }).then(function(){

//       let clickselector =  pageobj.click(" #menu-item-2887 a",{delay:200})
//          console.log(" clicked on login");
//          return clickselector;

}).then(function(){

 let waitforselectior2 = pageobj.waitForSelector(".fl-module-content.fl-node-content .fl-button");
 console.log(" milgeya selector ");
    return waitforselectior2;
}).then(function(){

let dom = pageobj.evaluate(function(){
let btn = document.querySelectorAll(".fl-module-content.fl-node-content .fl-button")
btn[1].click();
  return;
});
return dom;
 
}).then(function(){

   let waitforselector =pageobj.waitForSelector("#input-1");

          return waitforselector;

}).then(function(){

   let mailtype = pageobj.type("#input-1",mail,{delay:100});
     return mailtype;

}).then(function(){

let passtype  = pageobj.type("#input-2", pass,{delay:100}); 
return passtype;


}).then(function(){

let clickonlogin = pageobj.click('button[data-analytics="LoginPassword"]');
  return clickonlogin;


}).then(function(){

  return waitandclick('[data-automation="algorithms"]');

// console.log("succesfull login")

// waitpromise = pageobj.waitForSelector('[data-automation="algorithms"]');
// return waitpromise;
//  }).then(function(){


//  clickpromise = pageobj.click('[data-automation="algorithms"]');
//  return clickpromise;


 }).then(function(){

   let waitforselector = pageobj.waitForSelector(".filter-group");
     return waitforselector;
   })
.then(function(){

   let domselectpromise = pageobj.evaluate(function(){

      let alldivs = document.querySelectorAll(".filter-group"); 

         let div  = alldivs[3];
         
         let clickselector = div.querySelector(".ui-checklist-list-item input");
                clickselector.click();
          return;
    }) 
        return domselectpromise; 

  }).then(function(){

console.log("warmup selected");

  return pageobj.waitForSelector('.challenges-list .js-track-click.challenge-list-item' );

}).then(function(){

 let arrpromise = pageobj.evaluate(function(){

        let arr = [] ;

         let atags  = document.querySelectorAll('.challenges-list .js-track-click.challenge-list-item');


          for(let i=0 ; i<atags.length ; i++){

                   let link = atags[i].href;

                   console.log(link);

                    arr.push(link);
                  }
             return arr;

             })
         return arrpromise;
            }).then(function(questionArray){

              //console.log(questionArray)

              let questionpromise = solvequestion(questionArray[0],code.answers[0]);

               for(let i =0 ; i<questionArray.length;i++){

                questionpromise = questionpromise.then(function(){

                  let nextquestionpromise = solvequestion(questionArray[i],code.answers[i]);
                   return nextquestionpromise;
                   }) 
                }
           
                      return questionpromise;
            }).then(function(){

              console.log("all answer is been submited");
                   })


function waitandclick(selector){

   return new Promise(function(resolve,reject){

     let waitpromise = pageobj.waitForSelector(selector);
          waitpromise.then(function(){
   
                let clickpromise = pageobj.click(selector);

                                    return clickpromise;
                                 }).then(function(){
                            resolve();
                         });
                        })
                    }

              
       function solvequestion(question,answer){

                 return new Promise (function(resolve,reject){

                         let linkpromise = pageobj.goto(question);

                              linkpromise.then(function(){

                               return  waitandclick('.checkBoxWrapper input');

                                                        }).then(function(){

                                                          return waitandclick(".ui-tooltip-wrapper textarea");

                                                        }).then(function(){

                                                          console.log("on the question")

                                          let typepromise = pageobj.type(".ui-tooltip-wrapper textarea",answer)
                                                           return typepromise;

                                                        }).then(function(){

                                                       console.log("solution has been typed");

                                                      }).then(function(){


                                              let holdcontrol = pageobj.keyboard.down("Control");
                                                return holdcontrol;

                                                }).then(function(){

                                                   let pressA = pageobj.keyboard.press("A");
                                                        return pressA;

                                                    }).then(function(){

                                                     let pressX = pageobj.keyboard.press("X");
                                                     return pressX;

                                                     }).then(function(){
                                                   let  upcontrol = pageobj.keyboard.up("Control");
                                                     return upcontrol;

                                                     }).then(function(){

                                                     return  waitandclick(".monaco-editor.no-user-select.vs");

                                                     }).then(function(){

                                                let controlhold = pageobj.keyboard.down("Control");
                                                   return controlhold ;

                                                     }).then(function(){

                                                 let cut = pageobj.keyboard.press("A");
                                            return cut;
                                                 }).then(function(){


                                                let paste = pageobj.keyboard.press("V");
                                                    return paste;
                                                         }).then(function(){

                                                let controlup = pageobj.keyboard.up("Control");
                                                    return controlup;
                                                         }).then(function(){

                                             
                                              return waitandclick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",{delay:100});


                                                         }).then(function(){
                                                         console.log(" answer submited");
                                                          resolve();


                                                         })

                                             })
                                         }         
                  




