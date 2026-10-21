import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The counterparty involved in this transaction. */
export type Counterparty1 = {
  /** The account identifier (e.g. IBAN) of the counterparty. */
  identifier?: string;
  /** The name of the counterparty. */
  name?: string;
};

export const counterparty1Schema: Schema<Counterparty1> = s.object<Counterparty1>({
  identifier: s.optional(s.string()),
  name: s.optional(s.string()),
});
