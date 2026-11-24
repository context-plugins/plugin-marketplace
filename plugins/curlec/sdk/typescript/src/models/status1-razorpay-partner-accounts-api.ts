import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1RazorpayPartnerAccountsApi = {
  Suspended: "suspended",
} as const;
export type Status1RazorpayPartnerAccountsApi =
  | (typeof Status1RazorpayPartnerAccountsApi)[keyof typeof Status1RazorpayPartnerAccountsApi]
  | (string & {});

export const status1RazorpayPartnerAccountsApiSchema: EnumSchema<Status1RazorpayPartnerAccountsApi> =
  s.enumOf<Status1RazorpayPartnerAccountsApi>(Status1RazorpayPartnerAccountsApi);
