import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";

/** The creditor (recipient) of the transfer, including their name and account details. */
export type TransferParty1 = {
  /** The full name of the account holder. */
  fullName: string;
  /** The bank account details of the party. */
  account: Account;
};

export const transferParty1Schema: Schema<TransferParty1> = s.object<TransferParty1>({
  fullName: s.string(),
  account: accountSchema,
});
