import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// declare var jquery: any;
// declare var $: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(this.value);
  }
              value: string = '';
              temp: number = 0;
              getValue(n) {
                  if(n == 'C')
                  {
                      this.value = '';
                  }
                else if(this.temp>0 || this.temp<0)
                  {
                      this.value = n
                      this.temp = 0;
                  }
                  else if(this.value.slice(0) == '0')
                  {
                    this.value = n;
                  }
                  else{
                  this.value += n;
                }
              }
              getOperator(c)
              {
                if( this.value=='')
                {
                  if(c=='+' || c=='*' || c=='/')
                      {
                        this.value='';
                      }
                      else{
                        this.value += c;
                      }
                }
                else if(this.temp>0)
                  {
                     
                      this.temp = 0;
                      
                      
                        this.value += c;
                      
                  }

                else if(this.value.slice(-1)=="+" || this.value.slice(-1)=="-" || this.value.slice(-1)=="*" || this.value.slice(-1)=="/")
                {
                  if(c=='.')
                  {
                    this.value += c;
                  }
                  else
                  {
                    this.value = this.value.slice(0, this.value.length-1) + c;
                  }
                }
                else if( this.value.slice(-1)==".")
                {
                  if(c!='.')
                      {
                        this.value += c;
                      }
                }
                // else if (this.value.indexOf('.') > this.value.indexOf('+') || this.value.indexOf('.') > this.value.indexOf('-')
                //           || this.value.indexOf('.') > this.value.indexOf('*') || this.value.indexOf('.') > this.value.indexOf('/'))
                // {
                  
                //   if (this.value.indexOf('+') > this.value.indexOf('.') || this.value.indexOf('-') > this.value.indexOf('.')
                //           || this.value.indexOf('*') > this.value.indexOf('.') || this.value.indexOf('/') > this.value.indexOf('.'))
                //   {
                //     if(c=='.')
                //     {
                //       this.value += c;
                //     } 
                //   }
                //   else if(c!='.')
                //   {
                //     this.value += c;
                //   }
                // }
                // else if (this.value.indexOf('+') > this.value.indexOf('.') || this.value.indexOf('-') > this.value.indexOf('.')
                //           || this.value.indexOf('*') > this.value.indexOf('.') || this.value.indexOf('/') > this.value.indexOf('.'))
                // {
                //   if(c=='.')
                //   {
                //     this.value += c;
                //   } 
                // }
                
                else
                {
                  this.value += c;
                }
              }
              getResult()
              {
                if(this.value.slice(-1)=="+" || this.value.slice(-1)=="-" || this.value.slice(-1)=="*" || this.value.slice(-1)=="/" || this.value.slice(-1)==".")
                {
                  
                }
                else{
                  this.value =  eval(this.value).toString();
                  this.temp = parseFloat(this.value);
                }
              }
              deleteValue()
              {
                this.value = this.value.slice(0 , this.value.length-1);
              }
              getPercentage(){
                if(this.value=='')
                {
                  this.value=''
                }
                else{
                  let percent = parseFloat(this.value) / 100;
                  this.temp = percent;
                  this.value = percent.toString();
                }
              }
             




            //   noKeyboardInput()
            //   {
            //     document.querySelector("input").addEventListener("keypress", function (event) {
            //       if (event.which > 0)
            //       {
            //           event.preventDefault();
            //       }
            //     });
            //   }
            //   ionViewDidLoad() { //use this function to load any function when the app is loaded
                
            //     this.noKeyboardInput();
              
            // }
}
