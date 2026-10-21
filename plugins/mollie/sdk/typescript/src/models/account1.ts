import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The bank account details of the party. */
export type Account1 = {
  /** The IBAN (International Bank Account Number) of the account holder. */
  iban: string;
};

export const account1Schema: Schema<Account1> = s.object<Account1>({
  iban: s.string(),
});
