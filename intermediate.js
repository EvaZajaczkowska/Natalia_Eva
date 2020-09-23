var numberOfPlannedNights =window.prompt("For how many nights you want to stay?" );

//create a class with its variables
class Hotel{
	//hotelName;
	//numberOfNights;
	//address;
	//image;

//creating and initializing of objects of the class hotel
constructor(hotelName, numberOfNights, address, image){
	this.hotelName=hotelName;
	this.numberOfNights=numberOfNights;
	this.address=address;
	this.image=image;
}

	//function in the Hotel class can be created just with the function name
	showAvailability(){
		//-----------------submit button is always visible ------------
		if (this.numberOfNights>=numberOfPlannedNights){
			var button =document.createElement("button");
			buttonn.textContext="I will reserve ";
			return button
			//document.getElementById("submitid");
		}else{

			//-------------how can I write it without document.write?----------------------
			document.write("Sorry no available nights for " + this.hotelName)
		}

	}
}

//hilton object is created with its argumennts
var hilton=new Hotel("Hilton Vienna", 10, "Hauptstrasse 10", "Idk");
console.log(hilton.showAvailability());

