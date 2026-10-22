import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The bank account details of the party. */
export type Account = {
  /** The IBAN (International Bank Account Number) of the account holder. */
  iban: string;
};

export const accountSchema: Schema<Account> = s.object<Account>({
  iban: s.string(),
});
