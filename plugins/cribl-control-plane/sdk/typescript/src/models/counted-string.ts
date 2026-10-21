import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountedString = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: string[];
};

export const countedStringSchema: Schema<CountedString> = s.object<CountedString>({
  count: s.int(),
  items: s.array(s.string()),
});
