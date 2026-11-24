import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The billing mode of the LAG. */
export const BillingMode4 = {
  PayAsYouGo: "PayAsYouGo",
  FlatRateTier1: "FlatRateTier1",
  FlatRateTier2: "FlatRateTier2",
  FlatRateTier3: "FlatRateTier3",
  FlatRateTier4: "FlatRateTier4",
  FlatRateTier5: "FlatRateTier5",
  PortPairFlatRateTier1: "PortPairFlatRateTier1",
  PortPairFlatRateTier2: "PortPairFlatRateTier2",
  PortPairFlatRateTier3: "PortPairFlatRateTier3",
  PortPairFlatRateTier4: "PortPairFlatRateTier4",
  PortPairFlatRateTier5: "PortPairFlatRateTier5",
} as const;
export type BillingMode4 = (typeof BillingMode4)[keyof typeof BillingMode4] | (string & {});

export const billingMode4Schema: EnumSchema<BillingMode4> = s.enumOf<BillingMode4>(BillingMode4);
