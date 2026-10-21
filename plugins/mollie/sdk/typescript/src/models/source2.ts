import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details about the sender of the credit transfer. */
export type Source2 = {
  /** The format of the source account. Currently always `iban`. */
  format: string;
  /** The name of the account holder who sent the unmatched credit transfer. */
  accountHolderName: string;
  /** The IBAN of the sender's bank account. */
  iban: string;
  /** The BIC of the sender's bank. */
  bic: string;
};

export const source2Schema: Schema<Source2> = s.object<Source2>({
  format: s.string(),
  accountHolderName: s.string(),
  iban: s.string(),
  bic: s.string(),
});
