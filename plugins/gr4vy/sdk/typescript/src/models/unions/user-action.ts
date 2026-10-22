import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Customizes the PayPal Checkout button text. Use `PAY_NOW` to show a pay now button, or `CONTINUE`
 * to show a continue button for deferred payments.
 */
export type UserAction = string;

export const userActionSchema: Schema<UserAction> = s.of<UserAction>(s.union([s.string()]));
