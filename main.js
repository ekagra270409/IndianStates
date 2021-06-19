var states = 
["Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telengana",
"Tripura",
"Uttarakhand",
"Uttar Pradesh",
"West Bengal"];

var symbols = 
["anp%20logo.png",
"arp%20logo.png",
"assaml.png",
"bilogo.png",
"chalogo.png",
"goa%20logo.png",
"gujul.png",
"harilogo.png",
"hp%20logo.png",
"jhlogo.png",
"krntl.png",
"kerl.png",
"mp%20logo.png",
"mahalogo.png",
"manilogo.png",
"meghl.png",
"mizlo.png",
"nagal.png",
"odilo.png",
"punlo.png",
"rajalogo.png",
"sikl.png",
"tn%20logo.png",
"telegul.png",
"trilogo.png",
"uttaralogo.png",
"up%20logo.png",
"wb%20logo.png"];

var i = 0;
function nextslide() 
{  
  document.getElementById("statename").innerHTML = states[i];
  document.getElementById("aftermap").src = symbols[i];
  i++;
}