import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statsSchema, type Stats } from "./stats.js";

/**
 * One row of a listing. `url` is accepted as-is by the transcript and batch endpoints. The platform
 * is not repeated per row: the page's `platform` says it.
 */
export type Video2 = {
  videoId?: string;
  url?: string;
  title?: string;
  /** Seconds, when the source reports it. */
  duration?: number | null;
  channel?: string | null;
  /**
   * Upload time. Exact for TikTok, Instagram and podcasts; approximate on YouTube, whose listings
   * only say "2 days ago", so it is exact to the day for recent videos and up to a year off for old
   * ones.
   */
  publishedAt?: Date | null;
  /** Engagement counts where the source exposes them. */
  stats?: Stats | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const video2Properties: s.Shape<Video2> = {
  videoId: s.optional(s.string()),
  url: s.optional(s.string()),
  title: s.optional(s.string()),
  duration: s.optionalNullable(s.float64()),
  channel: s.optionalNullable(s.string()),
  publishedAt: s.optionalNullable(s.dateTime()),
  stats: s.optionalNullable(s.lazy(() => statsSchema)),
};

export const video2InternalSchema: Schema<Video2> = s.object<Video2>(video2Properties, {
  additionalProperties: s.json(),
});

export const video2Schema: Schema<Video2> = s.lazySchema(() =>
  s.object<Video2>(
    {
      ...video2Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
