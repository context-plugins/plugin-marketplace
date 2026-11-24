import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postStatsSchema, type PostStats } from "./post-stats.js";

export type PostsAggregateStatsResponseStats = {
  /**
   * Optional list of stats for a post. Retrievable by including `expand: [stats]` in the post
   * request body. <br><br> **Note:** If a timeout occurs while aggregating stats, subsequent
   * requests may return consolidated click metrics rather than individual raw click metrics.
   */
  stats: PostStats;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postsAggregateStatsResponseStatsSchema: Schema<PostsAggregateStatsResponseStats> =
  s.object<PostsAggregateStatsResponseStats>(
    {
      stats: postStatsSchema,
    },
    { additionalProperties: s.json() },
  );
