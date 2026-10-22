import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The amount to be used for 3DS authentication. Optionally set this value to authenticate a greater
 * amount than the transaction amount.
 */
export type Amount6 = number;

export const amount6Schema: Schema<Amount6> = s.of<Amount6>(s.union([s.int()]));
