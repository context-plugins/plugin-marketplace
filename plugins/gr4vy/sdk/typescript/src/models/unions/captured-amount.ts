import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The captured amount for this transaction. This can be the full value of the `authorized_amount`
 * or less.
 */
export type CapturedAmount = number;

export const capturedAmountSchema: Schema<CapturedAmount> = s.of<CapturedAmount>(s.union([s.int()]));
