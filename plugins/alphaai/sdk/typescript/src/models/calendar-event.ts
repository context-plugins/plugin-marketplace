import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventKeySchema, type EventKey } from "./event-key.js";
import { importanceSchema, type Importance } from "./importance.js";
import { newsCategorySchema, type NewsCategory } from "./news-category.js";
import { phaseSchema, type Phase } from "./phase.js";
import { scheduleBasisSchema, type ScheduleBasis } from "./schedule-basis.js";
import { scheduleStatusSchema, type ScheduleStatus } from "./schedule-status.js";

/**
 * One scheduled occurrence of a US macro release. `uid` is a stable, opaque occurrence id —
 * reschedules update the row in place, so the uid is safe to store and link. `phase` is computed
 * against request time and only says whether the scheduled moment passed; check `schedule_status`
 * first (a `cancelled` row's phase is meaningless).
 */
export type CalendarEvent = {
  uid?: string;
  eventKey?: EventKey;
  title?: string;
  /**
   * What the release covers, machine-readable: a month (`2026-07`), a quarter (`2026-Q2`), or — for
   * weekly claims — the reference week-ending Saturday (`2026-07-25`).
   */
  referencePeriod?: string;
  /** GDP only — `advance`, `second` or `third`; null elsewhere. */
  releaseStage?: string | null;
  /** Official release moment (UTC; 08:30 / 10:00 / 14:00 ET converted). */
  scheduledAt?: Date;
  phase?: Phase;
  scheduleStatus?: ScheduleStatus;
  /**
   * `official`: the date is printed on the agency's own schedule page. `inferred`: derived from the
   * documented publication cadence — weekly jobless claims (DOL publishes no forward schedule) and
   * FOMC minutes dates the Fed has not printed yet (three weeks after the meeting). Inferred dates
   * flip to official once the agency lists them.
   */
  scheduleBasis?: ScheduleBasis;
  importance?: Importance;
  /**
   * `market_movers` is for articles whose subject IS a notable price move ("AMD up 5% today");
   * `sector_analysis` is genuine sector-level analysis; `insider` covers SEC Form 4 insider
   * transactions only. SEC 8-K filings categorize by their primary item: an earnings release (Item
   * 2.02) is `earnings`, a completed acquisition or disposition (Item 2.01) is
   * `mergers_acquisitions`, and the remaining events (material agreements, debt, executive changes,
   * annual-meeting results, and since 2026-09-17 securities offerings, Regulation FD disclosures
   * and other events under Items 7.01/8.01) are `corporate_actions`. A foreign private issuer's SEC
   * 6-K appears only when it is an earnings release (`source` "SEC EDGAR 6-K") and is always
   * `earnings`.
   */
  category?: NewsCategory;
  country?: string;
  /** The agency's own schedule page for the series. */
  sourceUrl?: string;
  /** FOMC decisions only — the 14:30 ET press conference; null elsewhere. */
  pressConferenceAt?: Date | null;
  /**
   * FOMC decisions only — true when the meeting carries a Summary of Economic Projections (the "dot
   * plot").
   */
  hasSep?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const calendarEventProperties: s.Shape<CalendarEvent> = {
  uid: s.optional(s.string()),
  eventKey: s.optional(s.lazy(() => eventKeySchema)),
  title: s.optional(s.string()),
  referencePeriod: s.optional(s.string()),
  releaseStage: s.optionalNullable(s.string()),
  scheduledAt: s.optional(s.dateTime()),
  phase: s.optional(s.lazy(() => phaseSchema)),
  scheduleStatus: s.optional(s.lazy(() => scheduleStatusSchema)),
  scheduleBasis: s.optional(s.lazy(() => scheduleBasisSchema)),
  importance: s.optional(s.lazy(() => importanceSchema)),
  category: s.optional(s.lazy(() => newsCategorySchema)),
  country: s.optional(s.string()),
  sourceUrl: s.optional(s.string()),
  pressConferenceAt: s.optionalNullable(s.dateTime()),
  hasSep: s.optional(s.boolean()),
  _keysMap: {
    eventKey: "event_key",
    referencePeriod: "reference_period",
    releaseStage: "release_stage",
    scheduledAt: "scheduled_at",
    scheduleStatus: "schedule_status",
    scheduleBasis: "schedule_basis",
    sourceUrl: "source_url",
    pressConferenceAt: "press_conference_at",
    hasSep: "has_sep",
  },
};

export const calendarEventInternalSchema: Schema<CalendarEvent> = s.object<CalendarEvent>(
  calendarEventProperties,
  { additionalProperties: s.json() },
);

export const calendarEventSchema: Schema<CalendarEvent> = s.lazySchema(() =>
  s.object<CalendarEvent>(
    {
      ...calendarEventProperties,
      sourceUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
