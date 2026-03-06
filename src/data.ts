export const CLINIC_INFO = {
  name: "The GLO Alchemist",
  subtitle: "Skin and Laser Lab",
  address: "709 W Littleton Blvd Suite #105",
  cityStateZip: "Littleton, CO 80120",
  phone: "(303) 506-3582",
  hours: "Tues-Sat 10AM - 5PM",
  bookingUrl: "https://thegloalchemist.myaestheticrecord.com/online-booking",
};

export const NEIGHBORHOODS = [
  { id: "littleton", name: "Littleton", isMain: true },
  { id: "englewood", name: "Englewood" },
  { id: "denver", name: "Denver" },
  { id: "highlands-ranch", name: "Highlands Ranch" },
  { id: "ken-caryl", name: "Ken-Caryl" },
  { id: "columbine", name: "Columbine" },
  { id: "chatfield", name: "Chatfield" },
  { id: "roxborough", name: "Roxborough" },
];

export const SERVICES = [
  {
    category: "Facial Treatments",
    id: "facial-treatments",
    items: [
      { id: "dermaplaning", name: "Dermaplaning" },
      { id: "chemical-peels", name: "Chemical Peels" },
      { id: "microneedling", name: "Microneedling" },
    ],
  },
  {
    category: "Facials",
    id: "facials",
    items: [
      { id: "hydrating-facial", name: "Hydrating Facial" },
      { id: "detoxifying-facial", name: "Detoxifying Facial" },
      { id: "vitality-facial", name: "Vitality Facial" },
    ],
  },
  {
    category: "Laser Treatments",
    id: "laser-treatments",
    items: [
      { id: "radio-fractional-microneedling", name: "Radio Fractional Microneedling" },
      { id: "laser-hair-reduction", name: "Laser Hair Reduction (LHR)" },
      { id: "laser-skin-resurfacing", name: "Laser Skin Resurfacing" },
      { id: "q-switch-tattoo-removal", name: "Q-Switch Tattoo Removal" },
      { id: "ipl", name: "IPL (Intense Pulsed Light)" },
      { id: "long-pulsed-yag", name: "Long Pulsed Yag" },
    ],
  },
];

export const getAllServiceItems = () => {
  return SERVICES.flatMap((category) => category.items);
};
