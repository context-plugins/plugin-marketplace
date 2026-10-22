import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountedBoolean = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: boolean[];
};

export const countedBooleanSchema: Schema<CountedBoolean> = s.object<CountedBoolean>({
  count: s.int(),
  items: s.array(s.boolean()),
});
