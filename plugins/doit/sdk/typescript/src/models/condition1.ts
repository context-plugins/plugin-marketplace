import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Omission preserves the saved condition. */
export const Condition1 = {
  Value: "value",
  PercentageChange: "percentage-change",
  Forecast: "forecast",
} as const;
export type Condition1 = (typeof Condition1)[keyof typeof Condition1] | (string & {});

export const condition1Schema: EnumSchema<Condition1> = s.enumOf<Condition1>(Condition1);
