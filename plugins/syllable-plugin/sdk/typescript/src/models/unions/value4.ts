import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The default value to use for the parameter. */
export type Value4 = Record<string, unknown>;

export const value4Schema: Schema<Value4> = s.of<Value4>(s.union([s.record(s.string(), s.unknown())]));
