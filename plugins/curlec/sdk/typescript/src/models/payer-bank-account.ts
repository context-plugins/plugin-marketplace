import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entity4Schema, type Entity4 } from "./entity4.js";

/** Payer's bank account details. */
export type PayerBankAccount = {
  id?: string;
  entity?: Entity4;
  ifsc?: string;
  bankName?: string;
  /** Account holder name. */
  name?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  accountNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payerBankAccountProperties: s.Shape<PayerBankAccount> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity4Schema)),
  ifsc: s.optional(s.string()),
  bankName: s.optional(s.string()),
  name: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  accountNumber: s.optional(s.string()),
  _keysMap: {
    bankName: "bank_name",
    accountNumber: "account_number",
  },
};

export const payerBankAccountInternalSchema: Schema<PayerBankAccount> = s.object<PayerBankAccount>(
  payerBankAccountProperties,
  { additionalProperties: s.json() },
);

export const payerBankAccountSchema: Schema<PayerBankAccount> = s.lazySchema(() =>
  s.object<PayerBankAccount>(
    {
      ...payerBankAccountProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
