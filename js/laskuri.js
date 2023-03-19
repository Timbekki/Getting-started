function laske(){
  lompakko=Number(document.getElementById("luku1").value);
  lippu=document.getElementById("luku2").value;
  
  let eka = "Ikäsi on " + lompakko;
  
  document.getElementById("naytaluvut").innerHTML=eka;
  }
  
  
  function vertaa(){
a = document.getElementById("luku2").value;
document.getElementById("result").innerHTML = "Nimesi on " +  a;
}
  