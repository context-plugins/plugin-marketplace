import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Price per cached input token read in USD. */
export type InputCacheRead1 = string;

export const inputCacheRead1Schema: Schema<InputCacheRead1> = s.of<InputCacheRead1>(s.union([s.string()]));
