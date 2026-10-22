import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for payment links that have an `amount` equal to this value. */
export type AmountEq1 = number;

export const amountEq1Schema: Schema<AmountEq1> = s.of<AmountEq1>(s.union([s.int()]));
