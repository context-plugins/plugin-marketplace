import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for payment links that have matching `currency` values. The `currency` values provided
 * must be formatted as 3-letter ISO currency codes.
 */
export type Currency17 = string[];

export const currency17Schema: Schema<Currency17> = s.of<Currency17>(s.union([s.array(s.string())]));
