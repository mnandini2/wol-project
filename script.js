console.log("Hello World :)");

const datatable = [
    { "state": "--Please choose an option--", "capital": "--Please choose an option--" },
    { "state": "Andaman and Nicobar Islands (UT)", "capital": "Port Blair" },
    { "state": "Andhra Pradesh", "capital": "Amaravati" },
    { "state": "Arunachal Pradesh", "capital": "Itanagar" },
    { "state": "Assam", "capital": "Dispur" },
    { "state": "Bihar", "capital": "Patna" },
    { "state": "Chandigarh (UT)", "capital": "Chandigarh" },
    { "state": "Chattisgarh", "capital": "Raipur" },
    { "state": "Dadra & Nagar Haveli (UT)", "capital": "Silvassa" },
    { "state": "Daman & Diu (UT)", "capital": "Daman" },
    { "state": "Delhi (NCT)", "capital": "New Delhi" },
    { "state": "Goa", "capital": "Panaji" },
    { "state": "Gujarat", "capital": "Gandhinagar" },
    { "state": "Haryana", "capital": "Chandigarh" },
    { "state": "Himachal Pradesh", "capital": "Shimla" },
    { "state": "Jammu & Kashmir", "capital": "Srinagar" },
    { "state": "Jharkhand", "capital": "Ranchi" },
    { "state": "Karnataka", "capital": "Bengaluru" },
    { "state": "Kerala", "capital": "Thiruvananthapuram" },
    { "state": "Lakshwadeep (UT)", "capital": "Kavaratti" },
    { "state": "Madhya Pradesh", "capital": "Bhopal" },
    { "state": "Maharastra", "capital": "Mumbai" },
    { "state": "Manipur", "capital": "Imphal" },
    { "state": "Meghalaya", "capital": "Shillong" },
    { "state": "Mizoram", "capital": "Aizawl" },
    { "state": "Nagaland", "capital": "Kohima" },
    { "state": "Odisha", "capital": "Bhubaneswar" },
    { "state": "Puducherry (UT)", "capital": "Puducherry" },
    { "state": "Punjab", "capital": "Chandigarh" },
    { "state": "Rajasthan", "capital": "Jaipur" },
    { "state": "Sikkim", "capital": "Gangtok" },
    { "state": "Tamil Nadu", "capital": "Chennai" },
    { "state": "Telangana", "capital": "Hyderabad" },
    { "state": "Tripura", "capital": "Agartala" },
    { "state": "Uttarakhand", "capital": "Dehradun" },
    { "state": "Uttar Pradesh", "capital": "Lucknow" },
    { "state": "West Bengal", "capital": "Kolkata" }
];

const stateSelect = document.querySelector("#state-select");
const capitalSelect = document.querySelector("#capital-select");

// <option value=""></option>
// stateSelect.innerHTML += '<option value="Madhya Pradesh">Madhya Pradesh</option>';
// capitalSelect.innerHTML += '<option value="Bhopal">Bhopal</option>';

datatable.forEach((pair) => {
    stateSelect.innerHTML += `<option value="${pair.state}">${pair.state}</option>`;
    capitalSelect.innerHTML += `<option value="${pair.capital}">${pair.capital}</option>`;
});

stateSelect.addEventListener('change', updateCapital);
capitalSelect.addEventListener('change', updateState);

function updateCapital(e) {
    // const state = e.target.value;
    // console.log(state);
    const pair = datatable.find(pair => pair.state === e.target.value);
    document.querySelector(`#capital-select [value="${pair.capital}"]`).selected = true;
}

function updateState(e) {
    const pair = datatable.find(pair => pair.capital === e.target.value);
    document.querySelector(`#state-select [value="${pair.state}"]`).selected = true;
}