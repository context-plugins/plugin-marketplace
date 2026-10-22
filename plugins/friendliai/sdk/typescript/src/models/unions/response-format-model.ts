import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responseFormatJsonObjectSchema,
  type ResponseFormatJsonObject,
} from "../response-format-json-object.js";
import {
  responseFormatJsonSchemaSchema,
  type ResponseFormatJsonSchema,
} from "../response-format-json-schema.js";
import { responseFormatRegexSchema, type ResponseFormatRegex } from "../response-format-regex.js";
import { responseFormatTextSchema, type ResponseFormatText } from "../response-format-text.js";

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
 * **When `response_format` is specified, `min_tokens` field is unsupported.**
 */
export type ResponseFormatModel =
  | (ResponseFormatJsonObject & { type: "json_object" })
  | (ResponseFormatJsonSchema & { type: "json_schema" })
  | (ResponseFormatRegex & { type: "regex" })
  | (ResponseFormatText & { type: "text" });

export const responseFormatModelSchema: Schema<ResponseFormatModel> =
  s.discriminatedUnion<ResponseFormatModel>("type", {
    json_object: responseFormatJsonObjectSchema,
    json_schema: responseFormatJsonSchemaSchema,
    regex: responseFormatRegexSchema,
    text: responseFormatTextSchema,
  });
