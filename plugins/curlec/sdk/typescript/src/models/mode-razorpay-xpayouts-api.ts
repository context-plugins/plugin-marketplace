import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Transfer mode — case-sensitive. amazonpay limited to ₹10,000 per transaction; no custom narration
 * allowed.
 */
export const ModeRazorpayXPayoutsApi = {
  Neft: "NEFT",
  Rtgs: "RTGS",
  Imps: "IMPS",
  Upi: "UPI",
  Card: "card",
  Amazonpay: "amazonpay",
} as const;
export type ModeRazorpayXPayoutsApi =
  | (typeof ModeRazorpayXPayoutsApi)[keyof typeof ModeRazorpayXPayoutsApi]
  | (string & {});

export const modeRazorpayXPayoutsApiSchema: EnumSchema<ModeRazorpayXPayoutsApi> =
  s.enumOf<ModeRazorpayXPayoutsApi>(ModeRazorpayXPayoutsApi);
