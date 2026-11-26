import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { radarCalculationParamsSchema, type RadarCalculationParams } from "./radar-calculation-params.js";
import { radarContextSummarySchema, type RadarContextSummary } from "./radar-context-summary.js";
import { radarReadingSchema, type RadarReading } from "./radar-reading.js";
import { radarSignalAccessSchema, type RadarSignalAccess } from "./radar-signal-access.js";
import { radarSnapshotFreshnessSchema, type RadarSnapshotFreshness } from "./radar-snapshot-freshness.js";
import { radarSnapshotSummarySchema, type RadarSnapshotSummary } from "./radar-snapshot-summary.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";
import { nextOffsetSchema, type NextOffset } from "./unions/next-offset.js";
import { previewReferenceAtSchema, type PreviewReferenceAt } from "./unions/preview-reference-at.js";
import { previousCursorSchema, type PreviousCursor } from "./unions/previous-cursor.js";
import { watchlistCoverageSchema, type WatchlistCoverage } from "./unions/watchlist-coverage.js";
import { windowSchema, type Window } from "./window.js";

export type SnapshotPreviewDto = {
  snapshotId: string;
  methodologyVersion: string;
  /** @default true */
  researchOnly?: boolean;
  /** @default false */
  pointInTime?: boolean;
  asOf: Date;
  previewReferenceAt: PreviewReferenceAt;
  freshness: RadarSnapshotFreshness;
  access: RadarSignalAccess;
  window: Window;
  parameters: RadarCalculationParams;
  limitations: string[];
  inputHashes: Record<string, string>;
  universe: number;
  summary: RadarSnapshotSummary;
  watchlistCoverage: WatchlistCoverage;
  total: number;
  offset: number;
  nextOffset: NextOffset;
  nextCursor: NextCursor;
  previousCursor: PreviousCursor;
  results: RadarReading[];
  /** Context availability and timing for the selected snapshot, without ticker data. */
  eventContext?: RadarContextSummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const snapshotPreviewDtoSchema: Schema<SnapshotPreviewDto> = s.object<SnapshotPreviewDto>(
  {
    snapshotId: s.string(),
    methodologyVersion: s.string(),
    researchOnly: s.defaulted(s.boolean(), true),
    pointInTime: s.defaulted(s.boolean(), false),
    asOf: s.dateTime(),
    previewReferenceAt: previewReferenceAtSchema,
    freshness: radarSnapshotFreshnessSchema,
    access: radarSignalAccessSchema,
    window: windowSchema,
    parameters: radarCalculationParamsSchema,
    limitations: s.array(s.string()),
    inputHashes: s.record(s.string(), s.string()),
    universe: s.int(),
    summary: radarSnapshotSummarySchema,
    watchlistCoverage: watchlistCoverageSchema,
    total: s.int(),
    offset: s.int(),
    nextOffset: nextOffsetSchema,
    nextCursor: nextCursorSchema,
    previousCursor: previousCursorSchema,
    results: s.array(s.lazy(() => radarReadingSchema)),
    eventContext: s.optional(s.lazy(() => radarContextSummarySchema)),
    _keysMap: {
      snapshotId: "snapshot_id",
      methodologyVersion: "methodology_version",
      researchOnly: "research_only",
      pointInTime: "point_in_time",
      asOf: "as_of",
      previewReferenceAt: "preview_reference_at",
      inputHashes: "input_hashes",
      watchlistCoverage: "watchlist_coverage",
      nextOffset: "next_offset",
      nextCursor: "next_cursor",
      previousCursor: "previous_cursor",
      eventContext: "event_context",
    },
  },
  { additionalProperties: s.json() },
);
