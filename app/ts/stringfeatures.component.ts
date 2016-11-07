import {Component} from 'angular2/core';

@Component({
	selector: 'stringBox',
	templateUrl: 'app/ts/stringfeatures.component.html'
})

export class StringFeaturesComponent{
   message = "";
   verifyPalindrome(myString){
       myString = myString.replace(/ /g,"");
       if(myString.length>0){
       
          var mirror_arr = myString.split('');
          mirror_arr = mirror_arr.reverse('');
          var mirror_stn = mirror_arr.join('');
       
          if(myString==mirror_stn){
              this.message = "Yep, It is palindrome";
          }else{
              this.message = "I don't think so";
          }
       
       }else{
           this.message = "Looks like someone forgot something";
       }
   }
}

