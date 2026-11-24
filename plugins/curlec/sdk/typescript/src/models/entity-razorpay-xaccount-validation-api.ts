import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayXAccountValidationApi = {
  FundAccountValidation: "fund_account.validation",
} as const;
export type EntityRazorpayXAccountValidationApi =
  | (typeof EntityRazorpayXAccountValidationApi)[keyof typeof EntityRazorpayXAccountValidationApi]
  | (string & {});

export const entityRazorpayXAccountValidationApiSchema: EnumSchema<EntityRazorpayXAccountValidationApi> =
  s.enumOf<EntityRazorpayXAccountValidationApi>(EntityRazorpayXAccountValidationApi);
