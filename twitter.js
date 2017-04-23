
		
        //<!--

        function geekonikGenerate(){

            var geekonikttypeselected="";

            for (i=0; i<document.getElementsByName("geekonikttype").length; i++)

            {

                if (document.getElementsByName("geekonikttype")[i].checked===true)

                {

                    geekonikttypeselected = document.getElementsByName("geekonikttype")[i].value;

                }

            }

            var usernameoftwitter = document.getElementsByName("tusername")[0].value;

            var geekonikwidgetwidth = document.getElementsByName("twidth")[0].value;

            var geekonikwidgetheight = document.getElementsByName("theight")[0].value;

            var geekoniktwidgetcontent = document.getElementsByName("widget.content")[0];

            geekoniktwidgetcontent.value = "";

            geekoniktwidgetcontent.value += "\<object type=\"application/x-shockwave-flash\" data=\"http://www.buzzbuttons.com/BUTTON" + geekonikttypeselected + "/twitbutton.swf\" width=\"" + geekonikwidgetwidth + "\" height=\"" + geekonikwidgetheight + "\"\>\<param name=\"movie\" value=\"http://www.buzzbuttons.com/BUTTON" + geekonikttypeselected + "/twitbutton.swf\"\>\</param\>\<param name=\"allowscriptaccess\" value=\"always\"\>\</param\>\<param name=\"menu\" value=\"false\"\>\</param\>\<param name=\"wmode\" value=\"transparent\"\>\</param\>\<param name=\"flashvars\" value=\"username=" + usernameoftwitter + "\"\>\</param\>\<a href=\"http://blogg-tricks.blogspot.com/\" title=\"Blogger Widgets\"\>Blogger Widgets\</a\>\<embed src=\"http://www.buzzbuttons.com/BUTTON" + geekonikttypeselected + "/twitbutton.swf\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" width=\"" + geekonikwidgetwidth + "\" height=\"" + geekonikwidgetheight + "\" menu=\"false\" wmode=\"transparent\" flashvars=\"username=" + usernameoftwitter + "\"\>\</embed\>\</object\>";

            document.getElementsByName("go")[0].disabled = false;

        }

        function geekoniktwitterreset(){

            document.getElementsByName("widget.content")[0].value = "";

            document.getElementsByName("go")[0].disabled = true;

            document.getElementsByName("geekonikttype")[0].checked = true;

            document.getElementsByName("tusername")[0].value = "harikesh409";

            document.getElementsByName("twidth")[0].value = "150";

            document.getElementsByName("theight")[0].value = "150";
			document.getElementsByName("tbox")[0].value = "";

        }

        //-->

		//<!--

		function geekonikcodegen() {
    var geekonikttypeselected="";


            for (i=0; i<document.getElementsByName("geekonikttype").length; i++)


            {


                if (document.getElementsByName("geekonikttype")[i].checked==true)


                {


                    geekonikttypeselected = document.getElementsByName("geekonikttype")[i].value;


                }


            }

			var usernameoftwitter = document.getElementsByName("tusername")[0].value;

			var geekonikwidgetwidth = document.getElementsByName("twidth")[0].value;

			var geekonikwidgetheight = document.getElementsByName("theight")[0].value;

			var geekonikpanelsetup = document.getElementsByName("tbox")[0];

			

			

			

geekonikpanelsetup.value = "";


            geekonikpanelsetup.value += "\<object type=\"application/x-shockwave-flash\" data=\"http://www.buzzbuttons.com/BUTTON" + geekonikttypeselected + "/twitbutton.swf\" width=\"" + geekonikwidgetwidth + "\" height=\"" + geekonikwidgetheight + "\"\>\<param name=\"movie\" value=\"http://www.buzzbuttons.com/BUTTON" + geekonikttypeselected + "/twitbutton.swf\"\>\</param\>\<param name=\"allowscriptaccess\" value=\"always\"\>\</param\>\<param name=\"menu\" value=\"false\"\>\</param\>\<param name=\"wmode\" value=\"transparent\"\>\</param\>\<param name=\"flashvars\" value=\"username=" + usernameoftwitter + "\"\>\</param\>\<a href=\"http://blogg-tricks.blogspot.com/\" title=\"Blogger Widgets\"\>Blogger Widgets\</a\>\<embed src=\"http://www.buzzbuttons.com/BUTTON" + geekonikttypeselected + "/twitbutton.swf\" type=\"application/x-shockwave-flash\" allowscriptaccess=\"always\" width=\"" + geekonikwidgetwidth + "\" height=\"" + geekonikwidgetheight + "\" menu=\"false\" wmode=\"transparent\" flashvars=\"username=" + usernameoftwitter + "\"\>\</embed\>\</object\>";


            document.getElementsByName("go")[0].disabled = false;





		}

		//-->
