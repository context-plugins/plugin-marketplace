import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The amount to load onto the gift card, in the smallest denomination for the currency. Required if
 * `currency` is provided.
 */
export type Amount2 = number;

export const amount2Schema: Schema<Amount2> = s.of<Amount2>(s.union([s.int()]));
