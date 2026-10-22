import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Passes the `error_on_requires_action` option to the Stripe API. Set to true to fail the payment
 * attempt if it transitions into requires_action. Use this parameter for simpler integrations that
 * don't handle customer actions, such as saving cards without authentication.
 */
export type ErrorOnRequiresAction = boolean;

export const errorOnRequiresActionSchema: Schema<ErrorOnRequiresAction> = s.of<ErrorOnRequiresAction>(
  s.union([s.boolean()]),
);
