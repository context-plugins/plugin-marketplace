import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for payment links that have an `amount` greater than or equal to this value. */
export type AmountGte1 = number;

export const amountGte1Schema: Schema<AmountGte1> = s.of<AmountGte1>(s.union([s.int()]));
