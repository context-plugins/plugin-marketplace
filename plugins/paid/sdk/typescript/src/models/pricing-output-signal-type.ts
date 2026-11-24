import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingOutputSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type PricingOutputSignalType =
  | (typeof PricingOutputSignalType)[keyof typeof PricingOutputSignalType]
  | (string & {});

export const pricingOutputSignalTypeSchema: EnumSchema<PricingOutputSignalType> =
  s.enumOf<PricingOutputSignalType>(PricingOutputSignalType);
