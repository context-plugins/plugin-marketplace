import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetSummary = {
  description?: string | null;
  episodeCount: number;
  id: number;
  name: string;
  podcastCount: number;
  slug: string;
  /** `public`, `workspace`, or `private`. */
  visibility: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetSummarySchema: Schema<DatasetSummary> = s.object<DatasetSummary>(
  {
    description: s.optionalNullable(s.string()),
    episodeCount: s.int(),
    id: s.int(),
    name: s.string(),
    podcastCount: s.int(),
    slug: s.string(),
    visibility: s.string(),
    _keysMap: {
      episodeCount: "episode_count",
      podcastCount: "podcast_count",
    },
  },
  { additionalProperties: s.json() },
);
