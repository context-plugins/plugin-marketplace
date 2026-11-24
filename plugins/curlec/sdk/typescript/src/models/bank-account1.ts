import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BankAccount1 = {
  name?: string;
  ifsc?: string;
  accountNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankAccount1Schema: Schema<BankAccount1> = s.object<BankAccount1>(
  {
    name: s.optional(s.string()),
    ifsc: s.optional(s.string()),
    accountNumber: s.optional(s.string()),
    _keysMap: {
      accountNumber: "account_number",
    },
  },
  { additionalProperties: s.json() },
);
