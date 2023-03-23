let userData = function() {
	let record = localStorage.getItem('userRecord');

	if (record === null) {
		localStorage.setItem('userData', "[]");
		return [];
	}

	return JSON.parse(record);
}();

const form = document.querySelector('#formData');
const data_el = document.querySelector('.data');
const submitBtn = document.querySelector('#submit-btn');
const showDetailsBtn = document.querySelector('#show_Details');
const clearDetailsBtn = document.querySelector('#clear_Details');
submitBtn.addEventListener('click', (e) => {
	
	e.preventDefault();


	const formData = new FormData(form);
	const values = [...formData.entries()];
	console.log(values);
    const valuesObj = Object.fromEntries(values);
    userData.push(valuesObj);
			localStorage.setItem('userData', JSON.stringify(userData));
			
					
}
);
		
showDetailsBtn.addEventListener('click', () => {
	if(data_el.classList.contains('hide')){
		displayData(); 
		window.scroll({
			top: 780,
			left: 0,
			behavior: "smooth",
		});
	}

	else {
		data_el.classList.add('hide');
		showDetailsBtn.textContent = "Show_Details";
	}
});
clearDetailsBtn.addEventListener('click', () => {
	
	localStorage.clear();

	
	if(!data_el.classList.contains('hide')){
		data_el.classList.add('hide');
		showDetailsBtn.textContent = "Show_Details";
	}
});

function displayData() {

	let users = JSON.parse(localStorage.getItem('userData'));

	if (users === null || users.length === 0) {
		
		alert('No Users in Database!');
	} else {

		showDetailsBtn.textContent = "Hide Details";

		data_el.innerHTML = '<h3 id="data-title">DETAILS</h3>';
		data_el.classList.remove('hide');
		users.forEach((user, idx )=> {
			data_el.innerHTML += `<p class="user">DETAIL ${idx+1}</p>`;

			for (const field in user) {
				data_el.innerHTML += `<p class="entry"><span class="entry-title">${field.toUpperCase()} :</span> ${user[field]}</p>`

            }
		});
	}
}