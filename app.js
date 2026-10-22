/* YIJIAYOU exhibition site — product data + interactions */
var WA_NUMBER = "8613752997293";

/* Images are catalog spreads; q = quadrant shown on the card: tl/tr/bl/br */
var PRODUCTS = [
  {cat:"garbage", img:"image3.jpeg",  q:"bl", tag:"Garbage Bags",
   name:"Heavy-Duty Black Garbage Bags",
   desc:"Contractor & property-grade large bags. Tough, puncture-resistant, heat-sealed bottom.",
   specs:["80 × 100 cm","Virgin or 50% recycled","0.04–0.08 mm","Flat / vest / drawstring"]},
  {cat:"garbage", img:"image4.jpeg",  q:"tr", tag:"Garbage Bags",
   name:"Small White Bin Liners",
   desc:"Guest-room bin liners in virgin PE. Clean, leak-proof and scald-resistant.",
   specs:["41×41 / 45×45 / 45×50 cm","0.012–0.018 mm","Virgin PE"]},
  {cat:"garbage", img:"image5.jpeg",  q:"tr", tag:"Garbage Bags",
   name:"Colored Garbage Bags",
   desc:"Bright multi-color bags for waste sorting and retail. High stretch, strong bearing.",
   specs:["Multi-color","Tear-resistant","Custom colors"]},
  {cat:"garbage", img:"image6.jpeg",  q:"bl", tag:"Garbage Bags",
   name:"Garbage Bags on Roll",
   desc:"Coreless flat-top rolls with easy tear-off — popular for retail and housekeeping carts.",
   specs:["Coreless rolls","Flat-top","Multi-color"]},
  {cat:"garbage", img:"image7.jpeg",  q:"tl", tag:"Garbage Bags",
   name:"Drawstring Garbage Bags",
   desc:"One-pull closure on a break-point roll. Thickened body carries heavy loads.",
   specs:["Drawstring","Heavy load","Printed options"]},
  {cat:"garbage", img:"image8.jpeg",  q:"br", tag:"Garbage Bags",
   name:"Medical Waste Bags",
   desc:"Yellow biohazard bags for clinics and hospitals — flat, vest and drawstring types.",
   specs:["Biohazard print","Full size range","Flat / vest / rope"]},
  {cat:"garbage", img:"image15.jpeg", q:"tl", tag:"Packaging Bags",
   name:"T-Shirt & Takeout Bags",
   desc:"Carrier and takeout bags for supermarkets, restaurants and retail — private print available.",
   specs:["Vest style","Custom printing","High-transparency option"]},
  {cat:"garbage", img:"image16.jpeg", q:"bl", tag:"Eco Series",
   name:"100% Biodegradable Bags",
   desc:"PBAT + PLA + corn-starch compostable bags. Certified; breaks down in about 180 days.",
   specs:["PBAT + PLA","Compost certified","Vest / garbage / flat"]},

  {cat:"bags", img:"image9.jpeg",  q:"tl", tag:"Hotel Bags",
   name:"Soft-Loop Handle Bags",
   desc:"Elegant soft-loop carrier bags with hotel branding — a guest-facing classic.",
   specs:["LDPE / HDPE","Logo printing","Custom size"]},
  {cat:"bags", img:"image11.jpeg", q:"tr", tag:"Hotel Bags",
   name:"Plastic Laundry Bags",
   desc:"Drawstring or self-seal laundry bags, standard for chain-hotel guest rooms.",
   specs:["40 × 52 cm standard","Drawstring / PE seal","Custom print"]},
  {cat:"bags", img:"image13.jpeg", q:"tr", tag:"Hotel Bags",
   name:"Die-Cut Handle Bags",
   desc:"Milky-white LDPE die-cut bags, double-side 0.08 mm — supplied to major hotel groups.",
   specs:["40 × 45 cm","0.08 mm double-side","Logo printing"]},
  {cat:"bags", img:"image17.jpeg", q:"tr", tag:"Non-Woven Bags",
   name:"Non-Woven Gift Bags",
   desc:"Reusable 70–80 gsm non-woven totes, hand-sewn or one-piece molded.",
   specs:["70–80 gsm","Hand-sewn / molded","Custom size & color"]},
  {cat:"bags", img:"image19.jpeg", q:"tl", tag:"Non-Woven Bags",
   name:"Non-Woven Laundry Bags",
   desc:"Soft, breathable drawstring laundry bags — gentle on garments, fully brandable.",
   specs:["Drawstring","Custom logo","Hotel standard sizes"]},
  {cat:"bags", img:"image21.jpeg", q:"tl", tag:"Non-Woven Bags",
   name:"Non-Woven Die-Cut Bags",
   desc:"Heat-pressed non-woven bags with die-cut handles — budget-friendly for promotions.",
   specs:["Heat-pressed","Die-cut handle","Full-color print"]},
  {cat:"bags", img:"image22.jpeg", q:"tr", tag:"Non-Woven Bags",
   name:"Laminated Non-Woven Bags",
   desc:"Glossy or matte lamination for vivid full-color artwork — retail and takeaway ready.",
   specs:["Laminated","Full-color printing","Takeout grade"]},
  {cat:"bags", img:"image23.jpeg", q:"bl", tag:"Paper Bags",
   name:"Kraft Paper Bags",
   desc:"Recyclable kraft shoppers with twisted handles — natural look, sturdy build.",
   specs:["Recyclable kraft","Twisted handle","Custom print"]},
  {cat:"bags", img:"image24.jpeg", q:"tr", tag:"Paper Bags",
   name:"White Card Paper Bags",
   desc:"Premium white-card shopping bags for boutiques and luxury retail.",
   specs:["White card","Matte / glossy finish","Rope handle"]},

  {cat:"amenities", img:"image25.jpeg", q:"tl", tag:"Hotel Disposables",
   name:"Disposable Bathtub Liners",
   desc:"Food-grade HDPE liners, heat-resistant to 130 °C. Fits most tubs, individually folded.",
   specs:["260 × 120 cm","Food-grade HDPE","Individually packed"]},
  {cat:"amenities", img:"image26.jpeg", q:"tl", tag:"Hotel Disposables",
   name:"Foot Bath Liners",
   desc:"Tough, transparent liners for foot-soak tubs — no leaks, no tearing with hot water.",
   specs:["Fits 50–90 cm tubs","Heat-safe","Strong seal"]},
  {cat:"amenities", img:"image27.jpeg", q:"tr", tag:"Hotel Disposables",
   name:"Garment Covers",
   desc:"Suit & garment bags in plastic or non-woven — keep guest clothing dust-free.",
   specs:["Plastic / non-woven","Hanger opening","Logo print"]},
  {cat:"amenities", img:"image28.jpeg", q:"tl", tag:"Hotel Disposables",
   name:"Sanitary Bags",
   desc:"Discreet ladies' hygiene bags for guest bathrooms — paper or plastic styles.",
   specs:["Compact size","Printed designs","Paper / plastic"]},
  {cat:"amenities", img:"image28.jpeg", q:"br", tag:"Hotel Disposables",
   name:"Cup & Glass Covers",
   desc:"Hygienic covers for bathroom glassware, in plastic or waxed paper.",
   specs:["Plastic / waxed paper","Standard sizes","Custom print"]},
  {cat:"amenities", img:"image29.jpeg", q:"tl", tag:"Hotel Disposables",
   name:"Toilet Seat Covers",
   desc:"Disposable seat covers for a hygienic guest experience — waterproof options available.",
   specs:["Disposable","Waterproof option","Individually packed"]},
  {cat:"amenities", img:"image29.jpeg", q:"tr", tag:"Hotel Disposables",
   name:"Sanitized Seal Strips",
   desc:"“Sanitized for your protection” seals for toilet lids, doors, slippers and remotes.",
   specs:["157 g coated paper","Custom size & shape","Free templates"]},
  {cat:"amenities", img:"image30.jpeg", q:"bl", tag:"Hotel Disposables",
   name:"Sterilization Bags",
   desc:"“Disinfected” packaging for slippers, towels and bathrobes — builds guest trust.",
   specs:["Multiple sizes","Custom print","Corn-starch option"]},
  {cat:"amenities", img:"image31.jpeg", q:"bl", tag:"Hotel Disposables",
   name:"Shower Caps",
   desc:"Elastic PE caps in clear or colors — plus a 100% biodegradable PBAT+PLA version.",
   specs:["PE or biodegradable","Strip / bowl style","Individually packed"]},
  {cat:"amenities", img:"image34.jpeg", q:"tl", tag:"Hotel Amenities",
   name:"Hotel Soap",
   desc:"Essential-oil guest soaps from 15 g — round, square and novelty shapes, private label.",
   specs:["15 g and up","Private label","Kraft / film wrap"]}
];

