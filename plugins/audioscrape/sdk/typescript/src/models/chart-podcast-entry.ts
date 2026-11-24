import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChartPodcastEntry = {
  countryCode: string;
  dateChecked: string;
  imageUrl?: string | null;
  platform?: string | null;
  podcastId: number;
  rank?: number | null;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chartPodcastEntrySchema: Schema<ChartPodcastEntry> = s.object<ChartPodcastEntry>(
  {
    countryCode: s.string(),
    dateChecked: s.string(),
    imageUrl: s.optionalNullable(s.string()),
    platform: s.optionalNullable(s.string()),
    podcastId: s.int(),
    rank: s.optionalNullable(s.int()),
    slug: s.string(),
    title: s.string(),
    _keysMap: {
      countryCode: "country_code",
      dateChecked: "date_checked",
      imageUrl: "image_url",
      podcastId: "podcast_id",
    },
  },
  { additionalProperties: s.json() },
);
