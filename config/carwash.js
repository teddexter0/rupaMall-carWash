/**
 * CAR WASH CONFIG — Single source of truth
 * Change this file to white-label for a new client.
 */

export const carwashConfig = {
  name: "Rupa's Mall Car Wash",
  tagline: "Shine Every Time",
  phone: "+254 712 345 678",
  whatsapp: "+254712345678",
  email: "info@rupamallcarwash.co.ke",
  address: "Rupa Mall, Eldoret",
  mapsLink: "https://maps.google.com/?q=Rupa+Mall+Eldoret",
  googleAnalyticsId: "",
  hours: {
    weekdays: "7:00 AM – 7:00 PM",
    saturday: "7:00 AM – 6:00 PM",
    sunday: "8:00 AM – 5:00 PM",
  },
  services: [
    {
      name: "Basic Wash",
      price: "KES 500",
      duration: "30 min",
      features: [
        "Exterior wash",
        "Interior vacuum",
        "Dashboard wipe",
        "Window cleaning",
      ],
      icon: "🚗",
    },
    {
      name: "Premium Wash",
      price: "KES 800",
      duration: "45 min",
      features: [
        "Everything in Basic",
        "Wheel cleaning",
        "Tire shine",
        "Interior detailing",
        "Air freshener",
      ],
      icon: "💦",
      popular: true,
    },
    {
      name: "Deluxe Package",
      price: "KES 1,200",
      duration: "60 min",
      features: [
        "Everything in Premium",
        "Wax protection",
        "Engine bay cleaning",
        "Leather conditioning",
        "30-day shine guarantee",
      ],
      icon: "✨",
    },
  ],
  colors: {
    primary: "#1e3a5f",
    accent: "#3b9fd8",
    bg: "#f0f7ff",
    text: "#1A1A1A",
  },
  // Manual season override
  // Options: "default" | "valentine" | "christmas" | "easter"
  season: "default",
};
