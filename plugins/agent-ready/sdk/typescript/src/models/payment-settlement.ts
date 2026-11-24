import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Present only when the scan succeeded but on-chain settlement did not. The result is still
 * returned rather than failing a paid caller.
 */
export const PaymentSettlement = {
  Failed: "failed",
} as const;
export type PaymentSettlement = (typeof PaymentSettlement)[keyof typeof PaymentSettlement] | (string & {});

export const paymentSettlementSchema: EnumSchema<PaymentSettlement> =
  s.enumOf<PaymentSettlement>(PaymentSettlement);
