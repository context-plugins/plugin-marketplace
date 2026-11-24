import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datasetSummarySchema, type DatasetSummary } from "./dataset-summary.js";

export type LibraryDetail = {
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
  datasets: DatasetSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const libraryDetailSchema: Schema<LibraryDetail> = s.object<LibraryDetail>(
  {
    curator: s.optionalNullable(s.string()),
    datasetCount: s.int(),
    description: s.optionalNullable(s.string()),
    episodeCount: s.int(),
    isSubscribed: s.boolean(),
    name: s.string(),
    slug: s.string(),
    subscriberCount: s.int(),
    datasets: s.array(s.lazy(() => datasetSummarySchema)),
    _keysMap: {
      datasetCount: "dataset_count",
      episodeCount: "episode_count",
      isSubscribed: "is_subscribed",
      subscriberCount: "subscriber_count",
    },
  },
  { additionalProperties: s.json() },
);
