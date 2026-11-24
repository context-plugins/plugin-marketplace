import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Aggregation function associated with the metric. */
export const Aggregation = {
  AggregationFunctionUnspecified: "AGGREGATION_FUNCTION_UNSPECIFIED",
  Avg: "AVG",
  Sum: "SUM",
  Min: "MIN",
  Max: "MAX",
  CountDistinct: "COUNT_DISTINCT",
} as const;
export type Aggregation = (typeof Aggregation)[keyof typeof Aggregation] | (string & {});

export const aggregationSchema: EnumSchema<Aggregation> = s.enumOf<Aggregation>(Aggregation);
