import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorSchema, type DetailedError } from "./detailed-error.js";
import { iosRankingItemSchema, type IosRankingItem } from "./ios-ranking-item.js";

export type ApiResponseListModelsResponsesResponseIosRankingItem = {
  data?: IosRankingItem[];
  errors?: DetailedError[];
  /** @default 0 */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiResponseListModelsResponsesResponseIosRankingItemSchema: Schema<ApiResponseListModelsResponsesResponseIosRankingItem> =
  s.object<ApiResponseListModelsResponsesResponseIosRankingItem>(
    {
      data: s.optional(s.array(s.lazy(() => iosRankingItemSchema))),
      errors: s.optional(s.array(s.lazy(() => detailedErrorSchema))),
      totalCount: s.defaulted(s.int(), 0),
      _keysMap: {
        totalCount: "total_count",
      },
    },
    { additionalProperties: s.json() },
  );
