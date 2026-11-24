import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { processedAtSchema, type ProcessedAt } from "./unions/processed-at.js";

export type PageMeta = {
  feedType: string;
  region: string;
  oddsFormat: string;
  /** ISO-8601 UTC, or epoch seconds under `dateFormat=unix`. */
  processedAt: ProcessedAt;
  /** Rows on this page. */
  count: number;
  version: string;
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pageMetaSchema: Schema<PageMeta> = s.object<PageMeta>(
  {
    feedType: s.string(),
    region: s.string(),
    oddsFormat: s.string(),
    processedAt: processedAtSchema,
    count: s.int(),
    version: s.string(),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      feedType: "feed_type",
      oddsFormat: "odds_format",
      processedAt: "processed_at",
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
