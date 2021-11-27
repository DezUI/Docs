
fetch("./releases.json")
.then(response => {return response.json()})
.then(data => {
	for (let i = 0; i < data.developers.length; i++) {
		if (data.developers[i].status == "active") {
			document.getElementById("lists-developers").innerHTML += `<div class="contributor"><a href="${data.developers[i].homepage}" target="_blank"><img src="${data.developers[i].logo}" alt="${data.developers[i].name}"></a></div>`
		}
	}
})
