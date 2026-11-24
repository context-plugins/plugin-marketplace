import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SentenceScore = {
  end?: number;
  score?: number;
  sentence?: string;
  start?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sentenceScoreSchema: Schema<SentenceScore> = s.object<SentenceScore>(
  {
    end: s.optional(s.int()),
    score: s.optional(s.float64()),
    sentence: s.optional(s.string()),
    start: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
