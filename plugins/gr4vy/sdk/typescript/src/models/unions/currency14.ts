import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The currency code to filter payment methods by. This only applies to payment methods with a
 * `currency` value.
 */
export type Currency14 = string;

export const currency14Schema: Schema<Currency14> = s.of<Currency14>(s.union([s.string()]));
