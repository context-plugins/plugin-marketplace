import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV1CallPriceResponseSchema,
  type ApiV1CallPriceResponse,
} from "../models/api-v1-call-price-response.js";
import {
  apiV1CallPrice404Error1Schema,
  type ApiV1CallPrice404Error1,
} from "../models/api-v1-call-price404-error1.js";
import {
  apiV1CallPrice422Error1Schema,
  type ApiV1CallPrice422Error1,
} from "../models/api-v1-call-price422-error1.js";
import {
  apiV1CallsStatisticsResponseSchema,
  type ApiV1CallsStatisticsResponse,
} from "../models/api-v1-calls-statistics-response.js";
import {
  apiV1CallsStatistics403Error1Schema,
  type ApiV1CallsStatistics403Error1,
} from "../models/api-v1-calls-statistics403-error1.js";
import { apiV1Calls401Error1Schema, type ApiV1Calls401Error1 } from "../models/api-v1-calls401-error1.js";
import { apiV1Calls403Error1Schema, type ApiV1Calls403Error1 } from "../models/api-v1-calls403-error1.js";
import { cdrListResponseInternalSchema, type CdrListResponse } from "../models/cdr-list-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { hangupCause1Schema, type HangupCause1 } from "../models/hangup-cause1.js";
import { missedSchema, type Missed } from "../models/missed.js";
import { type1Schema, type Type1 } from "../models/type1.js";
import {
  apiV1CallsRecordingResponse1Schema,
  type ApiV1CallsRecordingResponse1,
} from "../models/unions/api-v1-calls-recording-response1.js";
import type { Servers } from "../servers.js";

