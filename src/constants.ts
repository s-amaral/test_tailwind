import { FilterValue, Row } from "react-table";

export interface Participants {
  addr: string;
  snap: string;
  wager: string;
  estimate: string;
  tid: string;
  return: string;
  row: never;
  rowIndex: number;
}

export interface Stats {
  snap: string;
  goptin: number;
  gprize: number;
  row: never;
  rowIndex: number;
}

export interface Column {
  filterValue: FilterValue;
  preFilteredRows: Row[];
  setFilter: (filter: string[] | string) => void | ((old?: string[]) => (string | number)[]);
  id: number | string;
}

export type Blockchain = "ALGORAND";

export type SortOptionValue =
  | "oldest-contracts"
  | "newest-contracts"
  | "prize-descending"
  | "prize-ascending"
  | "bids-descending"
  | "bids-ascending";
export type SortOptionName = "Ending Soon" | "Newest" | "Prize" | "Participants";

export type AuthType = "auth0" | "web3";
