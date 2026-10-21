import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountNumber6Schema, type AccountNumber6 } from "./unions/account-number6.js";
import { resultSchema, type Result } from "./unions/result.js";

export type MockCardMerchantAdviceCodeOptions = {
  /** The MAC to return for this request. */
  result?: Result;
  /** When set, the MAC is only returned if the card number matches this account number. */
  accountNumber: AccountNumber6;
};

export const mockCardMerchantAdviceCodeOptionsSchema: Schema<MockCardMerchantAdviceCodeOptions> =
  s.object<MockCardMerchantAdviceCodeOptions>({
    result: s.optional(s.lazy(() => resultSchema)),
    accountNumber: accountNumber6Schema,
    _keysMap: {
      accountNumber: "account_number",
    },
  });
