import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EpisodeInPodcast = {
  durationSeconds?: number | null;
  hasTranscript: boolean;
  id: number;
  publishDate: string;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const episodeInPodcastSchema: Schema<EpisodeInPodcast> = s.object<EpisodeInPodcast>(
  {
    durationSeconds: s.optionalNullable(s.int()),
    hasTranscript: s.boolean(),
    id: s.int(),
    publishDate: s.string(),
    slug: s.string(),
    title: s.string(),
    _keysMap: {
      durationSeconds: "duration_seconds",
      hasTranscript: "has_transcript",
      publishDate: "publish_date",
    },
  },
  { additionalProperties: s.json() },
);
