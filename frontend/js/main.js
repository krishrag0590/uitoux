const baseUrl =  `http://localhost:5005/`;

document.addEventListener("DOMContentLoaded", function() {
  getProductMetadata()
  getProductsByCategory()
  getFeaturedProducts(-1)
});

function getProductsByCategory() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let resp = JSON.parse(xhttp.responseText)

        if(resp["top_rated_products"].length > 0) {
          document.getElementById('top-rated-element').innerHTML = "";
          resp["top_rated_products"].forEach((x) => {
            createProductByCategoryElement(x, 'top-rated-element')
          })
        }

        if(resp["special_offers"].length > 0) {
          document.getElementById('special-offers-element').innerHTML = "";
          resp["special_offers"].forEach((x) => {
            createProductByCategoryElement(x, 'special-offers-element')
          })
        }

        if(resp["bestsellers"].length > 0) {
          document.getElementById('bestsellers-element').innerHTML = "";
          resp["bestsellers"].forEach((x) => {
            createProductByCategoryElement(x, 'bestsellers-element')
          })
        }
      }
  };
  xhttp.open("GET", `${baseUrl}get_meta_data/get_products_by_category`, true);
  xhttp.send();
}

function createProductByCategoryElement(data, id) {
  const parent = document.getElementById(id);
  let topRateElement = `<div class="item d-flex box-shadow-custom" style="margin-bottom: 1em;background-color: #ffffff;border-radius: 10px;border: 1px solid grey;">
  <img src="${data.image}" width="90" height="30" class="rounded img-fluid" alt="..." style="margin-left: 5px;">
  <div class="d-flex-column">
    <p class="fs-12 pb-0 mb-0 productCategoryHeading">${data.product_name}</p>
    <div class="d-flex justify-content-between align-items-center">
        <div class="ratings">
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star"></i>
        </div>
        <h5 class="review-count">${data.no_of_reviews} Reviews</h5>
    </div>
    <p></p>
    <p class="fs-6 pb-0 mb-0 productCategoryHeading">$${data.product_value}.00</p>
  </div>
  </div>`
  parent.innerHTML += topRateElement;
}

function getFeaturedProducts(id) {
  let element = 'all-element'
  if(id == -1) {
    element = 'all-element'
  } else if(id == 1) {
    element = 'powertools-element'
  } else if(id == 2) {
    element = 'handtools-element'
  } else if(id == 3) {
    element = 'plumbing-element'
  }
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let resp = JSON.parse(xhttp.responseText)
        if(resp.length > 0) {
          document.getElementById(element).innerHTML = "";
          resp.forEach((x) => {
            createFeaturedProductsElement(x, element)
          })
        }
      }
  };
  xhttp.open("POST", `${baseUrl}get_meta_data/featured_products?tool_type_id=${id}`, true);
  xhttp.send();
}

function createFeaturedProductsElement(data, id) {
  const parent = document.getElementById(id);
  let topRateElement = `<div class="card col m-1" style="max-width: 14.6rem;">
  <img src="${data.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="fs-9 featuredProductSerialNo">${data.serial_no}</p>
    <p class="fs-9 featuredProductHeading">${data.product_name}</p>
    <div class="d-flex justify-content-between align-items-center">
        <div class="ratings">
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star rating-color"></i>
            <i class="fa fa-star></i>
            <i class="fa fa-star"></i>
        </div>
        <h5 class="review-count">${data.no_of_reviews} Reviews</h5>
    </div>
    <p></p>
    <div class="d-flex justify-content-between align-items-center">
      <p class="fs-5 pb-0 mb-0 featuredProductHeading">$${data.product_value}</p>
      <img src="./images/svg/cart.svg" class="svgCartColor" width="20" height="20" alt="...">
    </div>
  </div>
</div>`
  parent.innerHTML += topRateElement;
}

function getProductMetadata() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let resp = JSON.parse(xhttp.responseText)
        if(resp["currency"].length > 0) {
          document.getElementById('currency-element').innerHTML = "";
          resp["currency"].forEach((x) => {
            createCurrencyDropDownElement(x, 'currency-element')
          })
        }
        if(resp["language"].length > 0) {
          document.getElementById('language-element').innerHTML = "";
          resp["language"].forEach((x) => {
            createLanguageDropDownElement(x, 'language-element')
          })
        }
      }
  };
  xhttp.open("GET", `${baseUrl}get_meta_data/`, true);
  xhttp.send();
}

function createCurrencyDropDownElement(data, id) {
  const parent = document.getElementById(id);
  let currencyElement = `
  <li><a class="dropdown-item" href="#">${data.shorten}</a></li>`
  parent.innerHTML += currencyElement;
}

function createLanguageDropDownElement(data, id) {
  const parent = document.getElementById(id);
  let languageElement = `
  <li><a class="dropdown-item" href="#">${data.shorten}</a></li>`
  parent.innerHTML += languageElement;
}
