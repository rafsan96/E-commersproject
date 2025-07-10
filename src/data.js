// src/data/data.js (or your relevant path)

import Laptop1 from "./data_content/Laptop1.webp";
import Laptop2 from "./data_content/Laptop2.webp";
import Laptop3 from "./data_content/Laptop3.webp";
import Laptop4 from "./data_content/Laptop4.webp";
import Laptop5 from "./data_content/Laptop5.webp";
import Laptop6 from "./data_content/Laptop6.webp";

import Mobile1 from "./data_content/Mobile1.webp";
import Mobile2 from "./data_content/Mobile2.webp";
import Mobile3 from "./data_content/Mobile3.webp";
import Mobile4 from "./data_content/mobile4.webp";
import Mobile5 from "./data_content/mobile5.webp";
import Mobile6 from "./data_content/mobile6.webp";

import Keyboard1 from "./data_content/Keyboard1.webp";
import Keyboard2 from "./data_content/Keyboard2.webp";
import Keyboard3 from "./data_content/Keyboard3.webp";
import Keyboard4 from "./data_content/keyboard.4webp.webp";
import Keyboard5 from "./data_content/keyboard5.webp";
import Keyboard6 from "./data_content/keyboard6.webp";

import Mouse1 from "./data_content/Mouse1.webp";
import Mouse2 from "./data_content/Mouse2.webp";
import Mouse3 from "./data_content/Mouse3.webp";
import Mouse4 from "./data_content/mouse4.webp";
import Mouse5 from "./data_content/mouse5webp.webp";
import Mouse6 from "./data_content/mouse6.webp";

