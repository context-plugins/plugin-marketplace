import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Variable value can be a string, number, boolean, or JSON */
export type Value = string | number | boolean | Record<string, unknown>;

export const valueSchema: Schema<Value> = s.of<Value>(
  s.union([s.string(), s.float64(), s.boolean(), s.record(s.string(), s.unknown())]),
);
