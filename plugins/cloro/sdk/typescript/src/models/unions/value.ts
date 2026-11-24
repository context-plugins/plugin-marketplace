import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The value that the option puts in the follow-up prompt. It can differ from `label`. `true` for a
 * checkbox that stands alone.
 */
export type Value = string | boolean;

export const valueSchema: Schema<Value> = s.of<Value>(s.union([s.string(), s.boolean()]));
