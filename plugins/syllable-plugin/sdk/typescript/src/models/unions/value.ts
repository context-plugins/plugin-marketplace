import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Initial value of the variable. */
export type Value = Record<string, unknown>;

export const valueSchema: Schema<Value> = s.of<Value>(s.union([s.record(s.string(), s.unknown())]));
