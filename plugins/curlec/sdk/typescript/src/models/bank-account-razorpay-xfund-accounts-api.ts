import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BankAccountRazorpayXFundAccountsApi = {
  ifsc?: string;
  bankName?: string;
  name?: string;
  accountNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankAccountRazorpayXFundAccountsApiSchema: Schema<BankAccountRazorpayXFundAccountsApi> =
  s.object<BankAccountRazorpayXFundAccountsApi>(
    {
      ifsc: s.optional(s.string()),
      bankName: s.optional(s.string()),
      name: s.optional(s.string()),
      accountNumber: s.optional(s.string()),
      _keysMap: {
        bankName: "bank_name",
        accountNumber: "account_number",
      },
    },
    { additionalProperties: s.json() },
  );
