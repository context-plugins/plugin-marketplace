import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * An optional description for the transaction. Forwarded to the payment processor where supported.
 * Unlike `statement_descriptor`, this field has no character limit and does not appear on the
 * buyer's bank statement.
 */
export type Description6 = string;

export const description6Schema: Schema<Description6> = s.of<Description6>(s.union([s.string()]));
