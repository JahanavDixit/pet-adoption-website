import cat11 from "./assets/images/category-1.jpg";
import cat12 from "./assets/images/category-2.jpg";
import cat13 from "./assets/images/category-3.jpg";
import cat14 from "./assets/images/category-4.jpg";
import cat15 from "./assets/images/category-5.jpg";

/////////////////////////////////////////////////////

import cat21 from "./assets/images/offer-banner-1.jpg";
import cat22 from "./assets/images/offer-banner-2.jpg";
import cat23 from "./assets/images/offer-banner-3.jpg";

////////////////////////////////////////////////////

import prod1 from "./assets/images/product-1.jpg";
import prod1b from "./assets/images/product-1b.jpg";

import prod2 from "./assets/images/product-2.jpg";
import prod2b from "./assets/images/product-2b.jpg";

import prod3 from "./assets/images/product-3.jpg";
import prod3b from "./assets/images/product-3b.jpg";

import prod4 from "./assets/images/product-4.jpg";
import prod4b from "./assets/images/product-4b.jpg";

import prod5 from "./assets/images/product-5.jpg";
import prod5b from "./assets/images/product-5b.jpg";

import prod6 from "./assets/images/product-6.jpg";
import prod6b from "./assets/images/product-6b.jpg";

import prod7 from "./assets/images/product-7.jpg";
import prod7b from "./assets/images/product-7b.jpg";

import prod8 from "./assets/images/product-8.jpg";
import prod8b from "./assets/images/product-8b.jpg";

//////////////////////////////////////////////////////////

import serv1 from "./assets/images/service-icon-1.png";
import serv2 from "./assets/images/service-icon-2.png";
import serv3 from "./assets/images/service-icon-3.png";
import serv4 from "./assets/images/service-icon-4.png";

export const category1 = [
  {
    pic: cat11,
    title: "Cat Food",
  },
  {
    pic: cat12,
    title: "Cat Toys",
  },
  {
    pic: cat13,
    title: "Dog Food",
  },
  {
    pic: cat14,
    title: "Dog Toys",
  },
  {
    pic: cat15,
    title: "Dog Supplements",
  },
];

export const category2 = [
  {
    pic: cat21,
    subtitle: "Detecting Stray Dogs",
    title: "CV System",
    titleSpan: "Machine Learning",
  },

  {
    pic: cat22,
    subtitle: "Adopt a Pet",
    title: "Find",
    titleSpan: "Adopters",
  },

  {
    pic: cat23,
    subtitle: "Volunteer Management",
    title: "Locate",
    titleSpan: "Centers",
  },
];

export const bestSeller = [
  {
    frontPic: prod1,
    backPic: prod1b,
    stars: 5,
    title: "Commodo leo sed porta",
    price: 15,
  },

  {
    frontPic: prod2,
    backPic: prod2b,
    stars: 0,
    title: "Purus consequat congue sit",
    price: 45,
  },

  {
    frontPic: prod3,
    backPic: prod3b,
    stars: 3,
    title: "Morbi vel arcu scelerisque",
    price: 40,
  },

  {
    frontPic: prod4,
    backPic: prod4b,
    stars: 5,
    title: "Morbi vel arcu scelerisque",
    price: 35,
  },

  {
    frontPic: prod5,
    backPic: prod5b,
    stars: 4,
    title: "Morbi vel arcu scelerisque",
    price: 25,
  },

  {
    frontPic: prod6,
    backPic: prod6b,
    stars: 2,
    title: "Nam justo libero porta ege",
    price: 50,
  },

  {
    frontPic: prod7,
    backPic: prod7b,
    stars: 3,
    title: "Nam justo libero porta ege",
    price: 35,
  },

  {
    frontPic: prod8,
    backPic: prod8b,
    stars: 5,
    title: "Etiam commodo leo sed",
    price: 45,
  },
];

export const serviceData = [
  {
    pic: serv1,
    title: "Efficient Animal Welfare",
    desc: "Automated stray dog detection ensures quick responses, promoting animal welfare and enhancing public safety in urban areas.",
  },

  {
    pic: serv2,
    title: "Safer Public Spaces",
    desc: "Swift stray dog detection enhances public safety, reduces incidents, and fosters community engagement through awareness initiatives and collaboration with local welfare organizations.",
  },

  {
    pic: serv3,
    title: "Enhanced Adoption Processes",
    desc: "By integrating stray dog detection with pet adoption platforms, potential adopters can receive more detailed profiles and histories of rescued animals, fostering informed and responsible adoption decisions.",
  },

  {
    pic: serv4,
    title: "Increased Adoption Rates",
    desc: "The efficient identification and monitoring of stray dogs through computer vision contribute to timely rescue operations, ultimately increasing the chances of successful adoptions and providing more animals with loving homes.",
  },
];
