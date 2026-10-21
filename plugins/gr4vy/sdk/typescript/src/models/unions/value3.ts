import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The value of the sampled monitoring metric. */
export type Value3 = number | string;

export const value3Schema: Schema<Value3> = s.of<Value3>(s.union([s.int(), s.float64(), s.string()]));
