import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The total amount for this transaction across all funding sources including gift cards. */
export type Amount11 = number;

export const amount11Schema: Schema<Amount11> = s.of<Amount11>(s.union([s.int()]));
