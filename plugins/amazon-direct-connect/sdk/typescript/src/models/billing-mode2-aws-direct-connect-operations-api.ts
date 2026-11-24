import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The billing mode applied to the connections. */
export const BillingMode2AwsDirectConnectOperationsApi = {
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
export type BillingMode2AwsDirectConnectOperationsApi =
  | (typeof BillingMode2AwsDirectConnectOperationsApi)[keyof typeof BillingMode2AwsDirectConnectOperationsApi]
  | (string & {});

export const billingMode2AwsDirectConnectOperationsApiSchema: EnumSchema<BillingMode2AwsDirectConnectOperationsApi> =
  s.enumOf<BillingMode2AwsDirectConnectOperationsApi>(BillingMode2AwsDirectConnectOperationsApi);
