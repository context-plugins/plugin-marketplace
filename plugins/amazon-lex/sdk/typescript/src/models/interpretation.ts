import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { confidenceScoreSchema, type ConfidenceScore } from "./confidence-score.js";
import { intentSchema, type Intent } from "./intent.js";
import { interpretationSourceSchema, type InterpretationSource } from "./interpretation-source.js";
import { sentimentResponseSchema, type SentimentResponse } from "./sentiment-response.js";

export type Interpretation = {
  nluConfidence?: ConfidenceScore;
  sentimentResponse?: SentimentResponse;
  intent?: Intent;
  /** Specifies the service that interpreted the input. */
  interpretationSource?: InterpretationSource;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const interpretationSchema: Schema<Interpretation> = s.object<Interpretation>(
  {
    nluConfidence: s.optional(s.lazy(() => confidenceScoreSchema)),
    sentimentResponse: s.optional(s.lazy(() => sentimentResponseSchema)),
    intent: s.optional(s.lazy(() => intentSchema)),
    interpretationSource: s.optional(s.lazy(() => interpretationSourceSchema)),
  },
  { additionalProperties: s.json() },
);
