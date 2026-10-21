import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The method by which multiple unit event values are aggregated */
export const UnitAggregationType2 = {
  Average: "average",
  Sum: "sum",
} as const;
export type UnitAggregationType2 =
  | (typeof UnitAggregationType2)[keyof typeof UnitAggregationType2]
  | (string & {});

export const unitAggregationType2Schema: EnumSchema<UnitAggregationType2> =
  s.enumOf<UnitAggregationType2>(UnitAggregationType2);
