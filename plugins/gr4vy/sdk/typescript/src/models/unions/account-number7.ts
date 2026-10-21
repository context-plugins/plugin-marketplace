import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The account number of the recipient. Depending on the type of funds transfer, this could be a
 * wallet ID, bank accoutn number, or email address.
 */
export type AccountNumber7 = string;

export const accountNumber7Schema: Schema<AccountNumber7> = s.of<AccountNumber7>(s.union([s.string()]));
