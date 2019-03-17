
var t_keys = Object.keys(traitstones);


var template = '<div class="m-2">\
					<div class="card">\
						<img class=" traitstone" src="{FILE}" alt="traitstone">\
						<div class="card-body">\
							<p class="card-title kingdoms">{KINGDOMS}</p>\
						</div>\
					</div>\
				</div>';


for(var i=0; i<t_keys.length; i++){

	template = template.replace('{FILE}', traitstones[t_keys[i]].file);
	template = template.replace('{KINGDOMS}', traitstones[t_keys[i]].kingdom);
	document.getElementById('cards-container').innerHTML += template;

	template = '<div class="m-2">\
					<div class="card arcane-card">\
						<img class="traitstone" src="{FILE}" alt="traitstone">\
						<div class="card-body">\
							<p class="card-title kingdoms">{KINGDOMS}</p>\
						</div>\
					</div>\
				</div>';
}