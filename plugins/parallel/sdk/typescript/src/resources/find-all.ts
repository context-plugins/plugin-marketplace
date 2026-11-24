import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { findAllEnrichInputSchema, type FindAllEnrichInput } from "../models/find-all-enrich-input.js";
import {
  findAllEntitySearchRequestInternalSchema,
  type FindAllEntitySearchRequest,
} from "../models/find-all-entity-search-request.js";
import {
  findAllEntitySearchResponseSchema,
  type FindAllEntitySearchResponse,
} from "../models/find-all-entity-search-response.js";
import { findAllExtendInputSchema, type FindAllExtendInput } from "../models/find-all-extend-input.js";
import { findAllRunInputInternalSchema, type FindAllRunInput } from "../models/find-all-run-input.js";
import { findAllRunResultSchema, type FindAllRunResult } from "../models/find-all-run-result.js";
import { findAllRunSchema, type FindAllRun } from "../models/find-all-run.js";
import { findAllSchemaSchema, type FindAllSchema } from "../models/find-all-schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { ingestInputSchema, type IngestInput } from "../models/ingest-input.js";
import { lastEventId1Schema, type LastEventId1 } from "../models/unions/last-event-id1.js";
import { parallelBeta1Schema, type ParallelBeta1 } from "../models/unions/parallel-beta1.js";
import {
  response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGetSchema,
  type Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet,
} from "../models/unions/response200-get-findall-events-v1-beta-findall-runs-findall-id-events-get.js";
import { timeoutSchema, type Timeout } from "../models/unions/timeout.js";
import type { Servers } from "../servers.js";

/**
 * The FindAll API discovers and evaluates entities that match complex criteria from natural
 * language objectives. Submit a high-level goal and the service automatically generates structured
 * match conditions, discovers relevant candidates, and evaluates each against the criteria. Returns
 * comprehensive results with detailed reasoning, citations, and confidence scores for each match
 * decision. Streaming events and webhooks are supported.
 */
