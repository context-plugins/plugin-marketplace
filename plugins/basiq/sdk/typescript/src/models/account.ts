import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Bank account details for domestic payee. */
export type Account = {
  /** The BSB number of the account. */
  bsb?: string;
  /** The account number. */
  accountNumber?: string;
  /** The name of the account holder. */
  accountName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountSchema: Schema<Account> = s.object<Account>(
  {
    bsb: s.optional(s.string()),
    accountNumber: s.optional(s.string()),
    accountName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
