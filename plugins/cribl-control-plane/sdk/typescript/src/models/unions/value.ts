import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Value to compare against (string, number, boolean) */
export type Value = string | number | boolean;

export const valueSchema: Schema<Value> = s.of<Value>(s.union([s.string(), s.float64(), s.boolean()]));
