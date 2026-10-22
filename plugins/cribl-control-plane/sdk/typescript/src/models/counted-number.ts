import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountedNumber = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: number[];
};

export const countedNumberSchema: Schema<CountedNumber> = s.object<CountedNumber>({
  count: s.int(),
  items: s.array(s.float64()),
});
