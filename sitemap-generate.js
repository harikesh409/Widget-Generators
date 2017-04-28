function generate()
{

 var formInput = document.getElementById('theInput').value;
              var smap ="/atom.xml?redirect=false&start-index=1&max-results=500"

if(formInput!='') 
{
	bttcode.value = formInput+smap;
}
}
function reset()
{
	document.getElementById("theInput").value="http://www.blogg-tricks.blogspot.in";
	document.getElementById("bttcode").value="";
}
document.write("Copyright &copy 2013 - ");
var today = new Date();
var year = today.getFullYear();
document.write(year);
document.write(" All Rights Reserved by P.Harikesh @<a href ='http://www.blogg-tricks.blogspot.com/' target='blank'>Blogg-Tricks</a>");