//1.create a request variable from XMLHttpRequest
var request=new XMLHttpRequest();

//2.Create a new conncetion.
request.open('GET','https://restcountries.eu/rest/v2/all',true)

//3.Send request
request.send();

//4.Load the data.
request.onload=function()
{
	var countryData = JSON.parse(this.response);
	console.log(countryData);
	for(var i=0;i<countryData.length;i++)
{
	var total=0;
	total=total+countryData[i].population;
}
console.log(total);
}

