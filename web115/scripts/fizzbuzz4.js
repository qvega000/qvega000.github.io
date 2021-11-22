
function getData()
{
	var firstName = document.getElementById('firstName').value;
	var middleName = document.getElementById('middleName').value;
	var lastName = document.getElementById('lastName').value;
	
	var firstDivisor = document.getElementById('firstDivisor').value;
	var firstDivisorOutput = document.getElementById('firstDivisorOutput').value;
	var secondDivisor = document.getElementById('secondDivisor').value;
	var secondDivisorOutput = document.getElementById('secondDivisorOutput').value;
	var thirdDivisor = document.getElementById('thirdDivisor').value;
	var thirdDivisorOutput = document.getElementById('thirdDivisorOutput').value;
	var counter = document.getElementById('counter').value;
	var defaultPhrase = document.getElementById('defaultPhrase').value;
	
	if (middleName)
	{
		document.getElementById("greeting").textContent = `Welcome to Trade Template, ${firstName} ${middleName} ${lastName}!`;
	} else
	 {
		document.getElementById("greeting").textContent = `Welcome to Trade Template, ${firstName} ${lastName}!`;
	 } 
	
	believeIT(counter, firstDivisor, secondDivisor, thirdDivisor, firstDivisorOutput, secondDivisorOutput, thirdDivisorOutput, defaultPhrase);
}

function believeIT(counter, firstDivisor, secondDivisor, thirdDivisor, firstDivisorOutput, secondDivisorOutput, thirdDivisorOutput, defaultPhrase)
{
	
	for (var i = 1; i <= counter; i++)		
	{
		var counterTag;
		
		if (checkDivison(i, firstDivisor) && checkDivison(i, secondDivisor)  && checkDivison(i, thirdDivisor))
		{ 
			counterTag = firstDivisorOutput + ' ' + secondDivisorOutput + ' ' + thirdDivisorOutput;
		} else if (checkDivison(i, thirdDivisor) && checkDivison(i, secondDivisor))
		 {
			counterTag = secondDivisorOutput + ' ' + thirdDivisorOutput;
		 } else if (checkDivison(i, secondDivisor) && checkDivison(i, firstDivisor))
		 { 
			counterTag = firstDivisorOutput + ' ' + secondDivisorOutput 
		 } else if (checkDivison(i, firstDivisor))
		 {
			counterTag = firstDivisorOutput;
		 } else if (checkDivison(i, secondDivisor))
		 {
			counterTag = secondDivisorOutput;
		 } else if (checkDivison(i, thirdDivisor))
		 {
			counterTag = thirdDivisorOutput;
		 } else 
		 {
			counterTag = defaultPhrase;
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