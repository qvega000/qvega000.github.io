
function getData()
{
	var firstName = document.getElementById('firstName').value;
	var middleName = document.getElementById('middleName').value;
	var lastName = document.getElementById('lastName').value;
	
	var firstDivisor = 3;
	var secondDivisor = 5;
	var thridDivisor = 7;
	var counter = 140;
	
	if (middleName)
	{
		document.getElementById("greeting").textContent = `Welcome to Trade Template, ${firstName} ${middleName} ${lastName}!`;
	} else
	 {
		document.getElementById("greeting").textContent = `Welcome to Trade Template, ${firstName} ${lastName}!`;
	 } 
	
	believeIT(counter, firstDivisor, secondDivisor, thridDivisor);
}

function believeIT(counter, firstDivisor, secondDivisor, thridDivisor)
{
	
	for (var i = 1; i <= counter; i++)		
	{
		var counterTag;
		
		if (checkDivison(i, firstDivisor) && checkDivison(i, secondDivisor)  && checkDivison(i, thridDivisor))
		{ 
			counterTag = 'Live IT'; 
		} else if (checkDivison(i, thridDivisor) && checkDivison(i, secondDivisor))
		 {
			counterTag = 'Financial Freedom';
		 } else if (checkDivison(i, secondDivisor) && checkDivison(i, firstDivisor))
		 { 
			counterTag = 'Trade IT';
		 } else if (checkDivison(i, firstDivisor))
		 {
			counterTag = 'Dream IT';
		 } else if (checkDivison(i, secondDivisor))
		 {
			counterTag = 'Manifest IT';
		 } else if (checkDivison(i, thridDivisor))
		 {
			counterTag = 'Plan IT';
		 } else 
		 {
			counterTag = 'Trade Template';
		 }
		
		var newListItem = document.createElement('li');
		
		var newText = document.createTextNode(`${i} - ${counterTag}!`);
		
		newListItem.appendChild(newText);
		
		var position = document.getElementsByTagName('ul')[0];
		
		position.appendChild(newListItem);
	}
}

function checkDivison(i, number)
{
	if (i % number === 0)
	{
		return true
	} else
	 {
		return false
	 }
}