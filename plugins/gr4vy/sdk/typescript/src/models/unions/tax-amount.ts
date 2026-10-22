import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Amount of the taxes for current leg of the trip. */
export type TaxAmount = number;

export const taxAmountSchema: Schema<TaxAmount> = s.of<TaxAmount>(s.union([s.int()]));
