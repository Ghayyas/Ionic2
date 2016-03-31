import {Page, Alert, NavController} from 'ionic-angular';



@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    static get parameters() {   // Beacuse We use javascript ES6 and Not Typescirpt We need to call Static get Parameters
        return [NavController];
    }
    constructor(nav) {
        this.nav = nav;
    }
//    simple Alert                                  
    doAlert() {
    let alert = Alert.create({
      title: 'Alert!',
      subTitle: 'Hello User This is your new Alert Box!',
      buttons: ['Ok']
    });
    this.nav.present(alert);
  }
  // Alet end
  
  //Simple prompt
  
  doPrompt(){
      
      let prompt = Alert.create({
          title: "Simple Prompt",
          message: 'Enter SomeThing in a Message',
          inputs:[{
              name : 'msg',  //variable name of input Field. See console.log for the Entering values
              placeholder: 'This is your Place Holder'
          }],
          buttons: [
              {
                  text: 'Cancel',
                  handler: data =>{
                      console.log('Cancel Clicked');

                  }
              },
              {
                  text: 'Save',
                  handler: data =>{
                      console.log('Saved Clicked');
                      console.log("Entering Values are : " ,data.msg);   //Value of Data

                  }
              }
          ]
      });

      this.nav.present(prompt);

  }
  //prompt End
  
  //Confirm Box
 
   doConfirm(){
       let confirm = Alert.create({
           title: 'Please Confirm',
           message: 'Are u Really Ugly?',
           buttons: [
               {
                   text: "No",
                   handler: ()=>{
                       console.log(" You Cliked No So you are Beautiful.") 
                       }
                   },
                   {
                       text: 'yes',
                       handler: data=>{
                 
                           console.log("You Clicked yes It means you are ugly.")    
                       }
                   }
               ]
           })
           
           this.nav.present(confirm) 
        }
        
        //confirm Box End
        
        //alert with in Alert
        
        
   doAlertAgain(){
       let doAlertAgain = Alert.create({
           title: 'Please Confirm',
           message: 'Are u Really Admin?',
           buttons: [
               {
                   text: "No",
                   handler: ()=>{
                       console.log(" You Cliked No So you are not Admin.") 
                       }
                   },
                   {
                       text: 'yes',
                       handler: data=>{
                    let alert = Alert.create({
                        title: 'Alert!',
                        subTitle: 'Wellcom Admin!',
                        buttons: ['Ok']
                        });
                        this.nav.present(alert);
                           console.log("You Clicked yes It means you are Admin.")    
                       }
                   }
               ]
           })
           
           this.nav.present(doAlertAgain) 
        }
        
        //end
        
        //Radio Alert
        
    doRadio() {
    let alert = Alert.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Green',
      //value: 'red',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
        this.nav.present(alert)
    }
            
        //Radio Alert end
        
           //   simple Checkbox

doCheckbox(){
    let alert = Alert.create();
    alert.setTitle('Simple CheckBox');

    alert.addInput({
      type: 'checkbox',
      label: 'Read',
      checked: false
    });
 alert.addInput({
      type: 'checkbox',
      label: 'Radio',
      checked: false
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
        this.nav.present(alert)
    }


                  //end Checkbox
}