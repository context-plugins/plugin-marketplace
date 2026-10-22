import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single
 * request, pass an array of strings or array of token arrays.
 *
 * Either `input` or `tokens` field is required.
 */
export type Input3 = string | string[];

export const input3Schema: Schema<Input3> = s.of<Input3>(s.union([s.string(), s.array(s.string())]));
