import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Result of POST /v1/watches/test (the pre-create dry-run). */
export type WatchTestResult = {
  /** True when the page was rendered. */
  ok?: boolean;
  /** True when the page could be read (not blocked/errored). */
  reachable?: boolean;
  /** Capture format (png/jpeg/webp/pdf). */
  format?: string;
  /** Navigated page HTTP status (URL mode; null for geo). */
  httpStatus?: number | null;
  /** Whether the geo (Decodo) render path was used. */
  usedGeo?: boolean;
  /** Signed URL of the captured screenshot (short-lived). */
  screenshotUrl?: string | null;
  /** Text a text-watch would compare (text mode only). */
  extractedText?: string | null;
  capturedAt?: Date;
  /** Actionable reason when reachable is false (blocked / needs login / HTTP error). */
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const watchTestResultProperties: s.Shape<WatchTestResult> = {
  ok: s.optional(s.boolean()),
  reachable: s.optional(s.boolean()),
  format: s.optional(s.string()),
  httpStatus: s.optionalNullable(s.int()),
  usedGeo: s.optional(s.boolean()),
  screenshotUrl: s.optionalNullable(s.string()),
  extractedText: s.optionalNullable(s.string()),
  capturedAt: s.optional(s.dateTime()),
  reason: s.optional(s.string()),
};

export const watchTestResultInternalSchema: Schema<WatchTestResult> = s.object<WatchTestResult>(
  watchTestResultProperties,
  { additionalProperties: s.json() },
);

export const watchTestResultSchema: Schema<WatchTestResult> = s.lazySchema(() =>
  s.object<WatchTestResult>(
    {
      ...watchTestResultProperties,
      screenshotUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
