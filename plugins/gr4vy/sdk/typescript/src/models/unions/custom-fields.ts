import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Passes `customFields` to the Braintree API when creating a new payment. Custom fields allow you
 * to customize your checkout experience by collecting specific information about your customers and
 * their purchases.
 */
export type CustomFields = Record<string, string>;

export const customFieldsSchema: Schema<CustomFields> = s.of<CustomFields>(
  s.union([s.record(s.string(), s.string())]),
);
