import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for PayByType. */
export const PayByType = {
  Check: "CHECK",
  Ach: "ACH",
  Rpps: "RPPS",
  Offline: "OFFLINE",
  InternationalEPayment: "INTERNATIONAL_E_PAYMENT",
  VirtualCard: "VIRTUAL_CARD",
  Wallet: "WALLET",
  Undefined: "UNDEFINED",
} as const;
export type PayByType = (typeof PayByType)[keyof typeof PayByType] | (string & {});

export const payByTypeSchema: EnumSchema<PayByType> = s.enumOf<PayByType>(PayByType);
