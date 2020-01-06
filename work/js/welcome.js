function WriteMsg(){
  
  /* Form and form element ids into variables */
  var msfrm=document.getElementById("idform");
  var frmname=document.getElementById("idname");
  var frmmsg=document.getElementById("idmsg");
  var fmsgbox=document.getElementById("idmsgbox");

  /* formatting name and message field text into paragraph */
  var text1="<p>"+frmname.value+"</p>";
  var text2="<p>"+frmmsg.value+"</p>";
   
  /* Writing the text message to the DOM of the same html page */   
   fmsgbox.innerHTML="<p>"+text1+"</p>"+"<p>"+text2+"</p>";
   

}