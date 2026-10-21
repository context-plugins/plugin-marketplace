import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Reason for the chargeback as given by the bank. Only available for chargebacks of SEPA Direct
 * Debit payments.
 */
export type Reason = {
  /** Technical code provided by the bank. */
  code: string;
  /** A more detailed human-friendly description. */
  description: string;
};

export const reasonSchema: Schema<Reason> = s.object<Reason>({
  code: s.string(),
  description: s.string(),
});
