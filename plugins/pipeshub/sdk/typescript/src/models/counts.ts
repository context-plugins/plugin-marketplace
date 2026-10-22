import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

/** Present when `include=counts`; otherwise `null`. */
export type Counts = {
  items: Item[];
  total: number;
};

export const countsSchema: Schema<Counts> = s.object<Counts>({
  items: s.array(s.lazy(() => itemSchema)),
  total: s.int(),
});
