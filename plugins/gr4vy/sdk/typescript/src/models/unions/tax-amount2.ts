import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The sales tax amount for this transaction, represented as a monetary amount in the smallest
 * currency unit for the given currency, for example `1299` cents to create an authorization for
 * `$12.99`
 */
export type TaxAmount2 = number;

export const taxAmount2Schema: Schema<TaxAmount2> = s.of<TaxAmount2>(s.union([s.int()]));
