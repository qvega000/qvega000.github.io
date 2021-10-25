
function getData()
{
	let firstName = document.getElementById('fname').value;
	let middleName = document.getElementById('mname').value;
	let lastname = document.getElementById('lname').value;
	let counter = 140;
	if (middleName)
	{
		document.getElementById("greeting").textContent = `Welcome to Trade Template, ${firstName} ${middleName} ${lastname}!`;
	} else
	 {
		document.getElementById("greeting").textContent = `Welcome to Trade Template, ${firstName} ${lastname}!`;
	 } 
	
	believeIT(counter);
}
function believeIT(counter)
{
	
	for (let i = 1; i <= counter; i++)		
	{
		var counterTag;
		
		if (i % 3 === 0 && i % 5 === 0) 
		{ 
			counterTag = 'Execute IT'; 
		} else if (i % 3 === 0)
		{
			counterTag = 'Plan IT';
		}
			else 
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