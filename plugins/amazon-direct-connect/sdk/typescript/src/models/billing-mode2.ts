import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The billing mode for the connection. */
export const BillingMode2 = {
  PayAsYouGo: "PayAsYouGo",
  FlatRateTier1: "FlatRateTier1",
  FlatRateTier2: "FlatRateTier2",
  FlatRateTier3: "FlatRateTier3",
  FlatRateTier4: "FlatRateTier4",
  FlatRateTier5: "FlatRateTier5",
} as const;
export type BillingMode2 = (typeof BillingMode2)[keyof typeof BillingMode2] | (string & {});

export const billingMode2Schema: EnumSchema<BillingMode2> = s.enumOf<BillingMode2>(BillingMode2);
