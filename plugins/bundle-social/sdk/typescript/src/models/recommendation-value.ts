import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RecommendationValue = {
  Recommend: "RECOMMEND",
  NotRecommend: "NOT_RECOMMEND",
  Unknown: "UNKNOWN",
} as const;
export type RecommendationValue =
  | (typeof RecommendationValue)[keyof typeof RecommendationValue]
  | (string & {});

export const recommendationValueSchema: EnumSchema<RecommendationValue> =
  s.enumOf<RecommendationValue>(RecommendationValue);
