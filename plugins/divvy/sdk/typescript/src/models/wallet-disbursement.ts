import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Wallet disbursement dto when the disbursement type is wallet. */
export type WalletDisbursement = {
  /** Instant Transfer (wallet) payment arrives by date */
  arrivesByDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const walletDisbursementSchema: Schema<WalletDisbursement> = s.object<WalletDisbursement>(
  {
    arrivesByDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
