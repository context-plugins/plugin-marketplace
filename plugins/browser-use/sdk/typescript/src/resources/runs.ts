import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiKeySpendLimitErrorSchema,
  type ApiKeySpendLimitError,
} from "../models/api-key-spend-limit-error.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  runAttachmentsResponseSchema,
  type RunAttachmentsResponse,
} from "../models/run-attachments-response.js";
import { runCreateRequestInternalSchema, type RunCreateRequest } from "../models/run-create-request.js";
import { runCreateResponseSchema, type RunCreateResponse } from "../models/run-create-response.js";
import { runEventsResponseSchema, type RunEventsResponse } from "../models/run-events-response.js";
import { runListResponseSchema, type RunListResponse } from "../models/run-list-response.js";
import { runStatusResponseSchema, type RunStatusResponse } from "../models/run-status-response.js";
import { runSummarySchema, type RunSummary } from "../models/run-summary.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import { sessionidSchema, type Sessionid } from "../models/unions/sessionid.js";
import type { Servers } from "../servers.js";

export class Runs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Run
   *
   * @remarks
   * Cancel an in-flight run.
   *
   * Idempotent: a run already in a terminal state (completed / failed / cancelled) is returned
   * as-is. Once cancelled, the gateway refuses every subsequent `chat_completions` call from the
   * worker — so the project cannot be billed further regardless of whether the worker subprocess
   * notices the cancel itself.
   *
   * The worker keeps running for at most one more bcode step (consuming no LLM tokens because CP
   * 409s them) and then exits when bcode realizes the next tool call has no model behind it.
   *
   * @returns Successful Response
   *
   * @throws {@link Runs.CancelRunRunsRunIdCancelPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelRunRunsRunIdCancelPost(
    request: Runs.CancelRunRunsRunIdCancelPostRequest,
    options?: RequestOptions,
  ): ApiPromise<RunSummary, Runs.CancelRunRunsRunIdCancelPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/runs/{run_id}/cancel"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "run_id", value: request.runId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runSummarySchema },
        errorFactory: Runs.CancelRunRunsRunIdCancelPostError,
      },
      options,
    );
  }

  /**
   * Create Run
   *
   * @returns Successful Response
   *
   * @throws {@link Runs.CreateRunRunsPostError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRunRunsPost(
    request: Runs.CreateRunRunsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<RunCreateResponse, Runs.CreateRunRunsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/runs"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: runCreateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: runCreateResponseSchema },
        errorFactory: Runs.CreateRunRunsPostError,
      },
      options,
    );
  }

  /**
   * Get Run Events
   *
   * @remarks
   * Paginated event read. `after` is the event id cursor — clients doing periodic polls pass back
   * the highest id they've seen to get only the delta. Default 0 returns from the start.
   *
   * @returns Successful Response
   *
   * @throws {@link Runs.GetRunEventsRunsRunIdEventsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRunEventsRunsRunIdEventsGet(
    request: Runs.GetRunEventsRunsRunIdEventsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<RunEventsResponse, Runs.GetRunEventsRunsRunIdEventsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/runs/{run_id}/events"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "run_id", value: request.runId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 200) },
          { name: "after", value: request.after, schema: s.defaulted(s.int(), 0) },
          { name: "include_output", value: request.includeOutput, schema: s.defaulted(s.boolean(), true) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runEventsResponseSchema },
        errorFactory: Runs.GetRunEventsRunsRunIdEventsGetError,
      },
      options,
    );
  }

  /**
   * Get Run
   *
   * @returns Successful Response
   *
   * @throws {@link Runs.GetRunRunsRunIdGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRunRunsRunIdGet(
    request: Runs.GetRunRunsRunIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<RunSummary, Runs.GetRunRunsRunIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/runs/{run_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "run_id", value: request.runId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runSummarySchema },
        errorFactory: Runs.GetRunRunsRunIdGetError,
      },
      options,
    );
  }

  /**
   * Get Run Status
   *
   * @remarks
   * Minimal status poll (see RunStatusResponse). POLL rate bucket: selects ONLY the status/project
   * columns — a 2s poll never drags the task/result text (TOAST reads) that GET /runs/{id} pays.
   * Poll until terminal, then fetch the full summary once.
   *
   * @returns Successful Response
   *
   * @throws {@link Runs.GetRunStatusRunsRunIdStatusGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRunStatusRunsRunIdStatusGet(
    request: Runs.GetRunStatusRunsRunIdStatusGetRequest,
    options?: RequestOptions,
  ): ApiPromise<RunStatusResponse, Runs.GetRunStatusRunsRunIdStatusGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/runs/{run_id}/status"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "run_id", value: request.runId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runStatusResponseSchema },
        errorFactory: Runs.GetRunStatusRunsRunIdStatusGetError,
      },
      options,
    );
  }

  /**
   * List Run Attachments
   *
   * @remarks
   * The upload files attached to a run, for rendering attachment chips. Ordered to match the run's
   * attached_file_ids.
   *
   * @returns Successful Response
   *
   * @throws {@link Runs.ListRunAttachmentsRunsRunIdAttachmentsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRunAttachmentsRunsRunIdAttachmentsGet(
    request: Runs.ListRunAttachmentsRunsRunIdAttachmentsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<RunAttachmentsResponse, Runs.ListRunAttachmentsRunsRunIdAttachmentsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/runs/{run_id}/attachments"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "run_id", value: request.runId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runAttachmentsResponseSchema },
        errorFactory: Runs.ListRunAttachmentsRunsRunIdAttachmentsGetError,
      },
      options,
    );
  }

  /**
   * List Runs
   *
   * @returns Successful Response
   *
   * @throws {@link Runs.ListRunsRunsGetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRunsRunsGet(
    request: Runs.ListRunsRunsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<RunListResponse, Runs.ListRunsRunsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/runs"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "sessionId", value: request.sessionId, schema: s.optional(s.lazy(() => sessionidSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: runListResponseSchema },
        errorFactory: Runs.ListRunsRunsGetError,
      },
      options,
    );
  }
}

export namespace Runs {
  export type CancelRunRunsRunIdCancelPostRequest = {
    runId: string;
  };

  export class CancelRunRunsRunIdCancelPostError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error502", undefined>
      | Declared<"error503", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelRunRunsRunIdCancelPostError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CreateRunRunsPostRequest = {
    body: RunCreateRequest;
  };

  export class CreateRunRunsPostError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"apiKeySpendLimitError", ApiKeySpendLimitError>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"error429", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRunRunsPostError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      {
        on: 402,
        kind: "apiKeySpendLimitError",
        decode: { kind: "json", schema: apiKeySpendLimitErrorSchema },
      },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetRunEventsRunsRunIdEventsGetRequest = {
    runId: string;
    /** @default 200 */
    limit?: number;
    /** @default 0 */
    after?: number;
    /** @default true */
    includeOutput?: boolean;
  };

  export class GetRunEventsRunsRunIdEventsGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRunEventsRunsRunIdEventsGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetRunRunsRunIdGetRequest = {
    runId: string;
  };

  export class GetRunRunsRunIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRunRunsRunIdGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetRunStatusRunsRunIdStatusGetRequest = {
    runId: string;
  };

  export class GetRunStatusRunsRunIdStatusGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRunStatusRunsRunIdStatusGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListRunAttachmentsRunsRunIdAttachmentsGetRequest = {
    runId: string;
  };

  export class ListRunAttachmentsRunsRunIdAttachmentsGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRunAttachmentsRunsRunIdAttachmentsGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListRunsRunsGetRequest = {
    /** @default 50 */
    limit?: number;
    /** Keyset cursor from a prior response. */
    cursor?: Cursor;
    sessionId?: Sessionid;
  };

  export class ListRunsRunsGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRunsRunsGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
