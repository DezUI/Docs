
fetch("/contributor/data.json")
.then(response => {return response.json()})
.then(data => {
	for (let i = 0; i < data.developers.length; i++) {
		if (data.developers[i].status == "active") {
			document.getElementById("lists-developers").innerHTML += `<div class="contributor"><a href="${data.developers[i].homepage}" target="_blank"><img src="${data.developers[i].logo}" alt="${data.developers[i].name}"></a></div>`
		}
	}
	for (let i = 0; i < data.partners.length; i++) {
		if (data.partners[i].status == "active") {
			document.getElementById("lists-partners").innerHTML += `<div class="partner"><a href="${data.partners[i].homepage}" target="_blank"><img src="${data.partners[i].logo}" alt="${data.partners[i].name}"></a></div>`
		}
	}
	// for (let i = 0; i < data.collaborators.length; i++) {
	// 	if (data.collaborators[i].status == "active") {
	// 		document.getElementById("lists-collaborators").innerHTML += `<div class="collaborator"><a href="${data.collaborators[i].homepage}" target="_blank"><img src="${data.collaborators[i].logo}" alt="${data.collaborators[i].name}"></a></div>`
	// 	}
	// }
	// for (let i = 0; i < data.sponsors.length; i++) {
	// 	if (data.sponsors[i].status == "active") {
	// 		document.getElementById("lists-sponsors").innerHTML += `<div class="sponsor"><a href="${data.sponsors[i].homepage}" target="_blank"><img src="${data.sponsors[i].logo}" alt="${data.sponsors[i].name}"></a></div>`
	// 	}
	// }
})

