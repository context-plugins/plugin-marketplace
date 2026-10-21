import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The ISO-4217 currency code that this payment method can be used for. If this value is null the
 * payment method may be used for multiple currencies.
 */
export type Currency10 = string;

export const currency10Schema: Schema<Currency10> = s.of<Currency10>(s.union([s.string()]));
