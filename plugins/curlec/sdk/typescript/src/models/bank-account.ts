import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Required if type=bank_account. */
export type BankAccount = {
  ifsc?: string;
  accountNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankAccountSchema: Schema<BankAccount> = s.object<BankAccount>(
  {
    ifsc: s.optional(s.string()),
    accountNumber: s.optional(s.string()),
    _keysMap: {
      accountNumber: "account_number",
    },
  },
  { additionalProperties: s.json() },
);
