import { TypeOfItem } from "../types/item";
import image01 from "../images/items/01.png";
import image02 from "../images/items/02.png";
import image03 from "../images/items/03.png";
import image04 from "../images/items/04.png";
import image05 from "../images/items/05.png";
import image06 from "../images/items/06.png";
import image07 from "../images/items/07.png";
import image08 from "../images/items/08.png";
import image09 from "../images/items/09.png";
import image10 from "../images/items/10.png";
import image11 from "../images/items/11.png";
import image12 from "../images/items/12.png";

const items: TypeOfItem[] = [
  {
    id: 1,
    name: "High",
    useFor: "face",
    category: "Крема",
    skin: "Сухая",
    variants: [
      { volume: 50, price: 990 },
      { volume: 30, price: 500 },
    ],
    units: "ml",
    shortDescription: "крем для лица",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image01,
  },
  {
    id: 2,
    name: "Rest",
    useFor: "face",
    category: "Пудры",
    skin: "Комбинированная",
    variants: [
      { volume: 20, price: 690 },
      { volume: 10, price: 400 },
    ],
    units: "g",
    shortDescription: "минеральная пудра",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image02,
  },
  {
    id: 3,
    name: "Rose",
    useFor: "face",
    category: "Крема",
    skin: "Сухая",
    variants: [
      { volume: 50, price: 890 },
      { volume: 30, price: 500 },
    ],
    units: "ml",
    shortDescription: "крем для лица",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image03,
  },
  {
    id: 4,
    name: "Milk",
    useFor: "body",
    category: "Масла",
    skin: "Нормальная",
    variants: [
      { volume: 150, price: 790 },
      { volume: 100, price: 500 },
    ],
    units: "ml",
    shortDescription: "масло для тела",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image04,
  },
  {
    id: 5,
    name: "Paradise",
    useFor: "face",
    category: "Пудры",
    skin: "Жирная",
    variants: [
      { volume: 15, price: 590 },
      { volume: 10, price: 400 },
    ],
    units: "g",
    shortDescription: "минеральная пудра",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image05,
  },
  {
    id: 6,
    name: "Sun",
    useFor: "body",
    category: "Бомбочки для ванны",
    skin: "Комбинированная",
    variants: [
      { volume: 20, price: 90 },
      { volume: 10, price: 50 },
    ],
    units: "g",
    shortDescription: "бомбочка для ванны",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image06,
  },
  {
    id: 7,
    name: "Violet",
    useFor: "face",
    category: "Крема",
    skin: "Нормальная",
    variants: [
      { volume: 50, price: 890 },
      { volume: 30, price: 650 },
    ],
    units: "ml",
    shortDescription: "крем для лица",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image07,
  },
  {
    id: 8,
    name: "Clean",
    useFor: "face",
    category: "Маски",
    skin: "Сухая",
    variants: [
      { volume: 100, price: 490 },
      { volume: 70, price: 350 },
    ],
    units: "g",
    shortDescription: "маска для лица",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image08,
  },
  {
    id: 9,
    name: "Coconut",
    useFor: "body",
    category: "Масла",
    skin: "Комбинированная",
    variants: [
      { volume: 300, price: 990 },
      { volume: 200, price: 750 },
    ],
    units: "ml",
    shortDescription: "масло для тела",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image09,
  },
  {
    id: 10,
    name: "Lavender",
    useFor: "body",
    category: "Мыло",
    skin: "Комбинированная",
    variants: [
      { volume: 50, price: 290 },
      { volume: 30, price: 180 },
    ],
    units: "g",
    shortDescription: "мыло ручной работы",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image10,
  },
  {
    id: 11,
    name: "Lotos",
    useFor: "face",
    category: "Маски",
    skin: "Нормальная",
    variants: [
      { volume: 50, price: 890 },
      { volume: 30, price: 680 },
    ],
    units: "ml",
    shortDescription: "маска для лица",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image11,
  },
  {
    id: 12,
    name: "Earth",
    useFor: "body",
    category: "Бомбочки для ванны",
    skin: "Нормальная",
    variants: [
      { volume: 20, price: 90 },
      { volume: 10, price: 50 },
    ],
    units: "g",
    shortDescription: "бомбочка для ванны",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image12,
  },
  {
    id: 13,
    name: "Milk",
    useFor: "body",
    category: "Масла",
    skin: "Нормальная",
    variants: [
      { volume: 150, price: 790 },
      { volume: 100, price: 500 },
    ],
    units: "ml",
    shortDescription: "масло для тела",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image04,
  },
  {
    id: 14,
    name: "Earth",
    useFor: "body",
    category: "Бомбочки для ванны",
    skin: "Нормальная",
    variants: [
      { volume: 20, price: 90 },
      { volume: 10, price: 50 },
    ],
    units: "g",
    shortDescription: "бомбочка для ванны",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image12,
  },
  {
    id: 15,
    name: "Lotos",
    useFor: "face",
    category: "Маски",
    skin: "Нормальная",
    variants: [
      { volume: 50, price: 890 },
      { volume: 130, price: 680 },
    ],
    units: "ml",
    shortDescription: "маска для лица",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image11,
  },
  {
    id: 16,
    name: "Lavender",
    useFor: "body",
    category: "Мыло",
    skin: "Комбинированная",
    variants: [
      { volume: 50, price: 290 },
      { volume: 30, price: 180 },
    ],
    units: "g",
    shortDescription: "мыло ручной работы",
    description: [
      "Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.",
      "Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток.",
    ],
    instruction: [
      "Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода. ",
    ],
    composition:
      "Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.",
    image: image10,
  },
];

export default items;
