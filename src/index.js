// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
    const price = product.querySelector('.price span').innerHTML;
    const quantity = product.querySelector('.quantity input').value;
    const subtotal = price * quantity;
    const subtotalElement = product.querySelector('.subtotal span');
    subtotalElement.innerHTML = subtotal;
    return subtotal;
  }
  

function calculateAll() {
    const allProducts = document.getElementsByClassName('product');
    let total = 0;
    for (let i = 0; i < allProducts.length; i++) {
      const product = allProducts[i];
      const subtotal = updateSubtotal(product);
      total += subtotal;
    }
    const totalPriceElement = document.querySelector('#total-value span');
    totalPriceElement.innerText = total.toFixed(2);
  }
  

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
