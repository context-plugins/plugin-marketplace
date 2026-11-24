import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SentimentAlphAiRestRadarApi = {
  All: "all",
  Positive: "positive",
  Negative: "negative",
  Mixed: "mixed",
} as const;
export type SentimentAlphAiRestRadarApi =
  | (typeof SentimentAlphAiRestRadarApi)[keyof typeof SentimentAlphAiRestRadarApi]
  | (string & {});

export const sentimentAlphAiRestRadarApiSchema: EnumSchema<SentimentAlphAiRestRadarApi> =
  s.enumOf<SentimentAlphAiRestRadarApi>(SentimentAlphAiRestRadarApi);
