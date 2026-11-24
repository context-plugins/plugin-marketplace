import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Library = {
  curator?: string | null;
  datasetCount: number;
  description?: string | null;
  episodeCount: number;
  /** Whether the calling user is a member of this library. */
  isSubscribed: boolean;
  name: string;
  /** Stable URL slug, e.g. `audioscrape`. */
  slug: string;
  subscriberCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const librarySchema: Schema<Library> = s.object<Library>(
  {
    curator: s.optionalNullable(s.string()),
    datasetCount: s.int(),
    description: s.optionalNullable(s.string()),
    episodeCount: s.int(),
    isSubscribed: s.boolean(),
    name: s.string(),
    slug: s.string(),
    subscriberCount: s.int(),
    _keysMap: {
      datasetCount: "dataset_count",
      episodeCount: "episode_count",
      isSubscribed: "is_subscribed",
      subscriberCount: "subscriber_count",
    },
  },
  { additionalProperties: s.json() },
);
