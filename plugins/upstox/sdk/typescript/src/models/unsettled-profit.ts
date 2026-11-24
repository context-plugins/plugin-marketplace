import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnsettledProfit = {
  todaysProfit?: number;
  previousDays?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unsettledProfitSchema: Schema<UnsettledProfit> = s.object<UnsettledProfit>(
  {
    todaysProfit: s.optional(s.float64()),
    previousDays: s.optional(s.float64()),
    _keysMap: {
      todaysProfit: "todays_profit",
      previousDays: "previous_days",
    },
  },
  { additionalProperties: s.json() },
);
