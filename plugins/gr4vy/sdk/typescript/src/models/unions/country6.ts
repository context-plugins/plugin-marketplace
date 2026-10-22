import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The 2-letter ISO code of the country this payment method can be used for. If this value is null
 * the payment method may be used in multiple countries.
 */
export type Country6 = string;

export const country6Schema: Schema<Country6> = s.of<Country6>(s.union([s.string()]));
