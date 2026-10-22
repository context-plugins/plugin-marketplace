import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The country code used to evaluate checkout rules, and which are used to help determine the right
 * payment options to display.
 */
export type Country8 = string;

export const country8Schema: Schema<Country8> = s.of<Country8>(s.union([s.string()]));
