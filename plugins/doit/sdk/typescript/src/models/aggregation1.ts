import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authoritative aggregation applied to this metric column. */
export const Aggregation1 = {
  Total: "total",
  PercentTotal: "percent_total",
  PercentCol: "percent_col",
  PercentRow: "percent_row",
  TotalOverTotal: "total_over_total",
  Count: "count",
} as const;
export type Aggregation1 = (typeof Aggregation1)[keyof typeof Aggregation1] | (string & {});

export const aggregation1Schema: EnumSchema<Aggregation1> = s.enumOf<Aggregation1>(Aggregation1);
