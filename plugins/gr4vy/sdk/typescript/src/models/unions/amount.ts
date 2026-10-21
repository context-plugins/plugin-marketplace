import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The total amount for this transaction. */
export type Amount = number;

export const amountSchema: Schema<Amount> = s.of<Amount>(s.union([s.int()]));
