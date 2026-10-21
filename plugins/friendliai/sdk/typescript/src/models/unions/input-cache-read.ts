import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Price per 1 cached input token read in USD. */
export type InputCacheRead = string;

export const inputCacheReadSchema: Schema<InputCacheRead> = s.of<InputCacheRead>(s.union([s.string()]));
