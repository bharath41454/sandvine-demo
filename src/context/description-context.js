import { createContext } from "react";

export const DescriptionContext = createContext({
  data: null,
  title: null,
  description: null,
  setContent: () => {},
});
