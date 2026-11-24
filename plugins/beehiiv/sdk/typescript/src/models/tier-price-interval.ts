import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TierPriceInterval = {
  Month: "month",
  Quarter: "quarter",
  Year: "year",
  OneTime: "one_time",
  Donation: "donation",
} as const;
export type TierPriceInterval = (typeof TierPriceInterval)[keyof typeof TierPriceInterval] | (string & {});

export const tierPriceIntervalSchema: EnumSchema<TierPriceInterval> =
  s.enumOf<TierPriceInterval>(TierPriceInterval);
