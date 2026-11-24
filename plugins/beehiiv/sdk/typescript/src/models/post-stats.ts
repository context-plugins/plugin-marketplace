import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clickStatsSchema, type ClickStats } from "./click-stats.js";
import { postStatsEmailSchema, type PostStatsEmail } from "./post-stats-email.js";
import { postStatsWebSchema, type PostStatsWeb } from "./post-stats-web.js";

/**
 * Optional list of stats for a post. Retrievable by including `expand: [stats]` in the post request
 * body. <br><br> **Note:** If a timeout occurs while aggregating stats, subsequent requests may
 * return consolidated click metrics rather than individual raw click metrics.
 */
export type PostStats = {
  /** Stats scoped only to email recipients. Not relevant for posts published only to web */
  email?: PostStatsEmail;
  /** Stats scoped only to web views. Not relevant for posts published only to email */
  web?: PostStatsWeb;
  /** An array of click statistics for each URL in the post */
  clicks?: ClickStats[];
  /**
   * Total number of free-to-premium upgrades attributed to this post. Only populated when the
   * publication has a paid subscription tier.
   *
   * @default 0
   */
  upgrades?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postStatsSchema: Schema<PostStats> = s.object<PostStats>(
  {
    email: s.optional(s.lazy(() => postStatsEmailSchema)),
    web: s.optional(s.lazy(() => postStatsWebSchema)),
    clicks: s.optional(s.array(s.lazy(() => clickStatsSchema))),
    upgrades: s.defaulted(s.int(), 0),
  },
  { additionalProperties: s.json() },
);
