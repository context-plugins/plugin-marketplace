import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The default destination of automatic scheduled transfers. Currently only `bank-account` is
 * supported.
 *
 * * `bank-account` — Transfer the balance amount to an external bank account
 */
export const BalanceTransferDestinationType = {
  BankAccount: "bank-account",
} as const;
export type BalanceTransferDestinationType =
  | (typeof BalanceTransferDestinationType)[keyof typeof BalanceTransferDestinationType]
  | (string & {});

export const balanceTransferDestinationTypeSchema: EnumSchema<BalanceTransferDestinationType> =
  s.enumOf<BalanceTransferDestinationType>(BalanceTransferDestinationType);
