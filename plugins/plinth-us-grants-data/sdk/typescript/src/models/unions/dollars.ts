import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Dollars dropped. Null when the cost could not be measured. */
export type Dollars = number;

export const dollarsSchema: Schema<Dollars> = s.of<Dollars>(s.union([s.int()]));
