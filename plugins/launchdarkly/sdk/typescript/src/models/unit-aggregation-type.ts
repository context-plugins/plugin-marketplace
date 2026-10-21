import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of unit aggregation to use for the metric */
export const UnitAggregationType = {
  Sum: "sum",
  Average: "average",
} as const;
export type UnitAggregationType =
  | (typeof UnitAggregationType)[keyof typeof UnitAggregationType]
  | (string & {});

export const unitAggregationTypeSchema: EnumSchema<UnitAggregationType> =
  s.enumOf<UnitAggregationType>(UnitAggregationType);
