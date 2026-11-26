import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disbursementAccountSchema, type DisbursementAccount } from "./disbursement-account.js";

/** Payment disbursement information. */
export type Disbursement = {
  amount?: number;
  currency?: string;
  arrivesByDate?: string;
  /** Disbursement account details. */
  disbursementAccount?: DisbursementAccount;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disbursementSchema: Schema<Disbursement> = s.object<Disbursement>(
  {
    amount: s.optional(s.float64()),
    currency: s.optional(s.string()),
    arrivesByDate: s.optional(s.string()),
    disbursementAccount: s.optional(s.lazy(() => disbursementAccountSchema)),
  },
  { additionalProperties: s.json() },
);
