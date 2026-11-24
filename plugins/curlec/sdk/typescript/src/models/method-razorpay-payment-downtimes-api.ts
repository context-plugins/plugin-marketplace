import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MethodRazorpayPaymentDowntimesApi = {
  Card: "card",
  Netbanking: "netbanking",
  Upi: "upi",
} as const;
export type MethodRazorpayPaymentDowntimesApi =
  | (typeof MethodRazorpayPaymentDowntimesApi)[keyof typeof MethodRazorpayPaymentDowntimesApi]
  | (string & {});

export const methodRazorpayPaymentDowntimesApiSchema: EnumSchema<MethodRazorpayPaymentDowntimesApi> =
  s.enumOf<MethodRazorpayPaymentDowntimesApi>(MethodRazorpayPaymentDowntimesApi);
