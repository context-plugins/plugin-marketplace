import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RecommendationJidScreenApi = {
  Engage: "engage",
  VerifyFirst: "verify_first",
  DoNotEngage: "do_not_engage",
} as const;
export type RecommendationJidScreenApi =
  | (typeof RecommendationJidScreenApi)[keyof typeof RecommendationJidScreenApi]
  | (string & {});

export const recommendationJidScreenApiSchema: EnumSchema<RecommendationJidScreenApi> =
  s.enumOf<RecommendationJidScreenApi>(RecommendationJidScreenApi);
