import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { secCode1Schema, type SecCode1 } from "./unions/sec-code1.js";

export type RepayBankOptions = {
  /**
   * The Nacha Standard Entry Class code describing how the account holder authorized an ACH debit.
   * When omitted, `TelDebit` is used for a `moto` payment source and `WebDebit` otherwise. Ignored
   * for business accounts, which Repay requires to use `CcdDebit`.
   */
  secCode?: SecCode1;
};

export const repayBankOptionsSchema: Schema<RepayBankOptions> = s.object<RepayBankOptions>({
  secCode: s.optional(s.lazy(() => secCode1Schema)),
  _keysMap: {
    secCode: "sec_code",
  },
});
