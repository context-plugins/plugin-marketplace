import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorSchema, type DetailedError } from "./detailed-error.js";
import { playRankingItemSchema, type PlayRankingItem } from "./play-ranking-item.js";

export type ApiResponseListModelsResponsesResponsePlayRankingItem = {
  data?: PlayRankingItem[];
  errors?: DetailedError[];
  /** @default 0 */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiResponseListModelsResponsesResponsePlayRankingItemSchema: Schema<ApiResponseListModelsResponsesResponsePlayRankingItem> =
  s.object<ApiResponseListModelsResponsesResponsePlayRankingItem>(
    {
      data: s.optional(s.array(s.lazy(() => playRankingItemSchema))),
      errors: s.optional(s.array(s.lazy(() => detailedErrorSchema))),
      totalCount: s.defaulted(s.int(), 0),
      _keysMap: {
        totalCount: "total_count",
      },
    },
    { additionalProperties: s.json() },
  );
