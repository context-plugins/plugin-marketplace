import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastSummarySchema, type PodcastSummary } from "./podcast-summary.js";

export type PodcastList = {
  limit: number;
  offset: number;
  podcasts: PodcastSummary[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastListSchema: Schema<PodcastList> = s.object<PodcastList>(
  {
    limit: s.int(),
    offset: s.int(),
    podcasts: s.array(s.lazy(() => podcastSummarySchema)),
    total: s.int(),
  },
  { additionalProperties: s.json() },
);
