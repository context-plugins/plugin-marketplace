import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The amount for this transaction that has been authorized for the `payment_method`. This can be
 * less than the `amount` if gift cards were used.
 */
export type AuthorizedAmount = number;

export const authorizedAmountSchema: Schema<AuthorizedAmount> = s.of<AuthorizedAmount>(s.union([s.int()]));
