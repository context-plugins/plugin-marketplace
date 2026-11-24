import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for Disbursement type. */
export const DisbursementType = {
  Check: "CHECK",
  Ach: "ACH",
  Rpps: "RPPS",
  Paypal: "PAYPAL",
  Offline: "OFFLINE",
  InternationalEPayment: "INTERNATIONAL_E_PAYMENT",
  Amex: "AMEX",
  VirtualCard: "VIRTUAL_CARD",
  Wallet: "WALLET",
  CreditCard: "CREDIT_CARD",
  Undefined: "UNDEFINED",
} as const;
export type DisbursementType = (typeof DisbursementType)[keyof typeof DisbursementType] | (string & {});

export const disbursementTypeSchema: EnumSchema<DisbursementType> =
  s.enumOf<DisbursementType>(DisbursementType);
