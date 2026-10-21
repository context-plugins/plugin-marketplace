import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for payment links that have an `amount` less than or equal to this value. */
export type AmountLte1 = number;

export const amountLte1Schema: Schema<AmountLte1> = s.of<AmountLte1>(s.union([s.int()]));
