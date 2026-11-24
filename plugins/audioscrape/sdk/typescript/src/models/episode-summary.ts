import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EpisodeSummary = {
  durationSeconds?: number | null;
  hasTranscript: boolean;
  id: number;
  podcastTitle?: string | null;
  publishDate: string;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const episodeSummarySchema: Schema<EpisodeSummary> = s.object<EpisodeSummary>(
  {
    durationSeconds: s.optionalNullable(s.int()),
    hasTranscript: s.boolean(),
    id: s.int(),
    podcastTitle: s.optionalNullable(s.string()),
    publishDate: s.string(),
    slug: s.string(),
    title: s.string(),
    _keysMap: {
      durationSeconds: "duration_seconds",
      hasTranscript: "has_transcript",
      podcastTitle: "podcast_title",
      publishDate: "publish_date",
    },
  },
  { additionalProperties: s.json() },
);
