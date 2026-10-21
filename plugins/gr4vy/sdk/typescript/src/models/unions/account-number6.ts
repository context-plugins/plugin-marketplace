import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When set, the MAC is only returned if the card number matches this account number. */
export type AccountNumber6 = string;

export const accountNumber6Schema: Schema<AccountNumber6> = s.of<AccountNumber6>(s.union([s.string()]));
