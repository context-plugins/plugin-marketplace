import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightBreakdownRowSchema, type InsightBreakdownRow } from "./insight-breakdown-row.js";
import { rangeSchema, type Range } from "./range.js";
import { timelineSchema, type Timeline } from "./timeline.js";

/** The same computation the dashboard's Insights page renders. Epoch-millisecond timestamps. */
export type FormInsights = {
  range: Range;
  total: number;
  firstAt?: number | null;
  lastAt?: number | null;
  medianDurationMs?: number | null;
  durationCount?: number;
  lastSevenDays?: number;
  previousSevenDays?: number;
  sevenDayChange?: number | null;
  sampled?: boolean;
  versionCount?: number;
  legacyHistoryIncomplete?: boolean;
  timeline: Timeline[];
  sources: InsightBreakdownRow[];
  surfaces: InsightBreakdownRow[];
  /** started, completed, excluded, completionRate, multiPage, and a per-page reached/pct list. */
  funnel?: Record<string, unknown> | null;
  /** open, identified, and byPage — the same counts the drafts endpoint returns. */
  drafts?: Record<string, unknown> | null;
  /**
   * One entry per field ever answered: id, label, kind, inCurrentSchema, answered, skipped,
   * fillRate, and a `summary` discriminated on `type` (choice, multi, ranking, scale, number,
   * boolean, matrix, text, date, file, generic).
   */
  fields: Record<string, unknown>[];
  /**
   * Present when `by` is supplied: the cohort's size, share, its own `fields`, and the
   * `differences` that separate it from the baseline.
   */
  segment?: Record<string, unknown> | null;
  /** True when `by` named a field the current data cannot segment on. */
  segmentIgnored?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formInsightsSchema: Schema<FormInsights> = s.object<FormInsights>(
  {
    range: rangeSchema,
    total: s.int(),
    firstAt: s.optionalNullable(s.int()),
    lastAt: s.optionalNullable(s.int()),
    medianDurationMs: s.optionalNullable(s.int()),
    durationCount: s.optional(s.int()),
    lastSevenDays: s.optional(s.int()),
    previousSevenDays: s.optional(s.int()),
    sevenDayChange: s.optionalNullable(s.float64()),
    sampled: s.optional(s.boolean()),
    versionCount: s.optional(s.int()),
    legacyHistoryIncomplete: s.optional(s.boolean()),
    timeline: s.array(s.lazy(() => timelineSchema)),
    sources: s.array(s.lazy(() => insightBreakdownRowSchema)),
    surfaces: s.array(s.lazy(() => insightBreakdownRowSchema)),
    funnel: s.optionalNullable(s.record(s.string(), s.unknown())),
    drafts: s.optionalNullable(s.record(s.string(), s.unknown())),
    fields: s.array(s.record(s.string(), s.unknown())),
    segment: s.optionalNullable(s.record(s.string(), s.unknown())),
    segmentIgnored: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
