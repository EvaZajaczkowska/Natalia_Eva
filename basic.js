function submitData() {
	//creating var  which have user input
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var age = document.getElementById("age").value;
	var select=document.getElementById("select").value;

	//make text green or white when.. -----------ERROR -CORRECT style of null------------
	if (firstName.lenght>1){
		document.getElementById("fname").style.backgroundColor =("purple");
		//var green= document.getElementById("fname");
		//green.style.color="green";
		
	}else{
		document.getElementById("fname").style.backgroundColor=("blue");
	}


	if (select="IT"){
		document.getElementById("fselect").style.color="purple";
		
	}else{
		document.getElementById("fselect").style.color="yellow";
	}

	//display user input on console to check
	console.log(firstName +lastName+age +select);
	//  -------WHY WE NEED ID RESULT??---------
	document.getElementById('result').innerHTML="<span id='fname'>"+firstName + "</span>" +lastName+" "+age + "<span id=fselect>" + select +"</span>";
	//how to display user input on the screen ??
}
//selecting element node submitid, after he is being clicked the function submit data will be executed
document.getElementById('submitid').addEventListener("click", submitData, false);
