import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The tax amount for this item represented as a monetary amount in the smallest currency unit for
 * the given currency, for example `1299` USD cents represents `$12.99`.
 */
export type TaxAmount1 = number;

export const taxAmount1Schema: Schema<TaxAmount1> = s.of<TaxAmount1>(s.union([s.int()]));
