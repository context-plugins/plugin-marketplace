import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The billing mode for the LAG. */
export const BillingMode3 = {
  PayAsYouGo: "PayAsYouGo",
  FlatRateTier1: "FlatRateTier1",
  FlatRateTier2: "FlatRateTier2",
  FlatRateTier3: "FlatRateTier3",
  FlatRateTier4: "FlatRateTier4",
  FlatRateTier5: "FlatRateTier5",
} as const;
export type BillingMode3 = (typeof BillingMode3)[keyof typeof BillingMode3] | (string & {});

export const billingMode3Schema: EnumSchema<BillingMode3> = s.enumOf<BillingMode3>(BillingMode3);
