eDrop
------

**JavaScript function to create an HTML dropdown**

Example:
----

<pre>
&lt;div id="render">&lt;/div>
&lt;script>
document.getElementById("render").innerHTML = eDrop("myName", {
	options:[
			{ value:"1", text:"Option 1", selected: false, style: "color: red;" },
			{ value:"2", text:"Option 2", selected: true, style: "color: blue;" },
			{ value:"3", text:"Option 3", selected: false, style: "color: green;" },
			{ value:"4", text:"Option 4", selected: false, style: "color: orange;" }
		]
}, "eee", "fff", "dddd", "alert(this.name + ' has changed.');");
&lt;/script>
</pre>

Parameters:
----
<pre>
eDrop(
	n = Dropdown Name Field (required),
	d = Data to build the dropdown in JSON format (optional - It will be empty without it),
	i = Dropdown ID (optional),
	c = Class (optional),
	s = Style (optional)
)
</pre>

JSON Data Set:
----
<pre>
{
	options:[
		{ 
			value:"Required", 
			text:"Optional - Renders value if not set",
			selected: "Optional - assume false if omitted",
			style: "Optional, some browsers ignore option styles" }
	]
)

Disclaimer
----
This code is provided without warranty. While I strive to maintain backwards compatibility with previous versions, the code is still under active development. As this is the case, some revisions may break compatibility with earlier versions of the library. Please keep this in mind when using eTable.

Copyright and Licensing
----
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license