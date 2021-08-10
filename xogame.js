var turn = true; // this meen x
var squars =[];
function checkwinner(){
    for( var i=1  ; i<=9; i++ ){
  squars[i]= document.getElementById('a'+i).innerHTML;
}
    //  (الحكم او الشروط للفوز بالعبه  (انهم يكونو جمب بعض افقي  
    if(squars[1]==squars[2] && squars[2]==squars[3] && squars[3]!=""){
       alert( 'player ' + squars[3] + ' win the game')
       }
    if(squars[4]==squars[5] && squars[5]==squars[6] && squars[6]!=""){
       alert( 'player ' + squars[4] + ' win the game')
       }
    if(squars[7]==squars[8] && squars[8]==squars[9] && squars[9]!=""){
       alert( 'player ' + squars[7] + ' win the game')
       }
       //  (  الحكم او الشروط للفوز بالعبه   ( (رأسي)  انهم يكونو جمب بعض 
    if(squars[1]==squars[4] && squars[4]==squars[7] && squars[7]!=""){
       alert( 'player ' + squars[1] + ' win the game')
       }
    if(squars[2]==squars[5] && squars[5]==squars[8] && squars[8]!=""){
       alert( 'player ' + squars[2] + ' win the game')
       }
    if(squars[3]==squars[6] && squars[6]==squars[9] && squars[9]!=""){
       alert( 'player ' + squars[9] + ' win the game')
       }
    // (الحكم او الشرط بالفوز (المقص 
        
    if(squars[1]==squars[5] && squars[5]==squars[9] && squars[9]!=""){
       alert( 'player ' + squars[5] + '  win the game')
       }
    if(squars[3]==squars[5] && squars[5]==squars[7] && squars[7]!=""){
       alert( 'player ' + squars[3] +  ' win the game')
       }
    
    
    
    }
function insert(id){
var U = document.getElementById(id);
if(turn && U.innerHTML==""){
    U.innerHTML="x"
    turn = !turn;
}else if (!turn && U.innerHTML=="" ){
    U.innerHTML="o"
    turn = !turn; 
}
    checkwinner(); 
};