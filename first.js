const cardsdata = [
    {
        id: 1,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img47.png",
        title:"Kid Tapered Slim Fit Trouser",
        price: 38,
        categorie: "kid",
        Type: "bottomwear"
    },
    {
        id: 2,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img8.png",
        title:"Men Round Neck Pure Cotton T-shirt",
        price: 64,
        categorie: "men",
        Type: "topwear"
    },
     {
        id: 3,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img14.png",
        title:"Boy Round Neck Pure Cotton T-shirt",
        price: 60,
        categorie: "kid",
        Type: "topwear"
    },
    {
        id: 4,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img35.png",
        title:"Women Zip-Front Relaxed Fit Jacket",
        price: 60,
        categorie: "women",
        Type: "topwear"
    },
     {
        id: 5,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img15.png",
        title:"Men Tapered Fit Flat-Front Trousers",
        price: 58,
        categorie: "men",
        Type: "bottomwear"
    },
    {
        id: 6,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img6.png",
        title:"Girls Round Neck Cotton Top",
        price: 56,
        categorie: "kid",
        Type: "topwear"
    },
    {
        id: 7,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img51.png",
        title:"Women Zip-Front Relaxed Fit Jacket",
        price: 68,
        categorie: "women",
        Type: "winterwear"
    },
    {
        id: 8,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img50.png",
        title:"Kid Tapered Slim Fit Trouser",
        price: 40,
        categorie: "women",
        Type: "bottomwear"
    },
    {
        id: 9,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img39.png",
        title:"Men Printed Plain Cotton Shirt",
        price: 52,
        categorie: "men",
        Type: "topwear"
    },
    {
        id: 10,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img36.png",
        title:"Women Zip-Front Relaxed Fit Jacket",
        price: 78,
        categorie: "women",
        Type: "winterwear"
    },
    
]
const container = document.getElementById('card-container');

  
  cardsdata.forEach(card => {
  container.innerHTML += `
    <div class=" col-lg-3 col-md-4 mt-4 mb-4">
      <div class="card boxs-card">
        <img src="${card.image}" class="card-img-top" alt="${card.title}">
        <div class="card-body">
          <p class="card-title font-change">${card.title}</p>
          <p class="card-text font-change">$${card.price}</p>
        </div>
      </div>
    </div>
  `;
});

const card2data =[
    {
        id: 1,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img51.png",
        title:"Women Zip-Front Relaxed Fit Jacket",
        price: 68,
        categorie: "women",
        Type: "winterwear"
    },
    {
        id: 2,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img46.png",
        title:"Men Slim Fit Relaxed Denim Jacket",
        price: 72,
        categorie: "men",
        Type: "winterwear"
    },
    {
        id: 3,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img52.png",
        title:"Men Slim Fit Relaxed Denim Jacket",
        price: 84,
        categorie: "men",
        Type: "winterwear"
    },
    {
        id: 4,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img44.png",
        title:"Women Zip-Front Relaxed Fit Jacket",
        price: 78,
        categorie: "women",
        Type: "winterwear"
    },
    {
        id: 5,
        image: "https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img45.png",
        title:"Men Slim Fit Relaxed Denim Jacket",
        price: 86,
        categorie: "men",
        Type: "winterwear"
    },
]

const container2 = document.getElementById('card-container-2');

    // container2.innerHTML = ""
  card2data.forEach(card => {
  container2.innerHTML += `
    <div class=" col-lg-3 col-md-4 mt-4 mb-4">
      <div class="card boxs-card">
        <img src="${card.image}" class="card-img-top" alt="${card.title}">
        <div class="card-body">
          <p class="card-title font-change">${card.title}</p>
          <p class="card-text font-change">$${card.price}</p>
        </div>
      </div>
    </div>
  `;
});
