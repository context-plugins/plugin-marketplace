import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Range = {
  /**
   * A label for the bucket, returned in the aggregation response. 1–20 chars, alphanumeric plus `-`
   * and `_`.
   */
  key: string;
  /** Start of the range (inclusive). At least one of `from` / `to` is required. */
  from?: number;
  /** End of the range (exclusive). At least one of `from` / `to` is required. */
  to?: number;
};

export const rangeSchema: Schema<Range> = s.object<Range>({
  key: s.string(),
  from: s.optional(s.float64()),
  to: s.optional(s.float64()),
});
