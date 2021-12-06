function getData()
{
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var personalBackground = "Personal Background: " + document.getElementById('personalBackground').value;
	var professionalBackground = "Professional Background: " + document.getElementById('professionalBackground').value;
	var computerPlatform = "Primary Coomputer Platform: " + document.getElementById('computerPlatform').value;
	var coursesTaken = "Courses I am Taking and Why: " + document.getElementById('coursesTaken').value;
	var rememberMe = "Something to Remember Me By: " + document.getElementById('rememberMe').value;
	
	var data = [firstName, lastName, personalBackground, professionalBackground, computerPlatform, coursesTaken, rememberMe];
	displayData(data);
}
function displayData(data)
{
	for (var i = 0; i <= data.length; i++)		
	{

		var newListItem = document.createElement('li');
		
		var newText = document.createTextNode(data[i]);
		
		newListItem.appendChild(newText);
		
		var position = document.getElementsByTagName('ul')[0];
		
		position.appendChild(newListItem);
	}
}	