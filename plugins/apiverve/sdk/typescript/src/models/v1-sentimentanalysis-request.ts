import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SentimentanalysisRequest = {
  /** The text to analyze the sentiment of */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SentimentanalysisRequestSchema: Schema<V1SentimentanalysisRequest> =
  s.object<V1SentimentanalysisRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
