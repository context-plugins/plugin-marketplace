import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AdyenCardAutoRescueScenariosEnum = {
  AutoRescueSuccessfulFirst: "AutoRescueSuccessfulFirst",
  AutoRescueSuccessfulSecond: "AutoRescueSuccessfulSecond",
  AutoRescueFailed: "AutoRescueFailed",
  AutoRescueFraud: "AutoRescueFraud",
} as const;
export type AdyenCardAutoRescueScenariosEnum =
  | (typeof AdyenCardAutoRescueScenariosEnum)[keyof typeof AdyenCardAutoRescueScenariosEnum]
  | (string & {});

export const adyenCardAutoRescueScenariosEnumSchema: EnumSchema<AdyenCardAutoRescueScenariosEnum> =
  s.enumOf<AdyenCardAutoRescueScenariosEnum>(AdyenCardAutoRescueScenariosEnum);