export class FindAll {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel FindAll Run
   *
   * @remarks
   * Cancel a FindAll run.
   *
   * @returns FindAll run cancelled successfully.
   *
   * @throws {@link FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelFindallRunV1BetaFindallRunsFindallIdCancelPost(
    request: FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/findall/runs/{findall_id}/cancel"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "findall_id", value: request.findallId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FindAll.CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError,
      },
      options,
    );
  }

  /**
   * Add Enrichment to FindAll Run
   *
   * @remarks
   * Add an enrichment to a FindAll run.
   *
   * @returns Successful Response
   *
   * @throws {@link FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enrichFindallRunV1BetaFindallRunsFindallIdEnrichPost(
    request: FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest,
    options?: RequestOptions,
  ): ApiPromise<FindAllSchema, FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/findall/runs/{findall_id}/enrich"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "findall_id", value: request.findallId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: findAllEnrichInputSchema },
      },
      {
        success: { kind: "json", schema: findAllSchemaSchema },
        errorFactory: FindAll.EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError,
      },
      options,
    );
  }

  /**
   * Extend FindAll Run
   *
   * @remarks
   * Extend a FindAll run by adding additional matches to the current match limit.
   *
   * @returns Successful Response
   *
   * @throws {@link FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  extendFindallRunV1BetaFindallRunsFindallIdExtendPost(
    request: FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest,
    options?: RequestOptions,
  ): ApiPromise<FindAllSchema, FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/findall/runs/{findall_id}/extend"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "findall_id", value: request.findallId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: findAllExtendInputSchema },
      },
      {
        success: { kind: "json", schema: findAllSchemaSchema },
        errorFactory: FindAll.ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError,
      },
      options,
    );
  }

  /**
   * Fast Entity Search
   *
   * @remarks
   * Return ranked entities matching a natural language objective.
   *
   * This endpoint performs a best-effort search optimized for low latency. To keep responses fast,
   * it returns a fixed set of attributes and supports queries of limited complexity.
   *
   * For comprehensive match evaluation and enrichment, use the FindAll API.
   *
   * @returns Successful Response
   *
   * @throws {@link FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  findallEntitySearchV1BetaFindallEntitySearchPost(
    request: FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostRequest,
    options?: RequestOptions,
  ): ApiPromise<FindAllEntitySearchResponse, FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/findall/entity-search"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: findAllEntitySearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: findAllEntitySearchResponseSchema },
        errorFactory: FindAll.FindallEntitySearchV1BetaFindallEntitySearchPostError,
      },
      options,
    );
  }

  /**
   * Retrieve FindAll Run Status
   *
   * @remarks
   * Retrieve a FindAll run.
   *
   * @returns Successful Response
   *
   * @throws {@link FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  findallRunsV1GetV1BetaFindallRunsFindallIdGet(
    request: FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FindAllRun, FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/findall/runs/{findall_id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "findall_id", value: request.findallId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: findAllRunSchema },
        errorFactory: FindAll.FindallRunsV1GetV1BetaFindallRunsFindallIdGetError,
      },
      options,
    );
  }

  /**
   * Create FindAll Run
   *
   * @remarks
   * Starts a FindAll run.
   *
   * This endpoint immediately returns a FindAll run object with status set to 'queued'. You can get
   * the run result snapshot using the GET /v1beta/findall/runs/{findall_id}/result endpoint. You
   * can track the progress of the run by:
   * - Polling the status using the GET /v1beta/findall/runs/{findall_id} endpoint,
   * - Subscribing to real-time updates via the /v1beta/findall/runs/{findall_id}/events endpoint,
   * - Or specifying a webhook with relevant event types during run creation to receive
   *   notifications.
   *
   * @returns Successful Response
   *
   * @throws {@link FindAll.FindallRunsV1V1BetaFindallRunsPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  findallRunsV1V1BetaFindallRunsPost(
    request: FindAll.FindallRunsV1V1BetaFindallRunsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<FindAllRun, FindAll.FindallRunsV1V1BetaFindallRunsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/findall/runs"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: findAllRunInputInternalSchema },
      },
      {
        success: { kind: "json", schema: findAllRunSchema },
        errorFactory: FindAll.FindallRunsV1V1BetaFindallRunsPostError,
      },
      options,
    );
  }

  /**
   * Stream FindAll Events
   *
   * @remarks
   * Stream events from a FindAll run.
   *
   * Args: request: The Shapi request findall_id: The FindAll run ID last_event_id: Optional event
   * ID to resume from. timeout: Optional timeout in seconds. If None, keep connection alive as long
   * as the run is going. If set, stop after specified duration.
   *
   * @returns Successful Response
   *
   * @throws {@link FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFindallEventsV1BetaFindallRunsFindallIdEventsGet(
    request: FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    EventStream<Response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGet>,
    FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/findall/runs/{findall_id}/events"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "findall_id", value: request.findallId, schema: s.string() }],
        query: [
          {
            name: "last_event_id",
            value: request.lastEventId,
            schema: s.optional(s.lazy(() => lastEventId1Schema)),
          },
          { name: "timeout", value: request.timeout, schema: s.optional(s.lazy(() => timeoutSchema)) },
        ],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "eventStreamJson",
          dataSchema: response200GetFindallEventsV1BetaFindallRunsFindallIdEventsGetSchema,
        },
        errorFactory: FindAll.GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError,
      },
      options,
    );
  }

  /**
   * FindAll Run Result
   *
   * @remarks
   * Retrieve the FindAll run result at the time of the request.
   *
   * @returns Successful Response
   *
   * @throws {@link FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFindallResultV1BetaFindallRunsFindallIdResultGet(
    request: FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FindAllRunResult, FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/findall/runs/{findall_id}/result"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "findall_id", value: request.findallId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: findAllRunResultSchema },
        errorFactory: FindAll.GetFindallResultV1BetaFindallRunsFindallIdResultGetError,
      },
      options,
    );
  }

  /**
   * Get FindAll Run Schema
   *
   * @returns Successful Response
   *
   * @throws {@link FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFindallSchemaV1BetaFindallRunsFindallIdSchemaGet(
    request: FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest,
    options?: RequestOptions,
  ): ApiPromise<FindAllSchema, FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/findall/runs/{findall_id}/schema"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "findall_id", value: request.findallId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: findAllSchemaSchema },
        errorFactory: FindAll.GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError,
      },
      options,
    );
  }

  /**
   * Ingest FindAll Run
   *
   * @remarks
   * Transforms a natural language search objective into a structured FindAll spec.
   *
   * The generated specification serves as a suggested starting point and can be further customized
   * by the user.
   *
   * @returns Successful Response
   *
   * @throws {@link FindAll.IngestFindallRunV1BetaFindallIngestPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ingestFindallRunV1BetaFindallIngestPost(
    request: FindAll.IngestFindallRunV1BetaFindallIngestPostRequest,
    options?: RequestOptions,
  ): ApiPromise<FindAllSchema, FindAll.IngestFindallRunV1BetaFindallIngestPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/findall/ingest"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "parallel-beta",
            value: request.parallelBeta,
            schema: s.optional(s.lazy(() => parallelBeta1Schema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: ingestInputSchema },
      },
      {
        success: { kind: "json", schema: findAllSchemaSchema },
        errorFactory: FindAll.IngestFindallRunV1BetaFindallIngestPostError,
      },
      options,
    );
  }
}

export namespace FindAll {
  export type CancelFindallRunV1BetaFindallRunsFindallIdCancelPostRequest = {
    findallId: string;
    /**
     * @deprecated
     */
    parallelBeta?: ParallelBeta1;
  };

  export class CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelFindallRunV1BetaFindallRunsFindallIdCancelPostError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostRequest = {
    findallId: string;
    /**
     * @deprecated
     */
    parallelBeta?: ParallelBeta1;
    body: FindAllEnrichInput;
  };

  export class EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnrichFindallRunV1BetaFindallRunsFindallIdEnrichPostError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostRequest = {
    findallId: string;
    /**
     * @deprecated
     */
    parallelBeta?: ParallelBeta1;
    body: FindAllExtendInput;
  };

  export class ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExtendFindallRunV1BetaFindallRunsFindallIdExtendPostError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type FindallEntitySearchV1BetaFindallEntitySearchPostRequest = {
    body: FindAllEntitySearchRequest;
  };

  export class FindallEntitySearchV1BetaFindallEntitySearchPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<FindallEntitySearchV1BetaFindallEntitySearchPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type FindallRunsV1GetV1BetaFindallRunsFindallIdGetRequest = {
    findallId: string;
    /**
     * @deprecated
     */
    parallelBeta?: ParallelBeta1;
  };

  export class FindallRunsV1GetV1BetaFindallRunsFindallIdGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<FindallRunsV1GetV1BetaFindallRunsFindallIdGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type FindallRunsV1V1BetaFindallRunsPostRequest = {
    /**
     * @deprecated
     */
    parallelBeta?: ParallelBeta1;
    body: FindAllRunInput;
  };

  export class FindallRunsV1V1BetaFindallRunsPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<FindallRunsV1V1BetaFindallRunsPostError> = [
      { on: 402, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetFindallEventsV1BetaFindallRunsFindallIdEventsGetRequest = {
    findallId: string;
    lastEventId?: LastEventId1;
    timeout?: Timeout;
    /**
     * @deprecated
     */
    parallelBeta?: ParallelBeta1;
  };

  export class GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFindallEventsV1BetaFindallRunsFindallIdEventsGetError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetFindallResultV1BetaFindallRunsFindallIdResultGetRequest = {
    findallId: string;
    /**
     * @deprecated
     */
    parallelBeta?: ParallelBeta1;
  };

  export class GetFindallResultV1BetaFindallRunsFindallIdResultGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetFindallResultV1BetaFindallRunsFindallIdResultGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetRequest = {
    findallId: string;
    /**
     * @deprecated
     */
    parallelBeta?: ParallelBeta1;
  };

  export class GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type IngestFindallRunV1BetaFindallIngestPostRequest = {
    /**
     * @deprecated
     */
    parallelBeta?: ParallelBeta1;
    body: IngestInput;
  };

  export class IngestFindallRunV1BetaFindallIngestPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<IngestFindallRunV1BetaFindallIngestPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
