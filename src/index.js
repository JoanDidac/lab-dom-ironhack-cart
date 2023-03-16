window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtns = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});

function calculateProductPrice(product) {
  const name = product.querySelector('.name span').innerText;
  const priceElement = product.querySelector('.price span');
  if (priceElement !== null) {
    const price = parseFloat(priceElement.innerText);
    const quantity = product.querySelector('.quantity input').value;
    const totalPrice = price * quantity;
    product.querySelector('.total-price span').innerText = totalPrice.toFixed(2);
  }
}



function calculateAll() {
  const products = document.getElementsByClassName('product');
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const productPrice = calculateProductPrice(products[i]);
    products[i].querySelector('.subtotal span').textContent = productPrice.toFixed(2);
    totalPrice += productPrice;
  }
  document.querySelector('#total-value span').innerText = totalPrice.toFixed(2);
}


function removeProduct(event) {
  const target = event.currentTarget;
  const productRow = target.parentNode.parentNode;
  productRow.parentNode.removeChild(productRow);
  calculateAll();
}

function createProduct() {
  const productNameInput = document.querySelector('.create-product td input[type="text"]');
  const productPriceInput = document.querySelector('.create-product td input[type="number"]');

  const productName = productNameInput.value;
  const productPrice = productPriceInput.value;

  if (productName.trim() === '' || productPrice.trim() === '') {
    alert('Please enter valid values for both fields.');
    return;
  }

  const tableBody = document.querySelector('tbody');
  const newRow = document.createElement('tr');
  newRow.classList.add('product');

  const nameCell = document.createElement('td');
  const nameSpan = document.createElement('span');
  nameSpan.innerText = productName;
  nameCell.classList.add('name');
  nameCell.appendChild(nameSpan);

  const priceCell = document.createElement('td');
  const priceSpan = document.createElement('span');
  priceSpan.innerText = productPrice;
  priceCell.classList.add('pu');
  priceCell.appendChild(document.createTextNode('$'));
  priceCell.appendChild(priceSpan);

  const qtyCell = document.createElement('td');
  const qtyInput = document.createElement('input');
  qtyInput.type = 'number';
  qtyInput.value = 0;
  qtyInput.min = 0;
  qtyInput.placeholder = 'Quantity';
  qtyInput.classList.add('qty');
  qtyCell.appendChild(qtyInput);

  const subtotCell = document.createElement('td');
  const subtotSpan = document.createElement('span');
  subtotSpan.innerText = '';
  subtotCell.classList.add('subtotal');
  subtotCell.appendChild(document.createTextNode('$'));
  subtotCell.appendChild(subtotSpan);

  const rmCell = document.createElement('td');
  const rmBtn = document.createElement('button');
  rmBtn.classList.add('btn', 'btn-remove');
  rmBtn.innerText = 'Remove';
  rmBtn.addEventListener('click', removeProduct);
  rmCell.appendChild(rmBtn);

  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(qtyCell);
  newRow.appendChild(subtotCell);
  newRow.appendChild(rmCell);
  
  tableBody.appendChild(newRow);

  const quantity = parseInt(qtyInput.value);
  const productPriceNum = parseFloat(productPrice);
  const subtotal = quantity * productPriceNum;
  subtotSpan.textContent = subtotal.toFixed(2);

  calculateAll();
}
