
function validateForm() {
    let x = document.forms["myform"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  setTimeout(function() { alert("my message"); }, time);
  document.getElementById('alrt').innerHTML='<b>Please wait, Your download will start soon!!!</b>'; 
setTimeout(function() {document.getElementById('alrt').innerHTML='';},5000);

<div id='alrt' style="fontWeight = 'bold'"></div>