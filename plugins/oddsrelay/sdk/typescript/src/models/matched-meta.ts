import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oddsFormatSchema, type OddsFormat } from "./odds-format.js";
import { processedAt1Schema, type ProcessedAt1 } from "./unions/processed-at1.js";

export type MatchedMeta = {
  feedType: string;
  region: string;
  oddsFormat: OddsFormat;
  /** The board time (`X-Processed-At`). */
  processedAt: ProcessedAt1;
  /**
   * `{bookmaker key: {sport key base: ISO-8601 Z}}`: the last instant each venue and sport was
   * read, the oldest observation behind the board, so `now - last_seen` is an upper bound on that
   * venue's price age. The region's venues only, cut to a filtered body's venues and sports; always
   * ISO; absent until the board carries the table; never on `format=bare`.
   */
  lastSeen?: Record<string, string>;
  /** Events in `data`. */
  count: number;
  /** @default "v2" */
  version?: "v2";
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const matchedMetaSchema: Schema<MatchedMeta> = s.object<MatchedMeta>(
  {
    feedType: s.string(),
    region: s.string(),
    oddsFormat: oddsFormatSchema,
    processedAt: processedAt1Schema,
    lastSeen: s.optional(s.record(s.string(), s.string())),
    count: s.int(),
    version: s.defaulted(s.literal("v2"), "v2"),
    nextCursor: s.nullable(s.string()),
    _keysMap: {
      feedType: "feed_type",
      oddsFormat: "odds_format",
      processedAt: "processed_at",
      lastSeen: "last_seen",
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
