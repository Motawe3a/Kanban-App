import { Column } from "./column.modal";

export class Board {
  constructor(public name: String, public columns: Column[]) { }
}
