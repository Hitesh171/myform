const submitBtn= document.querySelector('#submit-btn');
const form=document.querySelector('#formData');
submitBtn.addEventListener('click',(e)=>{
	e.preventDefault();
	const formData=new FormData(form);
	const values=[...formData.entries()];
    console.log(values);
	displayData(values);
	localStorage.setItem('userData',JSON.stringify(values));
	
});

function displayData(values){
	const data_el=document.querySelector('.data');
	data_el.innerHTML='<h3>Details</h3>';
	data_el.classList.remove('hide');
	for (const value of values){
		data_el.innerHTML+=`<p>${value[0]}: ${value[1]}</p>`;
	}
}