export class Calls {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Quote the price of an outbound call
   *
   * @remarks
   * What a call from one of your SIP accounts to `b_number`, presenting `a_number` as the caller
   * ID, will be billed: the destination name, the per-minute price and the billing increment.
   *
   * The quote replays what the platform does to the call before it is billed: the SIP account's
   * destination rewrite, its caller-ID restrictions, routing rules and caller-ID overrides. It then
   * rates the call with the same code billing uses: exact prices, origin-based rates and markup
   * included.
   *
   * **Not modelled:**
   * - the carrier (trunk) chosen for the call, which can change the increment and, through the
   *   caller ID it presents, the price;
   * - blocklists and allowlists: a destination that would be refused is still quoted;
   * - where the platform picks a caller ID at random, the first candidate is used.
   *
   * Send `b_number` in E.164 (country code first). A national number is quoted only when the SIP
   * account has a rewrite rule that turns it into E.164.
   *
   * @returns The price and increment the call will be billed at
   *
   * @throws {@link Calls.CallPriceShowError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callPriceShow(
    request: Calls.CallPriceShowRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1CallPriceResponse, Calls.CallPriceShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/call_price"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "a_number", value: request.aNumber, schema: s.string() },
          { name: "b_number", value: request.bNumber, schema: s.string() },
          { name: "sipaccount", value: request.sipaccount, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CallPriceResponseSchema },
        errorFactory: Calls.CallPriceShowError,
      },
      options,
    );
  }

  /**
   * Download call recordings
   *
   * @remarks
   * Retrieves a single call recording file by its Call ID.
   *
   * > ⚠️ **Important:** this endpoint is a fallback mechanism designed for > recovering missing
   * recordings when a delivery webhook failed or its > short-lived URL expired. For production
   * workflows, always use > Call Recording Webhooks > instead of polling this API.
   *
   * The Call ID is all you need — the recording is searched for across the whole period your
   * account retains recordings, so a client that stored only the Call ID can download the file.
   *
   * ### Rate limits & quotas
   *
   * To prevent system overload, strict limits are enforced per user:
   *
   * - **Request frequency:** max 1 request per second.
   * - **Recording lookups:** max 1 lookup per minute.
   *
   * The per-minute quota is consumed by every search query, regardless of whether a recording is
   * found or the request returns `404 Not Found` — searching for the file is the operation that
   * costs resources.
   *
   * @throws {@link Calls.CallsRecordingError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsRecording(
    request: Calls.CallsRecordingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Calls.CallsRecordingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/calls/recording/{callid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "callid", value: request.callid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Calls.CallsRecordingError,
      },
      options,
    );
  }

  /**
   * Retrieve call detail records
   *
   * @remarks
   * Retrieve a list of call detail records (CDR) with filtering and pagination options.
   *
   * **Important notes:**
   * - Results can be filtered by date range, call type, phone numbers, SIP account, AMD status and
   *   hangup cause
   * - Supports both JSON and CSV export formats
   * - Use pagination for large result sets
   * - Statistics include total count, duration, and cost
   *
   * **When to use:**
   * - Generating call history reports
   * - Analyzing call patterns and costs
   * - Exporting billing data
   * - Monitoring SIP account usage
   *
   * See also: calls_statistics, totals for the same filters.
   *
   * @returns Successfully retrieved CDR records
   *
   * @throws {@link Calls.CallsShowError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsShow(
    request: Calls.CallsShowRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CdrListResponse, Calls.CallsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/calls"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type1Schema)) },
          { name: "missed", value: request.missed, schema: s.optional(s.lazy(() => missedSchema)) },
          { name: "from_search", value: request.fromSearch, schema: s.optional(s.string()) },
          { name: "to_search", value: request.toSearch, schema: s.optional(s.string()) },
          { name: "amd_status", value: request.amdStatus, schema: s.optional(s.string()) },
          {
            name: "hangup_cause",
            value: request.hangupCause,
            schema: s.optional(s.lazy(() => hangupCause1Schema)),
          },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "sip_account", value: request.sipAccount, schema: s.optional(s.string()) },
          { name: "from", value: request.from, schema: s.optional(s.dateOnly()) },
          { name: "to", value: request.to, schema: s.optional(s.dateOnly()) },
          { name: "all", value: request.all, schema: s.defaulted(s.boolean(), false) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 100) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cdrListResponseInternalSchema },
        errorFactory: Calls.CallsShowError,
      },
      options,
    );
  }

  /**
   * Get call statistics
   *
   * @remarks
   * Retrieve aggregated call statistics including totals and counts.
   *
   * **Response includes:**
   * - Placed calls: total cost and count
   * - Received calls: total cost and count
   * - Missed calls: count only
   * - All calls: combined total cost and count
   *
   * Rows: calls_show.
   *
   * @returns returns call statistics
   *
   * @throws {@link Calls.CallsStatisticsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  callsStatistics(
    request: Calls.CallsStatisticsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1CallsStatisticsResponse, Calls.CallsStatisticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/calls/statistics"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "to", value: request.to, schema: s.optional(s.string()) },
          { name: "sipfriend", value: request.sipfriend, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.int()) },
          { name: "amd_status", value: request.amdStatus, schema: s.optional(s.string()) },
          {
            name: "hangup_cause",
            value: request.hangupCause,
            schema: s.optional(s.lazy(() => hangupCause1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CallsStatisticsResponseSchema },
        errorFactory: Calls.CallsStatisticsError,
      },
      options,
    );
  }
}

export namespace Calls {
  export type CallPriceShowRequest = {
    /** Caller ID the call presents; up to 5 digits means anonymous */
    aNumber: string;
    /** Number to call, E.164 (a leading + is accepted) */
    bNumber: string;
    /** SIP account name from sipaccounts_index, the account placing the call */
    sipaccount: string;
  };

  export class CallPriceShowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1CallPrice404Error1", ApiV1CallPrice404Error1>
      | Declared<"apiV1CallPrice422Error1", ApiV1CallPrice422Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CallPriceShowError> = [
      {
        on: 404,
        kind: "apiV1CallPrice404Error1",
        decode: { kind: "json", schema: apiV1CallPrice404Error1Schema },
      },
      {
        on: 422,
        kind: "apiV1CallPrice422Error1",
        decode: { kind: "json", schema: apiV1CallPrice422Error1Schema },
      },
    ];
  }

  export type CallsRecordingRequest = {
    /** Call ID of the recording (required). Inbound callids are the encrypted webhook value. */
    callid: string;
  };

  export class CallsRecordingError extends ApiError {
    declare readonly payload:
      | Declared<"error302", string>
      | Declared<"apiV1CallsRecordingResponse1", ApiV1CallsRecordingResponse1>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CallsRecordingError> = [
      { on: 302, kind: "error302", decode: { kind: "text", schema: s.string() } },
      {
        on: 403,
        kind: "apiV1CallsRecordingResponse1",
        decode: { kind: "json", schema: apiV1CallsRecordingResponse1Schema },
      },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CallsShowRequest = {
    /**
     * Filter by call type (sip = outbound SIP calls, web = outbound web calls, api = outbound API
     * calls, incoming = received calls)
     */
    type?: Type1;
    /** Include missed calls in results (0 = exclude, 1 = include) */
    missed?: Missed;
    /** Filter by caller phone number (partial match supported) */
    fromSearch?: string;
    /** Filter by destination phone number (partial match supported) */
    toSearch?: string;
    /**
     * Return only calls with this answering machine detection (AMD) verdict, matched ignoring case:
     * - `machine` — AMD detected an answering machine
     * - `human` — AMD detected a person
     * - `notsure` — AMD ran but could not tell a machine from a person, for example on silence,
     *   unclear audio or a timeout
     *
     * Only outbound calls carry a verdict, so `type=incoming` with this filter returns no calls. A
     * value that no call has returns no calls. A malformed value, for example one with `|` or
     * non-ASCII characters, is ignored, as if the parameter were not sent.
     */
    amdStatus?: string;
    /**
     * Return only calls that ended this way, matched ignoring case:
     * - `AMD_MACHINE` — AMD detected an answering machine; takes precedence over the other values
     * - `NORMAL_CLEARING` — the call was answered
     * - `NO_ANSWER` — nobody answered, including calls the caller cancelled before an answer
     * - `BUSY` — the called party was busy
     * - `FAILED` — the call could not be connected
     *
     * A value that no call has returns no calls. A malformed value, for example one with `|` or
     * non-ASCII characters, is ignored, as if the parameter were not sent.
     */
    hangupCause?: HangupCause1;
    /** Filter by phone number (alphanumeric, spaces, hyphens, underscores) */
    filter?: string;
    /** SIP account name from sipaccounts_index */
    sipAccount?: string;
    /** Start date for filtering (inclusive). Format YYYY-MM-DD */
    from?: string;
    /** End date for filtering (inclusive). Format YYYY-MM-DD */
    to?: string;
    /**
     * Return all records (ignores pagination). Use with caution for large datasets.
     *
     * @default false
     */
    all?: boolean;
    /** Page number to retrieve (1-based) @default 1 */
    page?: number;
    /** Number of records per page (max 1000) @default 100 */
    perPage?: number;
  };

  export const callsShowRequestSchema: Schema<CallsShowRequest> = s.lazySchema(() =>
    s.object<CallsShowRequest>({
      type: s.optional(s.lazy(() => type1Schema)),
      missed: s.optional(s.lazy(() => missedSchema)),
      fromSearch: s.optional(s.string()),
      toSearch: s.optional(s.string()),
      amdStatus: s.optional(s.string()),
      hangupCause: s.optional(s.lazy(() => hangupCause1Schema)),
      filter: s.optional(s.string().check(s.pattern("^[a-zA-Z0-9 \\-_]+$"))),
      sipAccount: s.optional(s.string()),
      from: s.optional(s.dateOnly()),
      to: s.optional(s.dateOnly()),
      all: s.defaulted(s.boolean(), false),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      perPage: s.defaulted(s.int().check(s.gte(1), s.lte(1000)), 100),
    }),
  );

  export class CallsShowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Calls401Error1", ApiV1Calls401Error1>
      | Declared<"apiV1Calls403Error1", ApiV1Calls403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CallsShowError> = [
      { on: 401, kind: "apiV1Calls401Error1", decode: { kind: "json", schema: apiV1Calls401Error1Schema } },
      { on: 403, kind: "apiV1Calls403Error1", decode: { kind: "json", schema: apiV1Calls403Error1Schema } },
    ];
  }

  export type CallsStatisticsRequest = {
    /** Start date for filtering (YYYY-MM-DD) */
    from?: string;
    /** End date for filtering (YYYY-MM-DD) */
    to?: string;
    /** SIP account name from sipaccounts_index */
    sipfriend?: string;
    /** Search term for filtering calls */
    search?: number;
    /**
     * Count only calls with this answering machine detection (AMD) verdict, matched ignoring case:
     * - `machine` — AMD detected an answering machine
     * - `human` — AMD detected a person
     * - `notsure` — AMD ran but could not tell a machine from a person, for example on silence,
     *   unclear audio or a timeout
     *
     * Only outbound calls carry a verdict, so under this filter the received and missed counts and
     * the received total are 0. A value that no call has gives zero counts and totals. A malformed
     * value, for example one with `|` or non-ASCII characters, is ignored, as if the parameter were
     * not sent.
     */
    amdStatus?: string;
    /**
     * Count only calls that ended this way, matched ignoring case:
     * - `AMD_MACHINE` — AMD detected an answering machine; takes precedence over the other values
     * - `NORMAL_CLEARING` — the call was answered
     * - `NO_ANSWER` — nobody answered, including calls the caller cancelled before an answer
     * - `BUSY` — the called party was busy
     * - `FAILED` — the call could not be connected
     *
     * A value that no call has gives zero counts and totals. A malformed value, for example one
     * with `|` or non-ASCII characters, is ignored, as if the parameter were not sent.
     */
    hangupCause?: HangupCause1;
  };

  export class CallsStatisticsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1CallsStatistics403Error1", ApiV1CallsStatistics403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CallsStatisticsError> = [
      {
        on: 403,
        kind: "apiV1CallsStatistics403Error1",
        decode: { kind: "json", schema: apiV1CallsStatistics403Error1Schema },
      },
    ];
  }
}
