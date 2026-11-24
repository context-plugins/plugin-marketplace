import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  postsAggregateStatsResponseStatsSchema,
  type PostsAggregateStatsResponseStats,
} from "./posts-aggregate-stats-response-stats.js";

export type PostsAggregateStatsResponse = {
  data: PostsAggregateStatsResponseStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postsAggregateStatsResponseSchema: Schema<PostsAggregateStatsResponse> =
  s.object<PostsAggregateStatsResponse>(
    {
      data: postsAggregateStatsResponseStatsSchema,
    },
    { additionalProperties: s.json() },
  );
