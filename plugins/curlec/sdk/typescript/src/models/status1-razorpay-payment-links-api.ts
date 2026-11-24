import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1RazorpayPaymentLinksApi = {
  Captured: "captured",
} as const;
export type Status1RazorpayPaymentLinksApi =
  | (typeof Status1RazorpayPaymentLinksApi)[keyof typeof Status1RazorpayPaymentLinksApi]
  | (string & {});

export const status1RazorpayPaymentLinksApiSchema: EnumSchema<Status1RazorpayPaymentLinksApi> =
  s.enumOf<Status1RazorpayPaymentLinksApi>(Status1RazorpayPaymentLinksApi);
