import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions that have been disputed. */
export type Disputed = boolean;

export const disputedSchema: Schema<Disputed> = s.of<Disputed>(s.union([s.boolean()]));
