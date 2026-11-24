import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FundAccount = {
  id?: string;
  accountType?: string;
  bankAccount?: Record<string, unknown>;
  vpa?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundAccountSchema: Schema<FundAccount> = s.object<FundAccount>(
  {
    id: s.optional(s.string()),
    accountType: s.optional(s.string()),
    bankAccount: s.optional(s.record(s.string(), s.unknown())),
    vpa: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountType: "account_type",
      bankAccount: "bank_account",
    },
  },
  { additionalProperties: s.json() },
);
