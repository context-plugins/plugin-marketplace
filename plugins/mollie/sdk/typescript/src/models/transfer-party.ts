import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";

/**
 * A party involved in the transfer, representing either the debtor (sender) or creditor
 * (recipient). Contains the party's name and account details.
 */
export type TransferParty = {
  /** The full name of the account holder. */
  fullName: string;
  /** The bank account details of the party. */
  account: Account;
};

export const transferPartySchema: Schema<TransferParty> = s.object<TransferParty>({
  fullName: s.string(),
  account: accountSchema,
});
