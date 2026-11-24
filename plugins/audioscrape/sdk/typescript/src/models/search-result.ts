import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { episodeSchema, type Episode } from "./episode.js";
import { podcastSchema, type Podcast } from "./podcast.js";
import { resultUrlsSchema, type ResultUrls } from "./result-urls.js";
import { timestampSchema, type Timestamp } from "./timestamp.js";

export type SearchResult = {
  episode: Episode;
  highlightedText?: string | null;
  podcast: Podcast;
  score: number;
  segmentId: string;
  speaker?: string | null;
  text: string;
  timestamp: Timestamp;
  urls: ResultUrls;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchResultSchema: Schema<SearchResult> = s.object<SearchResult>(
  {
    episode: episodeSchema,
    highlightedText: s.optionalNullable(s.string()),
    podcast: podcastSchema,
    score: s.float64(),
    segmentId: s.string(),
    speaker: s.optionalNullable(s.string()),
    text: s.string(),
    timestamp: timestampSchema,
    urls: resultUrlsSchema,
    _keysMap: {
      highlightedText: "highlighted_text",
      segmentId: "segment_id",
    },
  },
  { additionalProperties: s.json() },
);
