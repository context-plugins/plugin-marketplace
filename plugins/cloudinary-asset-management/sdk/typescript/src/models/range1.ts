import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Range1 = {
  /** Start of the range (inclusive) */
  from?: number;
  /** End of the range (exclusive) */
  to?: number;
  /** The count of resources within this range */
  count?: number;
};

export const range1Schema: Schema<Range1> = s.object<Range1>({
  from: s.optional(s.float64()),
  to: s.optional(s.float64()),
  count: s.optional(s.int()),
});
