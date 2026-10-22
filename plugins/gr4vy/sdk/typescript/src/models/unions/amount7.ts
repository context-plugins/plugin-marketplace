import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Amount of the transaction to match. */
export type Amount7 = number;

export const amount7Schema: Schema<Amount7> = s.of<Amount7>(s.union([s.int()]));
