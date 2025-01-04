
function pickComputermove(){
const randomove=Math.random();
let computermove='';
if(randomove>=0&&randomove<1/3){
  computermove="rock";
}else if(randomove>1/3&&randomove<2/3){
 computermove ="paper";
}else if(randomove >2/3 && randomove<1){
   computermove= "scissors";
} 
return computermove;
}

function showComputermove(playermove){
  
  const computermove=pickComputermove();

  let result='';
  
  if(playermove==='rock'){
  if(computermove==="rock"){
    result='Tie';
  }else if( computermove==='paper'){
    result='You lose';
  }else if( computermove==='scissor'){
    result='You win';
  }
}else if(playermove==='paper'){
  if(computermove==="rock"){
    result='You win';
  }else if( computermove==='paper'){
    result='Tie';
  }else if( computermove==='scissor'){
    result='You lose';
  }
}else if(playermove==='scissor'){
  if(computermove==="rock"){
    result='You lose';
  }else if( computermove==='paper'){
    result='You win';
  }else if( computermove==='scissor'){
    result='Tie';
  }
}
  
  alert(`you picked ${playermove}.computer picked ${computermove} .result ${result}`);
}



