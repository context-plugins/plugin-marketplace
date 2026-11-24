import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PodcastSummary = {
  episodeCount: number;
  id: number;
  imageUrl?: string | null;
  language?: string | null;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastSummarySchema: Schema<PodcastSummary> = s.object<PodcastSummary>(
  {
    episodeCount: s.int(),
    id: s.int(),
    imageUrl: s.optionalNullable(s.string()),
    language: s.optionalNullable(s.string()),
    slug: s.string(),
    title: s.string(),
    _keysMap: {
      episodeCount: "episode_count",
      imageUrl: "image_url",
    },
  },
  { additionalProperties: s.json() },
);
