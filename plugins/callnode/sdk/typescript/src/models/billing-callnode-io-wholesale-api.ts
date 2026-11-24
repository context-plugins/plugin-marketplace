import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BillingCallnodeIoWholesaleApi = {
  Wallet: "wallet",
} as const;
export type BillingCallnodeIoWholesaleApi =
  | (typeof BillingCallnodeIoWholesaleApi)[keyof typeof BillingCallnodeIoWholesaleApi]
  | (string & {});

export const billingCallnodeIoWholesaleApiSchema: EnumSchema<BillingCallnodeIoWholesaleApi> =
  s.enumOf<BillingCallnodeIoWholesaleApi>(BillingCallnodeIoWholesaleApi);
