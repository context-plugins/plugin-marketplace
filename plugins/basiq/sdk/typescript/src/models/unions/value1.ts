import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Value1 = unknown;

export const value1Schema: Schema<Value1> = s.of<Value1>(s.union([s.string(), s.unknown()]));
