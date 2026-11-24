import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputSchema, type Input } from "./unions/input.js";
import { outputSchema, type Output } from "./unions/output.js";

/**
 * Moderation results for the response input and output, if moderated completions were requested.
 */
export type Moderation = {
  input: Input;
  output: Output;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const moderationSchema: Schema<Moderation> = s.object<Moderation>(
  {
    input: inputSchema,
    output: outputSchema,
  },
  { additionalProperties: s.json() },
);
