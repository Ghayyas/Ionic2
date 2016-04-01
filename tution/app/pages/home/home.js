import {Page, NavController,Platform} from 'ionic-angular';
import {signup} from "../signup/signup";
import {forgot} from "../forgot/forgot";

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
  static get parameters() {
    return [[NavController]];
  }
  constructor(nav) {
       this.nav = nav;
  }
  
  signup(){
      this.nav.push(signup)
  }
  forgot(){
      this.nav.push(forgot);
  }
}
