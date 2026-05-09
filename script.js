const config = {
  bookingUrl: "https://www.booking.com/hotel/ro/central-view-apartment.html",
  whatsappUrl: "https://wa.me/40700000000?text=Bun%C4%83%2C%20a%C8%99%20dori%20s%C4%83%20verific%20disponibilitatea%20pentru%20Central%20View%20Apartment."
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
