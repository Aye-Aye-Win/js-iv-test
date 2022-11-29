let items = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
let inputForm = document.querySelector("#inputForm");
let rows = document.querySelector("#rows");
let total = document.querySelector("#total")

function calTotal(){
    let costs = document.querySelectorAll(".cost");
    total.innerText = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);
}

function del(event){
    if(confirm('Are you sure to delete?')){
    event.target.parentElement.parentElement.remove();
    calTotal();
}
}

products.forEach(function(product) {
    let newOption = new Option(product.name,product.id);
    items.append(newOption);
});

inputForm.addEventListener('submit', function(e){
    e.preventDefault();
    let currentProduct = products.find(product => product.id == items.value);
    let cost = currentProduct.price * quantity.value;
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
    <td>${currentProduct.name}<p class="small text-danger mb-0 del-btn" onclick="del(event)">Delete</p></td>
    <td class="text-end">${currentProduct.price}</td>
    <td class="text-end">${quantity.value}</td>
    <td class="text-end cost">${cost}</td>`;
    rows.append(newTr);
    inputForm.reset();
    calTotal();
});
