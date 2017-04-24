function bttselector() {
var txtarea=document.getElementsByName("btttxtarea")[0];
var fbid=document.getElementsByName("bttfburl")[0].value;
var fburl="";
var c=document.getElementsByName("btttype");
<!-- fb url -->
if(c[0].checked)
{fburl="http:\/\/2.bp.blogspot.com\/-V9m2YyhmdGA\/T0jC3jmhDlI\/AAAAAAAAAJo\/K67FFQge82Q\/s1600\/facebook_static+button-standard-netoopsblog.png";}
else if(c[1].checked)
{fburl="http:\/\/2.bp.blogspot.com\/-U-Tqo1012zI\/T0jC4dNlCSI\/AAAAAAAAAJw\/-U96ZzZhrp4\/s1600\/facebook_static+button2-netoopsblog.png";}
else if(c[2].checked)
{fburl="http:\/\/4.bp.blogspot.com\/-zNRniWJphn8\/T0jC5KwXwhI\/AAAAAAAAAJ4\/YFJcNdk9LzU\/s1600\/facebook_static+button3-netoopsblog.png";}
else
{fburl="http:\/\/3.bp.blogspot.com\/--YMTRGpGgko\/T0jC5zdicwI\/AAAAAAAAAJ8\/7eE40O9rc1Q\/s1600\/fb_static+button.png";}
<!-- fb url -->
txtarea.value="<!-- BTT Facebook Widget Start -->";
txtarea.value+="<script type=\"text\/javascript\">\/*<![CDATA[*\/jQuery(document).ready(function() {jQuery(\".bttlikebox\").hover(function() {jQuery(this).stop().animate({right: \"0\"}, \"medium\");}, function() {jQuery(this).stop().animate({right: \"-250\"}, \"medium\");}, 500);});\/*]]>*\/<\/script>";
txtarea.value+="<style type=\"text\/css\">.bttlikebox{background: url(\""+fburl;
txtarea.value+="\") no-repeat scroll left center transparent !important;display: block;float: right;height: 270px;padding: 0 5px 0 42px;width: 245px;z-index: 9999999;position:fixed;right:-250px;top:20%;}.bttlikebox div{border:none;position:relative;display:block;}.bttlikebox span{bottom: 12px;font: 8px \"lucida grande\",tahoma,verdana,arial,sans-serif;position: absolute;right: 7px;text-align: right;z-index: 999;}.bttlikebox span a{color: gray;text-decoration:none;}.bttlikebox span a:hover{text-decoration:underline;}<\/style>";
txtarea.value+="<div class=\"bttlikebox\"><div><iframe src=\"http:\/\/www.facebook.com\/plugins\/likebox.php?href="+fbid;
txtarea.value+="&amp;width=245&amp;colorscheme=light&amp;show_faces=true&amp;connections=9&amp;stream=false&amp;header=false&amp;height=270\" scrolling=\"no\" frameborder=\"0\" scrolling=\"no\" style=\"border: medium none; overflow: hidden; height: 270px; width: 245px;background:#fff;\"><\/iframe><\/div><a href='http://www.blogg-tricks.blogspot.in'><img src='http://1.bp.blogspot.com/-RikrI-c_pyQ/T2DTcP6aMvI/AAAAAAAAAL0/H6v7PVoHM_w/s1600/1x1juice.png'/></a><\/div><!-- BTT Facebook Widget End -->";
}
function bttpreview() {
	var code=document.form1.btttxtarea.value;
	var msg="";
	if(code == "")
	{
		alert("Nothing to preview");
		return false;
	}
	msg=open("","","toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=yes,copyhistory=no,width=600,height=300");
msg.document.write("<html> <head><script src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js' type='text/javascript'/></head><body>"+code+"</body></html>");

return false;
}

document.write("Copyright &copy 2013 - ");
var today = new Date();
var year = today.getFullYear();
document.write(year);
document.write(" All Rights Reserved by P.Harikesh @<a href ='http://www.blogg-tricks.blogspot.com/' target='blank'>Blogg-Tricks</a>");
