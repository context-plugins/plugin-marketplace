import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Value = number;

export const valueSchema: Schema<Value> = s.of<Value>(s.union([s.int(), s.float64()]));
