import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { account1Schema, type Account1 } from "./account1.js";

/** The creditor (recipient) of the draft transfer, including their name and account details. */
export type DraftTransferParty1 = {
  /** The full name of the account holder. */
  fullName: string;
  /** The bank account details of the party. */
  account: Account1;
};

export const draftTransferParty1Schema: Schema<DraftTransferParty1> = s.object<DraftTransferParty1>({
  fullName: s.string(),
  account: account1Schema,
});
