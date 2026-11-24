import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortAlphAiRestRadarApi = {
  Score: "score",
  Stories: "stories",
  ModelStories: "model_stories",
  Sentiment: "sentiment",
  SentimentChange: "sentiment_change",
} as const;
export type SortAlphAiRestRadarApi =
  | (typeof SortAlphAiRestRadarApi)[keyof typeof SortAlphAiRestRadarApi]
  | (string & {});

export const sortAlphAiRestRadarApiSchema: EnumSchema<SortAlphAiRestRadarApi> =
  s.enumOf<SortAlphAiRestRadarApi>(SortAlphAiRestRadarApi);
