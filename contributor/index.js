
fetch("/contributor/data.json")
.then(response => {return response.json()})
.then(data => {
	for (let i = 0; i < data.developers.length; i++) {
		if (data.developers[i].status == "active") {
			document.getElementById("list-developer").innerHTML += `<div class="contributor"><a href="${data.developers[i].homepage}" target="_blank"><img src="${data.developers[i].logo}" alt="${data.developers[i].name}"></a></div>`
		}
		else {
			return 0
		}
	}
	for (let i = 0; i < data.sponsors.length; i++) {
		if (data.sponsors[i].status == "active") {
			document.getElementById("list-sponsors").innerHTML += `<div class="contributor"><a href="${data.sponsors[i].homepage}" target="_blank"><img src="${data.sponsors[i].logo}" alt="${data.sponsors[i].name}"></a></div>`
		}
		else {
			return 0
		}
	}
})