var QPOS = {tl:"0% 0%", tr:"100% 0%", bl:"0% 100%", br:"100% 100%"};
var grid = document.getElementById("grid");

PRODUCTS.forEach(function(p){
  var waText = "Hello Yijiayou! I'm interested in your " + p.name + ". Could you share details and a quotation?";
  var card = document.createElement("article");
  card.className = "card reveal";
  card.dataset.cat = p.cat;
  card.innerHTML =
    '<div class="card-img-wrap"><div class="card-img" style="background-image:url(\'' + p.img + '\');background-position:' + QPOS[p.q] + '" role="img" aria-label="' + p.name + '"></div></div>' +
    '<div class="card-body">' +
      '<span class="card-tag">' + p.tag + '</span>' +
      '<h3>' + p.name + '</h3>' +
      '<p>' + p.desc + '</p>' +
      '<ul class="specs">' + p.specs.map(function(s){return '<li>' + s + '</li>'}).join('') + '</ul>' +
      '<a class="inquire wa-msg" href="#" target="_blank" rel="noopener" data-msg="' + waText.replace(/"/g,'&quot;') + '">' +
        'Inquire on WhatsApp' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>' +
      '</a>' +
    '</div>';
  grid.appendChild(card);
});

/* Wire all WhatsApp links */
document.querySelectorAll(".wa-link, .wa-msg").forEach(function(a){
  var msg = a.dataset.msg || "Hello Yijiayou!";
  a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
});

/* Filters */
document.querySelectorAll(".filter").forEach(function(btn){
  btn.addEventListener("click", function(){
    document.querySelectorAll(".filter").forEach(function(b){b.classList.remove("active")});
    btn.classList.add("active");
    var f = btn.dataset.f;
    document.querySelectorAll(".card").forEach(function(c){
      c.classList.toggle("hide", f !== "all" && c.dataset.cat !== f);
    });
  });
});

/* Partner marquee */
var PARTNERS = ["Atour","Hilton","Mercure","Sofitel","Wyndham","Courtyard by Marriott","Days Hotel","Ibis","GreenTree Inn","Vienna Hotels","Lavande","Home Inn Plus","Hanting","JI Hotel","Manju","Borrman","ECHARM","City Comfort Inn","Thank Inn","Metropolo","Landison Plaza","Wanda Vista"];
var track = document.getElementById("marquee");
track.innerHTML = PARTNERS.concat(PARTNERS).map(function(n){return '<span class="pill">' + n + '</span>'}).join("");

/* Reveal on scroll */
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(function(el){ io.observe(el); });
} else {
  document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("in"); });
}
