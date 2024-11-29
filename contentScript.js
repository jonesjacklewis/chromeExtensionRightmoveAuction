
function filterGuidePriceListings() {

  const listings = document.querySelectorAll(".propertyCard");
  const resultCountDiv = document.querySelector(".searchHeader-resultCount");

  let resultCount = resultCountDiv.innerText.match(/\d+/);
  resultCount = resultCount ? parseInt(resultCount[0]) : 0;

  listings.forEach((listing) => {
    const priceText = listing.textContent || listing.innerText;


    if (priceText.includes("Guide Price")) {
      // listing.style.display = "none";
      listing.remove();
      
      if (resultCount) {
        resultCount--;
        resultCountDiv.innerText = `${resultCount}`;
      }
    }
  });
}


filterGuidePriceListings();


const observer = new MutationObserver(filterGuidePriceListings);
observer.observe(document.body, { childList: true, subtree: true });