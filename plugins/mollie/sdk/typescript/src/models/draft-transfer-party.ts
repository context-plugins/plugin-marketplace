import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { account1Schema, type Account1 } from "./account1.js";

/**
 * A party involved in the draft transfer, representing either the debtor (sender) or creditor
 * (recipient). Contains the party's name and account details.
 */
export type DraftTransferParty = {
  /** The full name of the account holder. */
  fullName: string;
  /** The bank account details of the party. */
  account: Account1;
};

export const draftTransferPartySchema: Schema<DraftTransferParty> = s.object<DraftTransferParty>({
  fullName: s.string(),
  account: account1Schema,
});
