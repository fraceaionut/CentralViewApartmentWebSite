const config = {
  bookingUrl: "https://www.booking.com/hotel/ro/central-view-apartment.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaMABiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuALfjv3PBsACAdICJDNhM2U0YjUwLTQ0YzEtNGQ1ZC05NWJlLTYzMGExOGU0ZTBjMNgCAeACAQ&sid=f95f9752d63d7f2194b65cf2af692e6d&dest_id=4401329&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1778337648&srpvid=72b46735935700c2&type=total&ucfs=1&",
  whatsappUrl: "https://wa.me/40749049389?text=Bun%C4%83%2C%20a%C8%99%20dori%20s%C4%83%20verific%20disponibilitatea%20pentru%20Central%20View%20Apartment."
};

function setLink(id, url) {
  const element = document.getElementById(id);
  if (element) {
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
  }
}

setLink("whatsappHero", config.whatsappUrl);
setLink("whatsappBottom", config.whatsappUrl);
setLink("bookingHero", config.bookingUrl);
setLink("bookingGallery", config.bookingUrl);
setLink("bookingBottom", config.bookingUrl);
