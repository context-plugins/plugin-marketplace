import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { calendarEventsInternalSchema, type CalendarEvents } from "../models/calendar-events.js";
import { Country, countrySchema } from "../models/country.js";
import { errorSchema, type Error } from "../models/error.js";
import { importanceSchema, type Importance } from "../models/importance.js";
import type { Servers } from "../servers.js";

/**
 * Scheduled US macro releases (FOMC, CPI, jobs, GDP, PCE…).
 */
export class Calendar {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Scheduled US macro releases (economic calendar)
   *
   * @remarks
   * The official forward schedule of US macro releases: FOMC decisions (with SEP and
   * press-conference markers) and minutes, CPI, PPI, the jobs report (nonfarm payrolls), GDP
   * estimates (advance/second/third), PCE, advance retail sales, weekly jobless claims and JOLTS —
   * sourced from the agencies' own schedule pages (Fed, BLS, BEA, Census, DOL).
   *
   * Each occurrence carries a stable `uid` (`US-CPI-2026-07`) that survives reschedules: a moved
   * release keeps its identity, updates `scheduled_at` and reports `schedule_status`. `phase` says
   * only whether the scheduled moment has passed (`upcoming`/`elapsed`) — it deliberately does not
   * claim the agency actually published. Pair the calendar with `/api/news/macro/` to read what a
   * release meant once it's out.
   *
   * The window is `[from_date, to_date)` — from inclusive, to exclusive; date-only values mean UTC
   * midnight; defaults are today (UTC) → +7 days; the span is capped at 400 days. No pagination: a
   * full year of every series is ~250 rows (hard cap 500), ordered by `scheduled_at` ascending.
   * Cancelled and postponed occurrences stay in the response with their `schedule_status`.
   *
   * @returns Occurrences within the window, `scheduled_at` ascending.
   *
   * @throws {@link Calendar.GetApiCalendarError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiCalendar(
    request: Calendar.GetApiCalendarRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CalendarEvents, Calendar.GetApiCalendarError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/calendar/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "from_date", value: request.fromDate, schema: s.optional(s.string()) },
          { name: "to_date", value: request.toDate, schema: s.optional(s.string()) },
          { name: "event_key", value: request.eventKey, schema: s.optional(s.string()) },
          {
            name: "importance",
            value: request.importance,
            schema: s.optional(s.lazy(() => importanceSchema)),
          },
          { name: "country", value: request.country, schema: s.defaulted(countrySchema, Country.Us) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: calendarEventsInternalSchema },
        errorFactory: Calendar.GetApiCalendarError,
      },
      options,
    );
  }
}

export namespace Calendar {
  export type GetApiCalendarRequest = {
    /**
     * Window start, inclusive. `YYYY-MM-DD` (UTC midnight) or an ISO datetime (naive = UTC).
     * Default: today, UTC midnight.
     */
    fromDate?: string;
    /**
     * Window end, exclusive. Same formats. Default `from_date` + 7 days; span capped at 400 days.
     */
    toDate?: string;
    /** Narrow to specific series, comma-separated. Unknown keys return 400. */
    eventKey?: string;
    /** Narrow by importance tier. */
    importance?: Importance;
    /** v1 covers US releases only. @default Country.Us */
    country?: Country;
  };

  export class GetApiCalendarError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiCalendarError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
