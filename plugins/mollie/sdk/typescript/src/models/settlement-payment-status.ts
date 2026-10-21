import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment's status. Settlement payments always have a status of `paid`. */
export const SettlementPaymentStatus = {
  Paid: "paid",
} as const;
export type SettlementPaymentStatus =
  | (typeof SettlementPaymentStatus)[keyof typeof SettlementPaymentStatus]
  | (string & {});

export const settlementPaymentStatusSchema: EnumSchema<SettlementPaymentStatus> =
  s.enumOf<SettlementPaymentStatus>(SettlementPaymentStatus);
