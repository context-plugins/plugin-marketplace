import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The currency code used to evaluate checkout rules, and which are used to help determine the right
 * payment options to display.
 */
export type Currency12 = string;

export const currency12Schema: Schema<Currency12> = s.of<Currency12>(s.union([s.string()]));
