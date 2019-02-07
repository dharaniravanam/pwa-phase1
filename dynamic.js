function getfile(file,callback)
 {
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function()
   {
		if (htp.readyState===4&&htp.status=="200") 
		{
			callback(htp.responseText);
		}
	}
   htp.send(null);
}
getfile("dynamic.json",function(text)
{
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	edu(data.education);
	 lag(data.laguages);
})

var left=document.querySelector(".left");
function profile(p)
 {
     var pimg=document.createElement("img");
     pimg.src=p.img;
      left.appendChild(pimg);
  var ph3=document.createElement("h3");
   ph3.textContent=p.name;
  left.appendChild(ph3);
  var pp=document.createElement("p");
     pp.textContent=p.roll;
  left.appendChild(pp);
  var pp=document.createElement("p");
  pp.textContent=p.institute;
  left.appendChild(pp);
  var pp=document.createElement("p");
   pp.textContent=p.place;
   left.appendChild(pp);
   }

var right=document.querySelector(".right");
function career(c)
{
	var hc=document.createElement("h2");
	hc.innerHTML="resume";
	right.appendChild(hc);

	var cp=document.createElement("p");
    cp.textContent=c.info;
     right.appendChild(cp);

      var chr=document.createElement("hr");
          right.appendChild(chr);
 }
     


 function edu(e)
    {
          var edu=document.createElement("h2");
          edu.innerHTML="education details:";
          right.appendChild(edu);

          var ehr=document.createElement("hr");
          right.appendChild(ehr);

          var etable=document.createElement("table");
         etable.border="1";
         var tr1="<tr><td>s.no</td><td>degree</td><td>institute</td><td>yop</td></tr>"; 
         var tr2="";
          for(i=0;i<e.length;i++)
          {
          	tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yop+"</td></td>";
         }
         etable.innerHTML=tr1+tr2;
         right.appendChild(etable);
    }
 function lag(l)
   {

   	 var lhr=document.createElement("hr");
          right.appendChild(lhr);
      var lag=document.createElement("h2");
          lag.innerHTML="languages:";
          right.appendChild(lag);


      var ul=document.createElement("ul");
      right.appendChild(ul);
        for(i=0;i<l.length;i++)
          {
          	var li=document.createElement("li");
          	li.textContent=l[i].lang;
          	 ul.appendChild(li);
         }
           
   
// 
   }
