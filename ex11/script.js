document.getElementById("recherche").addEventListener("input", () => {
  let textRecher = document.getElementById("recherche").value.toLowerCase();
  let produits = document.querySelectorAll(".produit ul li");

  produits.forEach((elm) => {
    let nomProduit = elm.innerText.toLowerCase();
    if (nomProduit.includes(textRecher)) {
      elm.style.display = "block";
    } else {
      elm.style.display = "none";
    }
  });
});
