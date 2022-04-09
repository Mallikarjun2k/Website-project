function clearScreen(){
  document.getElementById("log-inp").value="";
  document.getElementById("base-inp").value="";
  document.getElementById("result-box").value="";
}

function logarithm(){
  var x=document.getElementById("log-inp").value;
  var a=document.getElementById("base-inp").value
  if(a<=0){
    document.getElementById("result-box").value="Base must be greater than 0";
  }
  else if(x<=0) {
    document.getElementById("result-box").value="Logarithms are only defined for numbers greater than 0";
  }
  else{
    let y=getBaseLog(a, x);
    document.getElementById("result-box").value=y;
  }

}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
