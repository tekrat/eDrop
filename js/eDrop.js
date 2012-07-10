/* 
** eDrop **
JavaScript function to create an HTML dropdown
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license
https://github.com/tekrat/eDrop
*/
function eDrop(n, d, i, c, s, f){
	var r = "<select";
	if(typeof n != "undefined"){ r += ' name="' + n + '"'; }
	if(typeof i != "undefined"){ r += ' id="' + i + '"'; }
	if(typeof c != "undefined"){ r += ' class="' + c + '"'; }
	if(typeof s != "undefined"){ r += ' style="' + s + '"'; }
	if(typeof f != "undefined"){ r += ' onchange="' + f + '"'; }
	r += ">\r\n";
	
	if(typeof d != "undefined"){
		// Loop through value sets (vs)
		for(vs in d.options){
			r += "\t<option";
			if(typeof d.options[vs].value != "undefined"){ r += ' value="' + d.options[vs].value + '"'; }			
			if(d.options[vs].selected == true || d.options[vs].selected == 1 || d.options[vs].selected == "1"){ 
				r += ' selected="selected"'; 
			}
			r += ">";
			if(typeof d.options[vs].value != "undefined"){ 
				if(typeof d.options[vs].text != "undefined"){ 
					r += d.options[vs].text;
				}else{
					r += d.options[vs].value;
				}
			}
			r += "</option>\r\n";
		}
	}
	r += "</select>\r\n";
	return r;
}