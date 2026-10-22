import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Numeric value of insight tool result */
export type NumericValue = number;

export const numericValueSchema: Schema<NumericValue> = s.of<NumericValue>(s.union([s.float64()]));
