import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Input text to classify, encoded as a string or array of strings. To classify multiple inputs in a
 * single request, pass an array of strings.
 *
 * Either `input` or `tokens` field is required.
 */
export type Input2 = string | string[];

export const input2Schema: Schema<Input2> = s.of<Input2>(s.union([s.string(), s.array(s.string())]));
