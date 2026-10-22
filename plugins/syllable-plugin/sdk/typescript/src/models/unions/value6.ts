import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The offending value, when it adds clarity */
export type Value6 = string;

export const value6Schema: Schema<Value6> = s.of<Value6>(s.union([s.string()]));
