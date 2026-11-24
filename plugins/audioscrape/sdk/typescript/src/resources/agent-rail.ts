import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { agentSearchRequestSchema, type AgentSearchRequest } from "../models/agent-search-request.js";
import {
  agentTranscribeRequestSchema,
  type AgentTranscribeRequest,
} from "../models/agent-transcribe-request.js";
import { buyCreditRequestSchema, type BuyCreditRequest } from "../models/buy-credit-request.js";
import type { Servers } from "../servers.js";

/**
 * Pay-as-you-go answers for AI agents over HTTP 402: a pay-as-you-go workspace balance topped up by
 * card or Link through the Machine Payments Protocol (Stripe), and x402 (USDC per call) where the
 * 402 offers it. A first top-up opens the workspace and returns its API key and a claim link.
 * Subscribers' keys are served within the plan. Price list: GET /api/agent/v1
 */
export class AgentRail {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Tops up a pay-as-you-go balance (MPP or x402); without a key, opens the…
   *
   * @returns Paid: the balance; on a first top-up also the workspace API key and a claim link
   * (shown once)
   *
   * @throws {@link AgentRail.BuyCreditError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  buyCredit(
    request: AgentRail.BuyCreditRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AgentRail.BuyCreditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/agent/v1/credits"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: buyCreditRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: AgentRail.BuyCreditError,
      },
      options,
    );
  }

  /**
   * The workspace's balance and recent movements (free)
   *
   * @returns Pricing mode, balance in micro-dollars and the last 20 entries
   *
   * @throws {@link AgentRail.CreditBalanceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  creditBalance(options?: RequestOptions): ApiPromise<undefined, AgentRail.CreditBalanceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/agent/v1/credits"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AgentRail.CreditBalanceError,
      },
      options,
    );
  }

  /**
   * Paid transcript excerpt around a moment
   *
   * @returns Segments around the moment and a link to it
   *
   * @throws {@link AgentRail.ExcerptError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  excerpt(
    request: AgentRail.ExcerptRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AgentRail.ExcerptError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/agent/v1/excerpt"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [
          { name: "episode_id", value: request.episodeId, schema: s.int() },
          { name: "t", value: request.t, schema: s.float64() },
          { name: "seconds", value: request.seconds, schema: s.optionalNullable(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AgentRail.ExcerptError,
      },
      options,
    );
  }

  /**
   * The free, machine-readable price list
   *
   * @returns Prices, payment protocols and limits for AI agents
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  manifest(options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/agent/v1"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Paid overview of one recording
   *
   * @returns Chapters, top entities and duration
   *
   * @throws {@link AgentRail.OverviewError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  overview(
    request: AgentRail.OverviewRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AgentRail.OverviewError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/agent/v1/overview"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [{ name: "episode_id", value: request.episodeId, schema: s.int() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AgentRail.OverviewError,
      },
      options,
    );
  }

  /**
   * Paid search
   *
   * @returns Matching segments with links to the moment (empty results are free)
   *
   * @throws {@link AgentRail.SearchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(
    request: AgentRail.SearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AgentRail.SearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/agent/v1/search"),
        auth: orAnonymous(this.#auth.bearerAuth),
        pathParams: [],
        query: [{ name: "scope", value: request.scope, schema: s.optionalNullable(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentSearchRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: AgentRail.SearchError,
      },
      options,
    );
  }

  /**
   * Transcribes a recording into the key's workspace
   *
   * @returns Accepted: job_id to poll at /api/agent/v1/transcriptions/{job_id}
   *
   * @throws {@link AgentRail.TranscribeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transcribe(
    request: AgentRail.TranscribeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AgentRail.TranscribeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/agent/v1/transcribe"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentTranscribeRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: AgentRail.TranscribeError,
      },
      options,
    );
  }

  /**
   * The state of a transcription job in the key's workspace (free)
   *
   * @returns Status; 'waiting' with a reason when the balance or allowance falls short
   *
   * @throws {@link AgentRail.TranscriptionStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  transcriptionStatus(
    request: AgentRail.TranscriptionStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AgentRail.TranscriptionStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/agent/v1/transcriptions/{job_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AgentRail.TranscriptionStatusError,
      },
      options,
    );
  }
}

export namespace AgentRail {
  export type BuyCreditRequestParams = {
    body: BuyCreditRequest;
  };

  export class BuyCreditError extends ApiError {
    declare readonly payload:
      | Declared<"error402", undefined>
      | Declared<"error409", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BuyCreditError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export class CreditBalanceError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreditBalanceError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type ExcerptRequest = {
    /** Recording id (from a search result). */
    episodeId: number;
    /** Moment in seconds. */
    t: number;
    /** Seconds after the moment, 10–180 (default 90). */
    seconds?: number | null;
  };

  export class ExcerptError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ExcerptError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type OverviewRequest = {
    /** Recording id (from a search result). */
    episodeId: number;
  };

  export class OverviewError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<OverviewError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type SearchRequestParams = {
    /**
     * `podcasts`, or `government` (public meetings and court hearings). Unset: the whole record.
     */
    scope?: string | null;
    body: AgentSearchRequest;
  };

  export class SearchError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type TranscribeRequest = {
    body: AgentTranscribeRequest;
  };

  export class TranscribeError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TranscribeError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type TranscriptionStatusRequest = {
    /** Job id from /api/agent/v1/transcribe */
    jobId: number;
  };

  export class TranscriptionStatusError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TranscriptionStatusError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
