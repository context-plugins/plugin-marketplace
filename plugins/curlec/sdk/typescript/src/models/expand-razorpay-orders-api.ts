import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExpandRazorpayOrdersApi = {
  Payments: "payments",
  PaymentsCard: "payments.card",
  Transfers: "transfers",
  VirtualAccount: "virtual_account",
} as const;
export type ExpandRazorpayOrdersApi =
  | (typeof ExpandRazorpayOrdersApi)[keyof typeof ExpandRazorpayOrdersApi]
  | (string & {});

export const expandRazorpayOrdersApiSchema: EnumSchema<ExpandRazorpayOrdersApi> =
  s.enumOf<ExpandRazorpayOrdersApi>(ExpandRazorpayOrdersApi);
