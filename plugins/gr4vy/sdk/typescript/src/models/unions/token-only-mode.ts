import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When set to `true`, this will authorize the transaction with Klarna for the purposes of
 * tokenizing the payment method with the transaction details. No funds will be captured and the
 * authorization will be automatically voided. This is useful for up-sell scenarios where you want
 * to tokenize a Klarna payment method for future use.
 */
export type TokenOnlyMode = boolean;

export const tokenOnlyModeSchema: Schema<TokenOnlyMode> = s.of<TokenOnlyMode>(s.union([s.boolean()]));
