import { createContext } from "react";

export interface ContextInterface {
  count: number;
  dispatch: React.Dispatch<any>;
}

const AppContext = createContext<ContextInterface | undefined>(undefined);

export default AppContext;
