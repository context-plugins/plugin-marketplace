import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Business Category. */
export const BusinessCategoryResponse = {
  Undefined: "UNDEFINED",
  Corporation: "CORPORATION",
  Llc: "LLC",
  NonProfit: "NON_PROFIT",
  Government: "GOVERNMENT",
  SoleProprietor: "SOLE_PROPRIETOR",
  Individual: "INDIVIDUAL",
  Trust: "TRUST",
  Unknown: "UNKNOWN",
} as const;
export type BusinessCategoryResponse =
  | (typeof BusinessCategoryResponse)[keyof typeof BusinessCategoryResponse]
  | (string & {});

export const businessCategoryResponseSchema: EnumSchema<BusinessCategoryResponse> =
  s.enumOf<BusinessCategoryResponse>(BusinessCategoryResponse);
