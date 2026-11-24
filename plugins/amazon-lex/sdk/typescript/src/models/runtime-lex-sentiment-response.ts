import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeLexSentimentResponse = {
  /** The inferred sentiment that Amazon Comprehend has the highest confidence in. */
  sentimentLabel?: string;
  /** The likelihood that the sentiment was correctly inferred. */
  sentimentScore?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexSentimentResponseSchema: Schema<RuntimeLexSentimentResponse> =
  s.object<RuntimeLexSentimentResponse>(
    {
      sentimentLabel: s.optional(s.string()),
      sentimentScore: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
