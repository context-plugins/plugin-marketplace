import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entity3Schema, type Entity3 } from "./entity3.js";
import { modeSchema, type Mode } from "./mode.js";
import {
  payerBankAccountInternalSchema,
  payerBankAccountSchema,
  type PayerBankAccount,
} from "./payer-bank-account.js";
import {
  virtualAccountInternalSchema,
  virtualAccountSchema,
  type VirtualAccount,
} from "./virtual-account.js";

/**
 * A payment received into a Virtual Account via bank transfer (NEFT/RTGS/IMPS/UPI). Created
 * automatically when a payer sends funds to the virtual account. Prefix: bt_
 */
export type BankTransfer = {
  /** Bank transfer ID. Prefix: bt_ */
  id?: string;
  entity?: Entity3;
  /** Razorpay payment ID generated for this bank transfer (pay_*). */
  paymentId?: string;
  /** Transfer mode used by the payer. */
  mode?: Mode;
  /** Amount received in paise. */
  amount?: number;
  /** Payer's bank account details. */
  payerBankAccount?: PayerBankAccount;
  /** UTR (Unique Transaction Reference) number from the bank. */
  bankReference?: string;
  /** Virtual account that received this transfer (va_*). */
  virtualAccountId?: string;
  /**
   * A virtual bank account or VPA that accepts NEFT/RTGS/IMPS/UPI payments (Smart Collect). Each
   * payment creates a BankTransfer entity. Auto-closes after 90 days of inactivity. Prefix: va_
   */
  virtualAccount?: VirtualAccount;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bankTransferProperties: s.Shape<BankTransfer> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity3Schema)),
  paymentId: s.optional(s.string()),
  mode: s.optional(s.lazy(() => modeSchema)),
  amount: s.optional(s.int()),
  payerBankAccount: s.optional(s.lazy(() => payerBankAccountInternalSchema)),
  bankReference: s.optional(s.string()),
  virtualAccountId: s.optional(s.string()),
  virtualAccount: s.optional(s.lazy(() => virtualAccountInternalSchema)),
  _keysMap: {
    paymentId: "payment_id",
    payerBankAccount: "payer_bank_account",
    bankReference: "bank_reference",
    virtualAccountId: "virtual_account_id",
    virtualAccount: "virtual_account",
  },
};

export const bankTransferInternalSchema: Schema<BankTransfer> = s.object<BankTransfer>(
  bankTransferProperties,
  { additionalProperties: s.json() },
);

export const bankTransferSchema: Schema<BankTransfer> = s.lazySchema(() =>
  s.object<BankTransfer>(
    {
      ...bankTransferProperties,
      payerBankAccount: s.optional(s.lazy(() => payerBankAccountSchema)),
      virtualAccount: s.optional(s.lazy(() => virtualAccountSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
