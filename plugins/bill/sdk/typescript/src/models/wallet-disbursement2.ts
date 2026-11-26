import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WalletDisbursement2 = {
  /** Instant Transfer (wallet) payment arrives by date */
  arrivesByDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const walletDisbursement2Schema: Schema<WalletDisbursement2> = s.object<WalletDisbursement2>(
  {
    arrivesByDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
