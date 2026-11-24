import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of comparison for the alert threshold (used with `operator` and `value`). If omitted on
 * create, defaults to `percentage-change`.
 */
export const Condition = {
  Value: "value",
  PercentageChange: "percentage-change",
  Forecast: "forecast",
} as const;
export type Condition = (typeof Condition)[keyof typeof Condition] | (string & {});

export const conditionSchema: EnumSchema<Condition> = s.enumOf<Condition>(Condition);
