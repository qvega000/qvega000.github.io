
function getData()
{
	var firstName = document.getElementById('firstName').value;
	var middleName = document.getElementById('middleName').value;
	var lastName = document.getElementById('lastName').value;
	
	if (middleName)
	{
		document.getElementById("greeting").textContent = `Welcome to Trade Template, ${firstName} ${middleName} ${lastName}!`;
	} else
	 {
		document.getElementById("greeting").textContent = `Welcome to Trade Template, ${firstName} ${lastName}!`;
	 }
	 
	var userCount = prompt(`How high do you want to count, ${firstName}?`);
	believeIT(userCount);
	 
}

function believeIT(counter)
{
	for (var i = 1; i <= counter; i++)
	{
		var evenOrOdd;
		
		if (i % 2 === 0)
		{
			evenOrOdd = 'The number is even';
		} else
		 { 
			evenOrOdd = 'The number is odd';
		 }
		
		var newListItem = document.createElement('li');
		
		var newText = document.createTextNode(`${i} - Believe IT! - ${evenOrOdd}!`);
		
		newListItem.appendChild(newText);
		
		var position = document.getElementsByTagName('ul')[0];
		
		position.appendChild(newListItem);
	}
}