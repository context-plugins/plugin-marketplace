import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to aggregate data values in the report. */
export const Aggregation = {
  Total: "total",
  PercentTotal: "percent_total",
  PercentCol: "percent_col",
  PercentRow: "percent_row",
  TotalOverTotal: "total_over_total",
  Count: "count",
} as const;
export type Aggregation = (typeof Aggregation)[keyof typeof Aggregation] | (string & {});

export const aggregationSchema: EnumSchema<Aggregation> = s.enumOf<Aggregation>(Aggregation);
