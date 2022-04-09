function clearScreen(){
  document.getElementById("result").value="";
  document.getElementById("input-num").value="";
  document.getElementById("calc-text").value="";
}

function fact(n){
  var answer = 1;
  if(n==""){
    return ""
  }
  else if (n == 0 || n == 1){
    return answer;
  }
  else if (n<0){
    return "Enter positive number";
  }
  else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  

}


function factorial(){
  
  var answer=1;
  var f="";
  var n=document.getElementById("input-num").value;
  console.log(n);
  answer=fact(n);
  document.getElementById("result").value=answer;
  if(!isNaN(answer) && n!="" && n>=0){
    var txt="";
			 	if( n<=200 )
			 	{
			 		txt=n+"! = ";
			 		if( n>1 )
			 		{
				 		for(var i=1; i<=n; i++)
				 		{
				 			if( i<n )
						 		txt+=i+'\u00D7';
						 	else
						 		txt+=i;
						}
					}
			 		txt+="\n= "+answer;
			 	}
    document.getElementById("calc-text").value=txt;
  }
  else{
    document.getElementById("calc-text").value="";
  }
}

