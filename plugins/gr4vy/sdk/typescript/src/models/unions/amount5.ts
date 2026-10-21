import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The amount used to evaluate checkout rules, and which are used to help determine the right
 * payment options to display.
 */
export type Amount5 = number;

export const amount5Schema: Schema<Amount5> = s.of<Amount5>(s.union([s.int()]));
