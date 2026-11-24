import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TextsummarizerRequest = {
  /** The text to summarize (up to 5000 characters) */
  text: string;
  /** The length of the summary (number of sentences) */
  sentences?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TextsummarizerRequestSchema: Schema<V1TextsummarizerRequest> =
  s.object<V1TextsummarizerRequest>(
    {
      text: s.string(),
      sentences: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
