import { Dispatch, SetStateAction } from "react";
import { TypeOfItem } from "./item";

export type TypeOfFilter = {
  id: number;
  title: string;
  useFor: TypeOfItem["useFor"] | "skin";
  keys: Array<TypeOfItem["category"] | TypeOfItem["skin"]>;
};

export type TypeOfSettingsFilter = {
  face: TypeOfItem["category"][];
  body: TypeOfItem["category"][];
  skin: TypeOfItem["skin"][];
  useFor?: TypeOfItem["useFor"];
};

export type TypeOfSeacrhContext = {
  searchData: TypeOfSettingsFilter;
  setSearchData: Dispatch<SetStateAction<TypeOfSettingsFilter>>;
  currentItems: TypeOfItem[];
  setCurrentItems: Dispatch<SetStateAction<TypeOfItem[]>>;
};
