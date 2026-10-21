import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The counterparty involved in the transaction, including their name and account identifier. */
export type Counterparty = {
  /** The account identifier (e.g. IBAN) of the counterparty. */
  identifier?: string;
  /** The name of the counterparty. */
  name?: string;
};

export const counterpartySchema: Schema<Counterparty> = s.object<Counterparty>({
  identifier: s.optional(s.string()),
  name: s.optional(s.string()),
});
