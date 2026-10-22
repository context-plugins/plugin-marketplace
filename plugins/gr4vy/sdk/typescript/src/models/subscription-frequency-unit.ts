import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the frequency unit for the subscription. Allowed values are: `DAY`, `WEEK`, `MONTH`,
 * `BI_MONTHLY`, `QUARTER`, `SEMI_ANNUALLY`, `YEAR`, `ONDEMAND`.
 */
export const SubscriptionFrequencyUnit = {
  Month: "MONTH",
  Week: "WEEK",
  BiMonthly: "BI_MONTHLY",
  Ondemand: "ONDEMAND",
  Quarter: "QUARTER",
  Year: "YEAR",
  SemiAnnually: "SEMI_ANNUALLY",
  Day: "DAY",
} as const;
export type SubscriptionFrequencyUnit =
  | (typeof SubscriptionFrequencyUnit)[keyof typeof SubscriptionFrequencyUnit]
  | (string & {});

export const subscriptionFrequencyUnitSchema: EnumSchema<SubscriptionFrequencyUnit> =
  s.enumOf<SubscriptionFrequencyUnit>(SubscriptionFrequencyUnit);
