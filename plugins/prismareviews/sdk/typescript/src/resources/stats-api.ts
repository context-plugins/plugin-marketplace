import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { platformIdSchema, type PlatformId } from "../models/platform-id.js";
import { statsSchema, type Stats } from "../models/stats.js";
import { sinceSchema, type Since } from "../models/unions/since.js";
import { untilSchema, type Until } from "../models/unions/until.js";
import type { Servers } from "../servers.js";

/**
 * Review statistics per workspace, location or platform.
 */
export class StatsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a location's review stats
   *
   * @remarks
   * The same statistics as `GET /v1/stats`, for one location.
   *
   * @returns The stats.
   *
   * @throws {@link StatsApi.GetLocationStatsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLocationStats(
    request: StatsApi.GetLocationStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<Stats, StatsApi.GetLocationStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/locations/{id}/stats"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "since", value: request.since, schema: s.optional(s.lazy(() => sinceSchema)) },
          { name: "until", value: request.until, schema: s.optional(s.lazy(() => untilSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statsSchema },
        errorFactory: StatsApi.GetLocationStatsError,
      },
      options,
    );
  }

  /**
   * Get review stats
   *
   * @remarks
   * Review statistics for your workspace in the mode of your key: count, average rating, reviews
   * per star, replies, reply rate, median reply time, unanswered negative reviews and a
   * month-by-month series. Filter by location or platform.
   *
   * @returns The stats.
   *
   * @throws {@link StatsApi.GetStatsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStats(
    request: StatsApi.GetStatsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Stats, StatsApi.GetStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/stats"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "platform", value: request.platform, schema: s.optional(s.lazy(() => platformIdSchema)) },
          { name: "since", value: request.since, schema: s.optional(s.lazy(() => sinceSchema)) },
          { name: "until", value: request.until, schema: s.optional(s.lazy(() => untilSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statsSchema },
        errorFactory: StatsApi.GetStatsError,
      },
      options,
    );
  }
}

export namespace StatsApi {
  export type GetLocationStatsRequest = {
    /** Location ID (`loc_…`). */
    id: string;
    /**
     * Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601
     * timestamp with offset. Default: 12 months before `until`.
     */
    since?: Since;
    /** End of the period (not included). Default: now. */
    until?: Until;
  };

  export class GetLocationStatsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLocationStatsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 422, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetStatsRequest = {
    /** Only this location. */
    locationId?: string;
    /** Only this platform. */
    platform?: PlatformId;
    /**
     * Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601
     * timestamp with offset. Default: 12 months before `until`.
     */
    since?: Since;
    /** End of the period (not included). Default: now. */
    until?: Until;
  };

  export class GetStatsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStatsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 422, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
