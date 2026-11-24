import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { episodeSummarySchema, type EpisodeSummary } from "./episode-summary.js";

export type EpisodeList = {
  episodes: EpisodeSummary[];
  limit: number;
  offset: number;
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const episodeListSchema: Schema<EpisodeList> = s.object<EpisodeList>(
  {
    episodes: s.array(s.lazy(() => episodeSummarySchema)),
    limit: s.int(),
    offset: s.int(),
    total: s.int(),
  },
  { additionalProperties: s.json() },
);
