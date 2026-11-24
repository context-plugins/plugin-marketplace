import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The digital wallet provider. */
export const Provider = {
  PayPal: "PayPal",
  Venmo: "Venmo",
  GooglePay: "GooglePay",
  ApplePay: "ApplePay",
  Other: "Other",
} as const;
export type Provider = (typeof Provider)[keyof typeof Provider] | (string & {});

export const providerSchema: EnumSchema<Provider> = s.enumOf<Provider>(Provider);
