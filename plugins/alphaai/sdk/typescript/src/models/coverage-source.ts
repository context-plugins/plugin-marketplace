import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coverageArchiveDaysSchema, type CoverageArchiveDays } from "./coverage-archive-days.js";
import { coverageChannelSchema, type CoverageChannel } from "./coverage-channel.js";
import { sourceSchema, type Source } from "./source.js";

export type CoverageSource = {
  source: Source;
  /**
   * Earliest row by the source's own clock (article publish time, filing acceptance time, scheduled
   * date at 00:00 UTC). The earliest row we hold, NOT the start of continuous coverage — see
   * `history_note`.
   */
  firstRowAt?: Date | null;
  /**
   * Latest row by the same clock. For `earnings_schedule` and `economic_calendar` this reaches into
   * the future (scheduled dates).
   */
  lastRowAt?: Date | null;
  /**
   * Arrival clock: when the newest row landed (`created_at`); for `earnings_schedule` the sync's
   * last touch, for `economic_calendar` the last change to the calendar.
   */
  lastIngestedAt?: Date | null;
  /**
   * Rows in the source's own unit: articles for `publisher_news`, distinct filings (accession
   * numbers) for `sec_form4`, filings for `sec_form8k` / `sec_form6k`, published reads for
   * `earnings_reads`, confirmed dates for `earnings_schedule`, occurrences for `economic_calendar`.
   */
  rowsTotal: number;
  /** How and how often the source is collected, in plain words. */
  cadence: string;
  /**
   * Where the history is thin or starts: the caveat you would otherwise discover by probing the
   * feed.
   */
  historyNote: string;
  /** Known scope limits of the source (what is deliberately not collected). */
  limits: string[];
  /**
   * How far back a key on each plan can page the news feeds into this source's rows; `null` where
   * the archive gate does not apply (`earnings_reads`, `earnings_schedule`, `economic_calendar` are
   * served by endpoints that page back freely).
   */
  archiveDays?: CoverageArchiveDays | null;
  /**
   * `true` when `last_ingested_at` is older than `stale_after_seconds`, or — for
   * `economic_calendar`, where `stale_after_seconds` is null — when no future occurrence is held.
   * An honest flag, not an alert.
   */
  stale: boolean;
  /**
   * The horizon `stale` keys on: six poll cycles for the collectors, three days for SEC filings,
   * ten days for earnings reads; `null` for the economic calendar.
   */
  staleAfterSeconds?: number | null;
  /** Only on `publisher_news` — the two discovery channels. */
  channels?: CoverageChannel[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coverageSourceSchema: Schema<CoverageSource> = s.object<CoverageSource>(
  {
    source: sourceSchema,
    firstRowAt: s.optionalNullable(s.dateTime()),
    lastRowAt: s.optionalNullable(s.dateTime()),
    lastIngestedAt: s.optionalNullable(s.dateTime()),
    rowsTotal: s.int(),
    cadence: s.string(),
    historyNote: s.string(),
    limits: s.array(s.string()),
    archiveDays: s.optionalNullable(s.lazy(() => coverageArchiveDaysSchema)),
    stale: s.boolean(),
    staleAfterSeconds: s.optionalNullable(s.int()),
    channels: s.optionalNullable(s.array(s.lazy(() => coverageChannelSchema))),
    _keysMap: {
      firstRowAt: "first_row_at",
      lastRowAt: "last_row_at",
      lastIngestedAt: "last_ingested_at",
      rowsTotal: "rows_total",
      historyNote: "history_note",
      archiveDays: "archive_days",
      staleAfterSeconds: "stale_after_seconds",
    },
  },
  { additionalProperties: s.json() },
);
