import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseFormat11ModelSchema, type ResponseFormat11Model } from "./response-format11-model.js";

/**
 * The enforced format of the model's output.
 *
 * Note that the content of the output message may be truncated if it exceeds the `max_tokens`. You
 * can check this by verifying that the `finish_reason` of the output message is `length`.
 *
 * For more detailed information, please refer
 * [here](https://friendli.ai/docs/guides/structured-outputs).
 *
 * ***Important*** You must explicitly instruct the model to produce the desired output format using
 * a system prompt or user message (e.g., `You are an API generating a valid JSON as output.`).
 * Otherwise, the model may result in an unending stream of whitespace or other characters.
 *
 * **This field is unsupported when `tools` is specified.** **When `response_format` is specified,
 * `min_tokens` field is unsupported.**
 */
export type ResponseFormat113 = ResponseFormat11Model;

export const responseFormat113Schema: Schema<ResponseFormat113> = s.of<ResponseFormat113>(
  s.union([s.lazy(() => responseFormat11ModelSchema)]),
);
