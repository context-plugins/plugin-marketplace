import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayXFundAccountsApi = {
  FundAccount: "fund_account",
} as const;
export type EntityRazorpayXFundAccountsApi =
  | (typeof EntityRazorpayXFundAccountsApi)[keyof typeof EntityRazorpayXFundAccountsApi]
  | (string & {});

export const entityRazorpayXFundAccountsApiSchema: EnumSchema<EntityRazorpayXFundAccountsApi> =
  s.enumOf<EntityRazorpayXFundAccountsApi>(EntityRazorpayXFundAccountsApi);
