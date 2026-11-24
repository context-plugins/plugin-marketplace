import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The billing mode to apply to the specified connections. The valid values are PayAsYouGo,
 * FlatRateTier1, FlatRateTier2, FlatRateTier3, FlatRateTier4, and FlatRateTier5.
 */
export const BillingMode1AwsDirectConnectOperationsApi = {
  PayAsYouGo: "PayAsYouGo",
  FlatRateTier1: "FlatRateTier1",
  FlatRateTier2: "FlatRateTier2",
  FlatRateTier3: "FlatRateTier3",
  FlatRateTier4: "FlatRateTier4",
  FlatRateTier5: "FlatRateTier5",
} as const;
export type BillingMode1AwsDirectConnectOperationsApi =
  | (typeof BillingMode1AwsDirectConnectOperationsApi)[keyof typeof BillingMode1AwsDirectConnectOperationsApi]
  | (string & {});

export const billingMode1AwsDirectConnectOperationsApiSchema: EnumSchema<BillingMode1AwsDirectConnectOperationsApi> =
  s.enumOf<BillingMode1AwsDirectConnectOperationsApi>(BillingMode1AwsDirectConnectOperationsApi);
