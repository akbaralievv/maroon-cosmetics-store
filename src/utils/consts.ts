import { TypeOfFilter, TypeOfSettingsFilter } from "../types/filter";

export enum AppRoute {
  Main = "/",
  Catalog = "/catalog",
  ItemRoutes = "/item/:id",
  ItemRoute = "/item",
  About = "/#about",
  AboutThisPage = "#about",
  FillForm = "/fill-form",
  Subscribe = "/subscribe",
  Contacts = "/#contacts",
  ContactsThisPage = "#contacts",
  Cart = "/cart",
  Profile = "/profile",
  AdminLogin = "/admin/login",
  AdminProducts = "/admin/products",
}

export enum SearchFaceOrBody {
  face = "Уход для лица",
  body = "Уход для тела",
}

export const FilterSettings: TypeOfFilter[] = [
  {
    id: 1,
    title: SearchFaceOrBody.face,
    useFor: "face",
    keys: ["Крема", "Сыворотки", "Маски", "Пенки", "Тоники", "Пудры"],
  },
  {
    id: 2,
    title: SearchFaceOrBody.body,
    useFor: "body",
    keys: [
      "Крема",
      "Масла",
      "Скрабы",
      "Мыло",
      "Бомбочки для ванны",
      "Соль для ванны",
    ],
  },
  {
    id: 3,
    title: "Тип кожи",
    useFor: "skin",
    keys: ["Нормальная", "Сухая", "Жирная", "Комбинированная"],
  },
];

export const FilterDefaultData: TypeOfSettingsFilter = {
  body: [],
  face: [],
  skin: [],
  useFor: undefined,
};
