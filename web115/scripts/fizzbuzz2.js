
function getData()
{
	var firstName = document.getElementById('firstName').value;
	var middleName = document.getElementById('middleName').value;
	var lastName = document.getElementById('lastName').value;
	
	var counter = 140;
	if (middleName)
	{
		document.getElementById("greeting").textContent = `Welcome to Trade Template, ${firstName} ${middleName} ${lastName}!`;
	} else
	 {
		document.getElementById("greeting").textContent = `Welcome to Trade Template, ${firstName} ${lastName}!`;
	 } 
	var firstDivisor = prompt('Enter your first number');
	var secondDivisor = prompt('Enter your second number');
	
	believeIT(counter, firstDivisor, secondDivisor);
}

function believeIT(counter, firstDivisor, secondDivisor)
{
	
	for (var i = 1; i <= counter; i++)		
	{
		var counterTag;
		
		if (checkDivison(i, firstDivisor ) && checkDivison(i, secondDivisor))
		{ 
			counterTag = 'Execute IT'; 
		} else if (checkDivison(i, firstDivisor))
		{
			counterTag = 'Plan IT';
		} else 
		{ 
			counterTag = 'Manifest IT';
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