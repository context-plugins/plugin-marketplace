import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditsCurrenciesGetParametersStatus = {
  Active: "active",
  Archived: "archived",
  All: "all",
} as const;
export type CreditsCurrenciesGetParametersStatus =
  | (typeof CreditsCurrenciesGetParametersStatus)[keyof typeof CreditsCurrenciesGetParametersStatus]
  | (string & {});

export const creditsCurrenciesGetParametersStatusSchema: EnumSchema<CreditsCurrenciesGetParametersStatus> =
  s.enumOf<CreditsCurrenciesGetParametersStatus>(CreditsCurrenciesGetParametersStatus);
