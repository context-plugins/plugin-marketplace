import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The country code to filter payment methods by. This only applies to payment methods with a
 * `country` value.
 */
export type Country13 = string;

export const country13Schema: Schema<Country13> = s.of<Country13>(s.union([s.string()]));
