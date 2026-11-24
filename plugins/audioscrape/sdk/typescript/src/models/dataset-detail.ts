import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatasetDetail = {
  description?: string | null;
  episodeCount: number;
  id: number;
  libraryName: string;
  librarySlug: string;
  name: string;
  podcastCount: number;
  slug: string;
  visibility: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetDetailSchema: Schema<DatasetDetail> = s.object<DatasetDetail>(
  {
    description: s.optionalNullable(s.string()),
    episodeCount: s.int(),
    id: s.int(),
    libraryName: s.string(),
    librarySlug: s.string(),
    name: s.string(),
    podcastCount: s.int(),
    slug: s.string(),
    visibility: s.string(),
    _keysMap: {
      episodeCount: "episode_count",
      libraryName: "library_name",
      librarySlug: "library_slug",
      podcastCount: "podcast_count",
    },
  },
  { additionalProperties: s.json() },
);
