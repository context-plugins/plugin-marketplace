import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A label for the card or the account. For a paypal payment method this is the user's email
 * address. For a card it is the last 4 digits of the card.
 */
export type Label1 = string;

export const label1Schema: Schema<Label1> = s.of<Label1>(s.union([s.string()]));
