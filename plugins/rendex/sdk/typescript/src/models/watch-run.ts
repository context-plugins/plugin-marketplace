import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";
import {
  statusRendexRenderingWatchApiSchema,
  type StatusRendexRenderingWatchApi,
} from "./status-rendex-rendering-watch-api.js";
import { textDiffSchema, type TextDiff } from "./text-diff.js";
import { watchChangedRegionSchema, type WatchChangedRegion } from "./watch-changed-region.js";

/**
 * One execution of a watch. Image URLs are short-lived signed links and may 404 for runs older than
 * the bucket lifecycle.
 */
export type WatchRun = {
  id?: string;
  watchId?: string;
  status?: StatusRendexRenderingWatchApi;
  /** Null until the run completes */
  changed?: boolean;
  /** 0..1 fraction of the page that changed; null for text-only or failed runs */
  diffScore?: number;
  diffPixels?: number;
  /** Signed "before" baseline capture */
  beforeUrl?: string;
  /** Signed "after" capture */
  afterUrl?: string;
  /** Signed highlighted overlay */
  diffOverlayUrl?: string;
  /**
   * Signed image cropped tight to the change ("what changed") — post straight into Slack/a ticket.
   * Null when the run had no discrete visual region (dimensions-only or text-only change).
   */
  cropUrl?: string | null;
  /** Normalized (0..1) union box of the changed regions. Null when there is no discrete region. */
  changedRegion?: WatchChangedRegion | null;
  /**
   * One-line plain-English "what changed" summary (Pro+; AI from the text diff, or a templated line
   * from the changed region for visual-only changes). Same value the watch.changed webhook
   * `summary` field carries. Null when unavailable.
   */
  aiSummary?: string | null;
  /** Present for text/both runs; null otherwise */
  textDiff?: TextDiff;
  /** Net credits charged for this run (0 after a refund or for the demo account) */
  creditsCharged?: number;
  /** Free-text failure reason when status is failed */
  error?: string;
  /**
   * Structured failure reason; null until/unless the run fails. Branch on this instead of parsing
   * error.
   */
  errorCode?: ErrorCode;
  createdAt?: Date;
  completedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const watchRunProperties: s.Shape<WatchRun> = {
  id: s.optional(s.string()),
  watchId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusRendexRenderingWatchApiSchema)),
  changed: s.optional(s.boolean()),
  diffScore: s.optional(s.float64()),
  diffPixels: s.optional(s.int()),
  beforeUrl: s.optional(s.string()),
  afterUrl: s.optional(s.string()),
  diffOverlayUrl: s.optional(s.string()),
  cropUrl: s.optionalNullable(s.string()),
  changedRegion: s.optionalNullable(s.lazy(() => watchChangedRegionSchema)),
  aiSummary: s.optionalNullable(s.string()),
  textDiff: s.optional(s.lazy(() => textDiffSchema)),
  creditsCharged: s.optional(s.int()),
  error: s.optional(s.string()),
  errorCode: s.optional(s.lazy(() => errorCodeSchema)),
  createdAt: s.optional(s.dateTime()),
  completedAt: s.optional(s.dateTime()),
};

export const watchRunInternalSchema: Schema<WatchRun> = s.object<WatchRun>(watchRunProperties, {
  additionalProperties: s.json(),
});

export const watchRunSchema: Schema<WatchRun> = s.lazySchema(() =>
  s.object<WatchRun>(
    {
      ...watchRunProperties,
      beforeUrl: s.optional(s.string().check(s.url())),
      afterUrl: s.optional(s.string().check(s.url())),
      diffOverlayUrl: s.optional(s.string().check(s.url())),
      cropUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
