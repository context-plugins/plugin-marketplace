import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oddsFormatSchema, type OddsFormat } from "./odds-format.js";
import { processedAtSchema, type ProcessedAt } from "./unions/processed-at.js";

export type RawMeta = {
  /** @default "raw" */
  feedType?: "raw";
  region: string;
  oddsFormat: OddsFormat;
  /** ISO-8601 UTC, or epoch seconds under `dateFormat=unix`. */
  processedAt: ProcessedAt;
  /** Events on this page. */
  count: number;
  version: string;
  nextCursor: string | null;
  /** Events matching the query, all pages. */
  total: number;
  /** The page's `X-OddsRelay-Version`. */
  boardVersion: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rawMetaSchema: Schema<RawMeta> = s.object<RawMeta>(
  {
    feedType: s.defaulted(s.literal("raw"), "raw"),
    region: s.string(),
    oddsFormat: oddsFormatSchema,
    processedAt: processedAtSchema,
    count: s.int(),
    version: s.string(),
    nextCursor: s.nullable(s.string()),
    total: s.int(),
    boardVersion: s.nullable(s.int()),
    _keysMap: {
      feedType: "feed_type",
      oddsFormat: "odds_format",
      processedAt: "processed_at",
      nextCursor: "next_cursor",
      boardVersion: "board_version",
    },
  },
  { additionalProperties: s.json() },
);
