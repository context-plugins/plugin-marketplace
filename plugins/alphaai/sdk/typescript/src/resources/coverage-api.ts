import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { coverageSchema, type Coverage } from "../models/coverage.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * What each data source holds — from when, how dense, with which caveats.
 */
export class CoverageApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Coverage passport — what each data source holds, from when, with which caveats
   *
   * @remarks
   * One object per data source: `publisher_news` (the GDELT stream, RSS feeds and directly parsed
   * publisher pages), `sec_form4`, `sec_form8k`, `sec_form6k`, `earnings_reads`,
   * `earnings_schedule` and `economic_calendar`. Each carries its earliest and latest row, the last
   * ingest time, the row count in the source's own unit, the collector's cadence, a history note
   * saying where the history is thin, the known limits, and the per-plan archive horizon. Read this
   * before backtesting or promising coverage downstream: `first_row_at` is the earliest row we
   * hold, NOT the start of dense coverage — `history_note` says which months are thin (publisher
   * news densified in June 2026; Form 4 before May 2026 is an unenriched replay; 8-K history starts
   * June 2026; 6-K and earnings reads start 2026-07-28).
   *
   * The passport is computed once a day (03:50 UTC) and served from a cache: `as_of` is when the
   * counts were taken and `generated_at` when the payload was assembled, so both describe the
   * computation, never the response. Rows may be up to a day newer than `last_row_at`. On a cold
   * cache the first caller computes it (a few seconds); a concurrent caller gets `503` with
   * `Retry-After` instead of a second scan.
   *
   * `stale` is an honest flag, not an alert: true when the newest ingest is older than
   * `stale_after_seconds` — six poll cycles for the collectors, three days for SEC filings (EDGAR
   * takes no filings on weekends), ten days for earnings reads — or, for the economic calendar
   * (`stale_after_seconds` null), when no future occurrence is held. `publisher_news` additionally
   * reports each discovery channel (`gkg`, `rss`) with its own last ingest and flag.
   * `research_only` restates that everything described here is AI-generated financial information
   * for research, not investment advice.
   *
   * @returns The passport, one object per source in a fixed order.
   *
   * @throws {@link CoverageApi.GetApiCoverageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AlphaAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiCoverage(options?: RequestOptions): ApiPromise<Coverage, CoverageApi.GetApiCoverageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/coverage/"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: coverageSchema },
        errorFactory: CoverageApi.GetApiCoverageError,
      },
      options,
    );
  }
}

export namespace CoverageApi {
  export class GetApiCoverageError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiCoverageError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
