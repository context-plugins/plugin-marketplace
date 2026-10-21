import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  balanceTransferDestinationTypeSchema,
  type BalanceTransferDestinationType,
} from "./balance-transfer-destination-type.js";

/**
 * The destination where the available amount will be automatically transferred to according to the
 * configured transfer frequency.
 */
export type TransferDestination = {
  /**
   * The default destination of automatic scheduled transfers. Currently only `bank-account` is
   * supported.
   *
   * * `bank-account` — Transfer the balance amount to an external bank account
   */
  type?: BalanceTransferDestinationType;
  /**
   * The configured bank account number of the beneficiary the balance amount is to be transferred
   * to.
   */
  bankAccount?: string;
  /** The full name of the beneficiary the balance amount is to be transferred to. */
  beneficiaryName?: string;
};

export const transferDestinationSchema: Schema<TransferDestination> = s.object<TransferDestination>({
  type: s.optional(s.lazy(() => balanceTransferDestinationTypeSchema)),
  bankAccount: s.optional(s.string()),
  beneficiaryName: s.optional(s.string()),
});
