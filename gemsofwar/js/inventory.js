var kingdom_list = ["All", "Adana", "All-Seeing Eye", "Apocalypse", "Blackhawk", "Blighted Lands", 
					"Bright Forest", "Broken Spire", "Crypt Keepers", "Dark Pits", "Darkstone", 
					"Dhrak-Zum", "Divinion Fields", "Dragon's Claw", "Drifting Sands", "Fang Moor", 
					"Forest of Thorns", "Ghulvania", "Glacial Peaks", "Grosh-Nak", "Guardians", 
					"Hall of Guardians", "Karakoth", "Khaziel", "Khetar", "Leonis Empire", 
					"Maugrim Woods", "Merlantis", "Mist of Scales", "Pan's Vale", "Pridelands",
					"Primal", "Primal Rift", "Sea of Sorrow", "Shentang", "Silver Necropolis", 
					"Silverglade", "Sin of Maraj", "Stormheim", "Suncrest", "Sunken Fleet", 
					"Sword's Edge", "The Vault", "The Warrens", "Urskaya", "Whitehelm", 
					"Wild Plains", "Zaejin", "Zhul'Kari"];



// Get dropdown element from DOM
var dropdown = document.getElementById("selectKingdom");

// Loop through the array
for (var i = 0; i < kingdom_list.length; ++i) {
	// Append the element to the end of Array list
	dropdown[dropdown.length] = new Option(kingdom_list[i], kingdom_list[i]);
}



function display(){

	var choice = document.getElementById("selectKingdom").value;

	if(choice == "Choose a Kingdom"){ 	
		document.getElementById('message').innerHTML = '<h4 class="text-dark">Choose a kingdom to see its details.</h4>';
	}

	else{
		document.getElementById('message').innerHTML = "";
		document.getElementById("kingdom_list").innerHTML = "";
		var template = '<div class="row kingdom-main">\
							<div class="col-2 align-self-center">\
							<img class="shield-art align-items-center" src="{SHIELD}" alt="shield"><br>\
							<img class="banner-art" src="{BANNER}" alt="banner"><br>\
							<img class="traitstone" src="{TRAITSTONE}" alt="traitstone">\
							</div>\
							<div class="col-9 description" style="\
								background-image: url(\'{PICTURE}\');\
								background-repeat: no-repeat;">\
								<h1>{NAME}</h1>\
								<p>{TITLE}</p>\
								<p>{DESCRIPTION}</p>\
							</div>\
							<div class="col-1"></div>\
							\
						</div>';

		if(choice === "All"){
			var start = 1;


			for(var i=start; i<kingdom_list.length-1; i++){
				template = template.replace('{SHIELD}', details[kingdom_list[i]].shield);
				template = template.replace('{BANNER}', details[kingdom_list[i]].banner);
				template = template.replace('{TRAITSTONE}', details[kingdom_list[i]].traitstone);
				template = template.replace('{PICTURE}', details[kingdom_list[i]].picture);
				template = template.replace('{NAME}', kingdom_list[i]);
				template = template.replace('{TITLE}', details[kingdom_list[i]].title);
				template = template.replace('{DESCRIPTION}', details[kingdom_list[i]].description);

				document.getElementById('kingdom_list').innerHTML += template;

				//Reset Template
				template = '<div class="row kingdom-main">\
							<div class="col-2 align-self-center">\
							<img class="shield-art align-items-center" src="{SHIELD}" alt="shield"><br>\
							<img class="banner-art" src="{BANNER}" alt="banner"><br>\
							<img class="traitstone" src="{TRAITSTONE}" alt="traitstone">\
							</div>\
							<div class="col-9 description" style="\
								background-image: url(\'{PICTURE}\');\
								background-repeat: no-repeat;">\
								<h1>{NAME}</h1>\
								<p>{TITLE}</p>\
								<p>{DESCRIPTION}</p>\
							</div>\
							<div class="col-1"></div>\
							\
						</div>';

			}//end of for

		}//end of if "All"

		else{
				template = template.replace('{SHIELD}', details[choice].shield);
				template = template.replace('{BANNER}', details[choice].banner);
				template = template.replace('{TRAITSTONE}', details[choice].traitstone);
				template = template.replace('{PICTURE}', details[choice].picture);
				template = template.replace('{NAME}', choice);
				template = template.replace('{TITLE}', details[choice].title);
				template = template.replace('{DESCRIPTION}', details[choice].description);

				document.getElementById('kingdom_list').innerHTML += template;

		}//end of if "All" else
	}//end of if "Choose a Kingdom" else

}//end of function display


function clearDiv(){
	document.getElementById("kingdom_list").innerHTML = '<h4 class="text-dark">Gems of War Kingdom List</h4>';
	document.getElementById('message').innerHTML = "";

}

