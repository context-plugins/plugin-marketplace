import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditBalanceRecipient = {
  Organization: "organization",
  Seat: "seat",
} as const;
export type CreditBalanceRecipient =
  | (typeof CreditBalanceRecipient)[keyof typeof CreditBalanceRecipient]
  | (string & {});

export const creditBalanceRecipientSchema: EnumSchema<CreditBalanceRecipient> =
  s.enumOf<CreditBalanceRecipient>(CreditBalanceRecipient);
