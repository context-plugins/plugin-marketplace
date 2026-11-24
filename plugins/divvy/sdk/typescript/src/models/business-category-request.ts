import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Business Category. */
export const BusinessCategoryRequest = {
  Corporation: "CORPORATION",
  Llc: "LLC",
  NonProfit: "NON_PROFIT",
  Government: "GOVERNMENT",
  SoleProprietor: "SOLE_PROPRIETOR",
  Individual: "INDIVIDUAL",
  Trust: "TRUST",
  Unknown: "UNKNOWN",
} as const;
export type BusinessCategoryRequest =
  | (typeof BusinessCategoryRequest)[keyof typeof BusinessCategoryRequest]
  | (string & {});

export const businessCategoryRequestSchema: EnumSchema<BusinessCategoryRequest> =
  s.enumOf<BusinessCategoryRequest>(BusinessCategoryRequest);
