import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Amount in the smallest currency unit for the given currency */
export type Value4 = number;

export const value4Schema: Schema<Value4> = s.of<Value4>(s.union([s.int()]));
