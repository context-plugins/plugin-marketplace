import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { feedDetailResponseSchema, type FeedDetailResponse } from "../models/feed-detail-response.js";
import { feedListResponseSchema, type FeedListResponse } from "../models/feed-list-response.js";
import {
  feedMethodologyResponseSchema,
  type FeedMethodologyResponse,
} from "../models/feed-methodology-response.js";
import { problemDetailSchema, type ProblemDetail } from "../models/problem-detail.js";
import { interval3Schema, type Interval3 } from "../models/unions/interval3.js";
import { period31Schema, type Period31 } from "../models/unions/period31.js";
import {
  v1OracleFeedsHistoryResponseSchema,
  type V1OracleFeedsHistoryResponse,
} from "../models/v1-oracle-feeds-history-response.js";
import type { Servers } from "../servers.js";

/**
 * Oracle economic feeds
 */
export class Feeds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get feed detail
   *
   * @remarks
   * Deep dive on a single feed with its latest value and methodology URL.
   *
   * @returns Default Response
   *
   * @throws {@link Feeds.GetFeedDetailError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFeedDetail(
    request: Feeds.GetFeedDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedDetailResponse, Feeds.GetFeedDetailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/feeds/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: feedDetailResponseSchema },
        errorFactory: Feeds.GetFeedDetailError,
      },
      options,
    );
  }

  /**
   * Get feed history
   *
   * @remarks
   * Time-series feed values from ClickHouse. Free tier limited to 7d. Pro/Growth up to 90d.
   *
   * @returns Default Response
   *
   * @throws {@link Feeds.GetFeedHistoryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFeedHistory(
    request: Feeds.GetFeedHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OracleFeedsHistoryResponse, Feeds.GetFeedHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/feeds/{id}/history"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "period", value: request.period, schema: s.optional(s.lazy(() => period31Schema)) },
          { name: "interval", value: request.interval, schema: s.optional(s.lazy(() => interval3Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OracleFeedsHistoryResponseSchema },
        errorFactory: Feeds.GetFeedHistoryError,
      },
      options,
    );
  }

  /**
   * Get feed methodology
   *
   * @remarks
   * Detailed methodology for a feed including computation formula, weights, and anchors.
   *
   * @returns Default Response
   *
   * @throws {@link Feeds.GetFeedMethodologyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFeedMethodology(
    request: Feeds.GetFeedMethodologyRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedMethodologyResponse, Feeds.GetFeedMethodologyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/feeds/{id}/methodology"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: feedMethodologyResponseSchema },
        errorFactory: Feeds.GetFeedMethodologyError,
      },
      options,
    );
  }

  /**
   * List all feeds
   *
   * @remarks
   * Current state of the agent economy — all 3 feed values with confidence and freshness.
   *
   * @returns Default Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAllFeeds(options?: RequestOptions): ApiPromise<FeedListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/feeds"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: feedListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Feeds {
  export type GetFeedDetailRequest = {
    /** Feed identifier (aegdp, aai, apri) */
    id: string;
  };

  export class GetFeedDetailError extends ApiError {
    declare readonly payload: Declared<"problemDetail", ProblemDetail> | Undeclared;

    static readonly errors: ErrorDecoders<GetFeedDetailError> = [
      { on: 404, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }

  export type GetFeedHistoryRequest = {
    /** Feed identifier (aegdp, aai, apri) */
    id: string;
    period?: Period31;
    interval?: Interval3;
  };

  export class GetFeedHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetail", ProblemDetail>
      | Declared<"problemDetail2", ProblemDetail>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFeedHistoryError> = [
      { on: 403, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
      { on: 404, kind: "problemDetail2", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }

  export type GetFeedMethodologyRequest = {
    /** Feed identifier (aegdp, aai, apri) */
    id: string;
  };

  export class GetFeedMethodologyError extends ApiError {
    declare readonly payload: Declared<"problemDetail", ProblemDetail> | Undeclared;

    static readonly errors: ErrorDecoders<GetFeedMethodologyError> = [
      { on: 404, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }
}
