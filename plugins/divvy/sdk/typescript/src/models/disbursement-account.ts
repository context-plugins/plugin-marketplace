import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Disbursement account details. */
export type DisbursementAccount = {
  type?: string;
  accountNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disbursementAccountSchema: Schema<DisbursementAccount> = s.object<DisbursementAccount>(
  {
    type: s.optional(s.string()),
    accountNumber: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
