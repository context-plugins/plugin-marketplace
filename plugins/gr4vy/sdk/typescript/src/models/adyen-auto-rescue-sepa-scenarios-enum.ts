import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdyenAutoRescueSepaScenariosEnum = {
  AutoRescueSuccessfulFirst: "AutoRescueSuccessfulFirst",
  AutoRescueSuccessfulSecond: "AutoRescueSuccessfulSecond",
  AutoRescueFailed: "AutoRescueFailed",
} as const;
export type AdyenAutoRescueSepaScenariosEnum =
  | (typeof AdyenAutoRescueSepaScenariosEnum)[keyof typeof AdyenAutoRescueSepaScenariosEnum]
  | (string & {});

export const adyenAutoRescueSepaScenariosEnumSchema: EnumSchema<AdyenAutoRescueSepaScenariosEnum> =
  s.enumOf<AdyenAutoRescueSepaScenariosEnum>(AdyenAutoRescueSepaScenariosEnum);