const data = [
  // ---------- Laptops ----------
  {
    id: "1",
    name: "HP Pavilion 15",
    price: 75000,
    image: Laptop1,
    company: "HP",
    description:
      "The HP Pavilion 15 offers a sleek design, 11th Gen Intel Core i5 processor, 8GB RAM, and a 512GB SSD. Ideal for multitasking, casual gaming, and media editing with a 15.6-inch Full HD display and long battery life.",
    category: "laptop",
    shipping: true,
    amount: 1,
    stock: 4,
  },
  {
    id: "2",
    name: "HP Envy x360",
    price: 98000,
    image: Laptop2,
    company: "HP",
    description:
      "The HP Envy x360 is a 2-in-1 convertible laptop featuring a Ryzen 5 processor, 16GB RAM, 512GB SSD, and a vibrant touchscreen. Perfect for creative professionals and students needing flexibility and power.",
    category: "laptop",
    shipping: true,
    amount: 1,
    stock: 6,
  },
  {
    id: "3",
    name: "HP Spectre x360",
    price: 125000,
    image: Laptop3,
    company: "HP",
    description:
      "The Spectre x360 is a premium ultrabook with an Intel i7 processor, 16GB RAM, 1TB SSD, and a 4K AMOLED touchscreen. It offers excellent performance, pen support, and a durable all-metal body.",
    category: "laptop",
    shipping: true,
    amount: 1,
    stock: 4,
  },
  {
    id: "13",
    name: "Dell Inspiron 14",
    price: 78000,
    image: Laptop4,
    company: "Dell",
    description:
      "Dell Inspiron 14 is a versatile laptop with Intel Core i5 12th Gen processor, 8GB RAM, and 512GB SSD. Lightweight, efficient, and ideal for students and professionals.",
    category: "laptop",
    shipping: true,
    amount: 1,
    stock: 5,
  },
  {
    id: "14",
    name: "Asus Vivobook S15",
    price: 88000,
    image: Laptop5,
    company: "Asus",
    description:
      "The Asus Vivobook S15 comes with a vibrant OLED display, 16GB RAM, Intel i5 processor, and a sleek design for immersive content creation and daily productivity.",
    category: "laptop",
    shipping: true,
    amount: 1,
    stock: 3,
  },
  {
    id: "15",
    name: "Lenovo IdeaPad Slim 5",
    price: 72000,
    image: Laptop6,
    company: "Lenovo",
    description:
      "Lenovo IdeaPad Slim 5 offers Ryzen 7 processor, 16GB RAM, and 512GB SSD. Known for solid build quality and long battery life with a 14-inch FHD screen.",
    category: "laptop",
    shipping: true,
    amount: 1,
    stock: 4,
  },

  // ---------- Mice ----------
  {
    id: "4",
    name: "Logitech M330 Silent Plus",
    price: 70,
    image: Mouse1,
    company: "Logitech",
    description:
      "The Logitech M330 Silent Plus is a wireless mouse offering ultra-quiet clicks, ergonomic shape, 2.4GHz wireless connectivity, and long battery life. Ideal for office work and quiet environments.",
    category: "mouse",
    shipping: true,
    amount: 1,
    stock: 4,
  },
  {
    id: "5",
    name: "Razer DeathAdder Essential",
    price: 80,
    image: Mouse2,
    company: "Razer",
    description:
      "The Razer DeathAdder Essential is a gaming mouse with a 6400 DPI optical sensor, durable mechanical switches, and a comfortable grip. Designed for accuracy and long gaming sessions.",
    category: "mouse",
    shipping: true,
    amount: 1,
    stock: 4,
  },
  {
    id: "6",
    name: "Dell MS116 Optical Mouse",
    price: 20,
    image: Mouse3,
    company: "Dell",
    description:
      "The Dell MS116 is a wired optical mouse that delivers reliable performance with 1000 DPI sensitivity. Suitable for everyday office and home use with plug-and-play USB connection.",
    category: "mouse",
    shipping: true,
    amount: 1,
    stock: 4,
  },
  {
    id: "22",
    name: "HP X1000 Wired Mouse",
    price: 18,
    image: Mouse4,
    company: "HP",
    description:
      "HP X1000 is a compact and stylish wired mouse with 3 buttons, optical sensor, and USB plug-and-play. Perfect for everyday computing.",
    category: "mouse",
    shipping: true,
    amount: 1,
    stock: 4,
  },
  {
    id: "23",
    name: "Fantech UX1 Hero Gaming Mouse",
    price: 85,
    image: Mouse5,
    company: "Fantech",
    description:
      "Fantech UX1 is a high-performance gaming mouse with customizable RGB, up to 10,000 DPI, and ergonomic grip for marathon sessions.",
    category: "mouse",
    shipping: true,
    amount: 1,
    stock: 3,
  },
  {
    id: "24",
    name: "A4Tech N-70FX Wired Mouse",
    price: 22,
    image: Mouse6,
    company: "A4Tech",
    description:
      "A4Tech N-70FX features an ergonomic design, optical sensor, and programmable buttons. Reliable and affordable choice for work and gaming.",
    category: "mouse",
    shipping: true,
    amount: 1,
    stock: 5,
  },

  // ---------- Keyboards ----------
  {
    id: "7",
    name: "Logitech K380 Bluetooth Keyboard",
    price: 40,
    image: Keyboard1,
    company: "Logitech",
    description:
      "Logitech K380 is a compact multi-device Bluetooth keyboard compatible with Windows, macOS, Android, and iOS. Offers comfortable typing, long battery life, and sleek portability.",
    category: "keyboard",
    shipping: true,
    amount: 1,
    stock: 2,
  },
  {
    id: "8",
    name: "Redragon K552 Kumara RGB",
    price: 90,
    image: Keyboard2,
    company: "Redragon",
    description:
      "The Redragon K552 mechanical keyboard features red switches, RGB lighting, and a durable metal base. Built for gamers who prefer tactile response and fast key presses.",
    category: "keyboard",
    shipping: true,
    amount: 1,
    stock: 3,
  },
  {
    id: "9",
    name: "HP KM300F Combo Keyboard",
    price: 100,
    image: Keyboard3,
    company: "HP",
    description:
      "The HP KM300F is a full-size membrane keyboard with dedicated media keys, soft-touch keystrokes, and an included optical mouse. A budget combo for everyday productivity.",
    category: "keyboard",
    shipping: true,
    amount: 1,
    stock: 4,
  },
  {
    id: "19",
    name: "A4Tech KR-85",
    price: 25,
    image: Keyboard4,
    company: "A4Tech",
    description:
      "A4Tech KR-85 is a durable, spill-resistant wired keyboard with smooth key feedback and a full-size layout. Ideal for office and home use.",
    category: "keyboard",
    shipping: true,
    amount: 1,
    stock: 5,
  },
  {
    id: "20",
    name: "Fantech MK884 Optilux RGB",
    price: 85,
    image: Keyboard5,
    company: "Fantech",
    description:
      "Fantech MK884 is a mechanical RGB keyboard featuring blue switches and customizable lighting. Built for gaming with anti-ghosting keys.",
    category: "keyboard",
    shipping: true,
    amount: 1,
    stock: 2,
  },
  {
    id: "21",
    name: "Logitech MK270 Wireless Combo",
    price: 60,
    image: Keyboard6,
    company: "Logitech",
    description:
      "The MK270 combo includes a full-size wireless keyboard and mouse with long battery life and reliable 2.4GHz connection. Great for clutter-free setups.",
    category: "keyboard",
    shipping: true,
    amount: 1,
    stock: 4,
  },

  // ---------- Mobiles ----------
  {
    id: "10",
    name: "Samsung Galaxy A13",
    price: 20000,
    image: Mobile1,
    company: "Samsung",
    description:
      "Samsung Galaxy A13 features a 6.6-inch FHD+ display, 50MP quad camera, 5000mAh battery, and Exynos processor. Great for daily use with smooth performance and One UI experience.",
    category: "mobile",
    shipping: true,
    amount: 1,
    stock: 5,
  },
  {
    id: "11",
    name: "Redmi Note 11",
    price: 22000,
    image: Mobile2,
    company: "Xiaomi",
    description:
      "Redmi Note 11 offers a 6.43-inch AMOLED display, Snapdragon 680, 50MP AI quad-camera, 5000mAh battery with 33W fast charging. A balanced budget smartphone for all-round use.",
    category: "mobile",
    shipping: true,
    amount: 1,
    stock: 5,
  },
  {
    id: "12",
    name: "Realme Narzo 50A",
    price: 18000,
    image: Mobile3,
    company: "Realme",
    description:
      "Realme Narzo 50A packs a 6.5-inch display, MediaTek Helio G85, 50MP main camera, and massive 6000mAh battery. Tailored for gaming and multimedia on a budget.",
    category: "mobile",
    shipping: true,
    amount: 1,
    stock: 5,
  },
  {
    id: "16",
    name: "Infinix Zero 20",
    price: 21000,
    image: Mobile4,
    company: "Infinix",
    description:
      "Infinix Zero 20 features a 6.7-inch AMOLED display, 60MP selfie camera, 4500mAh battery, and Helio G99 chipset. Designed for stylish photography and performance.",
    category: "mobile",
    shipping: true,
    amount: 1,
    stock: 4,
  },
  {
    id: "17",
    name: "Tecno Camon 20 Pro",
    price: 19500,
    image: Mobile5,
    company: "Tecno",
    description:
      "Tecno Camon 20 Pro has a 64MP RGBW sensor, 6.67-inch AMOLED display, and Helio G99 processor, offering sleek design and capable photography features.",
    category: "mobile",
    shipping: true,
    amount: 1,
    stock: 3,
  },
  {
    id: "18",
    name: "Nokia G21",
    price: 17500,
    image: Mobile6,
    company: "Nokia",
    description:
      "Nokia G21 comes with 6.5-inch HD+ display, Unisoc processor, triple camera system, and 5050mAh battery. Focused on reliability and battery longevity.",
    category: "mobile",
    shipping: true,
    amount: 1,
    stock: 4,
  },
];

export default data;
