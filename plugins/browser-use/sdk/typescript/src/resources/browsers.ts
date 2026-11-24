import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiKeySpendLimitErrorSchema,
  type ApiKeySpendLimitError,
} from "../models/api-key-spend-limit-error.js";
import {
  browserDownloadListResponseSchema,
  type BrowserDownloadListResponse,
} from "../models/browser-download-list-response.js";
import {
  browserSessionItemViewInternalSchema,
  type BrowserSessionItemView,
} from "../models/browser-session-item-view.js";
import {
  browserSessionListResponseInternalSchema,
  type BrowserSessionListResponse,
} from "../models/browser-session-list-response.js";
import { browserSessionViewInternalSchema, type BrowserSessionView } from "../models/browser-session-view.js";
import {
  createBrowserSessionRequestInternalSchema,
  type CreateBrowserSessionRequest,
} from "../models/create-browser-session-request.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { profileNotFoundErrorSchema, type ProfileNotFoundError } from "../models/profile-not-found-error.js";
import { sessionNotFoundErrorSchema, type SessionNotFoundError } from "../models/session-not-found-error.js";
import {
  sessionTimeoutLimitExceededErrorSchema,
  type SessionTimeoutLimitExceededError,
} from "../models/session-timeout-limit-exceeded-error.js";
import {
  tooManyConcurrentActiveSessionsErrorSchema,
  type TooManyConcurrentActiveSessionsError,
} from "../models/too-many-concurrent-active-sessions-error.js";
import {
  agentsessionidModelSchema,
  type AgentsessionidModel,
} from "../models/unions/agentsessionid-model.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import { filterbySchema, type Filterby } from "../models/unions/filterby.js";
import { metadata1Schema, type Metadata1 } from "../models/unions/metadata1.js";
import {
  updateBrowserSessionRequestSchema,
  type UpdateBrowserSessionRequest,
} from "../models/update-browser-session-request.js";
import { validationErrorSchema, type ValidationError } from "../models/validation-error.js";
import type { Servers } from "../servers.js";

export class Browsers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Browser Session
   *
   * @remarks
   * Create a new browser session.
   *
   * **Pricing:** Browser sessions are charged at $0.02/hour for all users.
   *
   * The full rate is charged upfront when the session starts. When you stop the session, any unused
   * time is automatically refunded proportionally.
   *
   * Billing is rounded up to the minute (minimum 1 minute). For example, if you stop a session
   * after 30 minutes, you'll be refunded half the charged amount.
   *
   * **Session Limits:**
   * - All users: Up to 4 hours per session
   *
   * @returns Successful Response
   *
   * @throws {@link Browsers.CreateBrowserSessionBrowsersPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBrowserSessionBrowsersPost(
    request: Browsers.CreateBrowserSessionBrowsersPostRequest,
    options?: RequestOptions,
  ): ApiPromise<BrowserSessionItemView, Browsers.CreateBrowserSessionBrowsersPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/browsers"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createBrowserSessionRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: browserSessionItemViewInternalSchema },
        errorFactory: Browsers.CreateBrowserSessionBrowsersPostError,
      },
      options,
    );
  }

  /**
   * Get Browser Session
   *
   * @remarks
   * Get detailed browser session information including status and URLs.
   *
   * @returns Successful Response
   *
   * @throws {@link Browsers.GetBrowserSessionBrowsersSessionIdGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBrowserSessionBrowsersSessionIdGet(
    request: Browsers.GetBrowserSessionBrowsersSessionIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<BrowserSessionView, Browsers.GetBrowserSessionBrowsersSessionIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/browsers/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: browserSessionViewInternalSchema },
        errorFactory: Browsers.GetBrowserSessionBrowsersSessionIdGetError,
      },
      options,
    );
  }

  /**
   * List Browser Session Downloads
   *
   * @remarks
   * List files the browser downloaded to S3 during the session.
   *
   * Pass ``includeUrls=true`` to receive presigned download URLs (15 min expiry) inline. Files are
   * stored at ``downloads/projects/{project_id}/sessions/{session_id}/`` in the private bucket.
   *
   * @returns Successful Response
   *
   * @throws {@link Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBrowserSessionDownloadsBrowsersSessionIdDownloadsGet(
    request: Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    BrowserDownloadListResponse,
    Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/browsers/{session_id}/downloads"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
          { name: "includeUrls", value: request.includeUrls, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: browserDownloadListResponseSchema },
        errorFactory: Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError,
      },
      options,
    );
  }

  /**
   * List Browser Sessions
   *
   * @remarks
   * Get paginated list of browser sessions with optional status filtering.
   *
   * List responses intentionally omit per-session presigned recording URLs (`recording_url` is
   * always `null` here). Each recording URL requires a synchronous boto3 SigV4 signing call (plus
   * an S3 HEAD) that holds the GIL and blocks the event loop. With page_size up to the max this
   * CPU-pegs the worker and starves the DB pool, cascading into pool exhaustion across the fleet.
   * Clients should fetch the recording URL on demand via `GET /api/v2/browsers/{id}`, which signs
   * exactly one URL for a single session. Mirrors the v3 sessions list fix (ENG-4904, PR #4621).
   *
   * @returns Successful Response
   *
   * @throws {@link Browsers.ListBrowserSessionsBrowsersGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBrowserSessionsBrowsersGet(
    request: Browsers.ListBrowserSessionsBrowsersGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BrowserSessionListResponse, Browsers.ListBrowserSessionsBrowsersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/browsers"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "metadata", value: request.metadata, schema: s.optional(s.lazy(() => metadata1Schema)) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
          { name: "pageNumber", value: request.pageNumber, schema: s.defaulted(s.int(), 1) },
          { name: "filterBy", value: request.filterBy, schema: s.optional(s.lazy(() => filterbySchema)) },
          {
            name: "agentSessionId",
            value: request.agentSessionId,
            schema: s.optional(s.lazy(() => agentsessionidModelSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: browserSessionListResponseInternalSchema },
        errorFactory: Browsers.ListBrowserSessionsBrowsersGetError,
      },
      options,
    );
  }

  /**
   * Update Browser Session
   *
   * @remarks
   * Stop a browser session.
   *
   * **Refund:** When you stop a session, unused time is automatically refunded. If the session ran
   * for less than 1 hour, you'll receive a proportional refund. Billing is ceil to the nearest
   * minute (minimum 1 minute).
   *
   * @returns Successful Response
   *
   * @throws {@link Browsers.UpdateBrowserSessionBrowsersSessionIdPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBrowserSessionBrowsersSessionIdPatch(
    request: Browsers.UpdateBrowserSessionBrowsersSessionIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<BrowserSessionView, Browsers.UpdateBrowserSessionBrowsersSessionIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/browsers/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateBrowserSessionRequestSchema },
      },
      {
        success: { kind: "json", schema: browserSessionViewInternalSchema },
        errorFactory: Browsers.UpdateBrowserSessionBrowsersSessionIdPatchError,
      },
      options,
    );
  }
}

export namespace Browsers {
  export type CreateBrowserSessionBrowsersPostRequest = {
    body: CreateBrowserSessionRequest;
  };

  export class CreateBrowserSessionBrowsersPostError extends ApiError {
    declare readonly payload:
      | Declared<"apiKeySpendLimitError", ApiKeySpendLimitError>
      | Declared<"sessionTimeoutLimitExceededError", SessionTimeoutLimitExceededError>
      | Declared<"profileNotFoundError", ProfileNotFoundError>
      | Declared<"validationError", ValidationError>
      | Declared<"tooManyConcurrentActiveSessionsError", TooManyConcurrentActiveSessionsError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBrowserSessionBrowsersPostError> = [
      {
        on: 402,
        kind: "apiKeySpendLimitError",
        decode: { kind: "json", schema: apiKeySpendLimitErrorSchema },
      },
      {
        on: 403,
        kind: "sessionTimeoutLimitExceededError",
        decode: { kind: "json", schema: sessionTimeoutLimitExceededErrorSchema },
      },
      { on: 404, kind: "profileNotFoundError", decode: { kind: "json", schema: profileNotFoundErrorSchema } },
      { on: 422, kind: "validationError", decode: { kind: "json", schema: validationErrorSchema } },
      {
        on: 429,
        kind: "tooManyConcurrentActiveSessionsError",
        decode: { kind: "json", schema: tooManyConcurrentActiveSessionsErrorSchema },
      },
    ];
  }

  export type GetBrowserSessionBrowsersSessionIdGetRequest = {
    sessionId: string;
  };

  export class GetBrowserSessionBrowsersSessionIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"sessionNotFoundError", SessionNotFoundError>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBrowserSessionBrowsersSessionIdGetError> = [
      { on: 404, kind: "sessionNotFoundError", decode: { kind: "json", schema: sessionNotFoundErrorSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest = {
    sessionId: string;
    /** @default 50 */
    limit?: number;
    cursor?: Cursor;
    /** @default false */
    includeUrls?: boolean;
  };

  export const listBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequestSchema: Schema<ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest> =
    s.lazySchema(() =>
      s.object<ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest>({
        sessionId: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 50),
        cursor: s.optional(s.lazy(() => cursorSchema)),
        includeUrls: s.defaulted(s.boolean(), false),
      }),
    );

  export class ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError extends ApiError {
    declare readonly payload:
      | Declared<"sessionNotFoundError", SessionNotFoundError>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError> = [
      { on: 404, kind: "sessionNotFoundError", decode: { kind: "json", schema: sessionNotFoundErrorSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListBrowserSessionsBrowsersGetRequest = {
    /**
     * Only browsers tagged with every one of these terms. `key` matches any value; `key=value`
     * matches exactly. Repeat the param to require more than one (AND).
     */
    metadata?: Metadata1;
    /** @default 10 */
    pageSize?: number;
    /** @default 1 */
    pageNumber?: number;
    filterBy?: Filterby;
    agentSessionId?: AgentsessionidModel;
  };

  export const listBrowserSessionsBrowsersGetRequestSchema: Schema<ListBrowserSessionsBrowsersGetRequest> =
    s.lazySchema(() =>
      s.object<ListBrowserSessionsBrowsersGetRequest>({
        metadata: s.optional(s.lazy(() => metadata1Schema)),
        pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
        pageNumber: s.defaulted(s.int().check(s.gte(1)), 1),
        filterBy: s.optional(s.lazy(() => filterbySchema)),
        agentSessionId: s.optional(s.lazy(() => agentsessionidModelSchema)),
      }),
    );

  export class ListBrowserSessionsBrowsersGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ListBrowserSessionsBrowsersGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateBrowserSessionBrowsersSessionIdPatchRequest = {
    sessionId: string;
    body: UpdateBrowserSessionRequest;
  };

  export class UpdateBrowserSessionBrowsersSessionIdPatchError extends ApiError {
    declare readonly payload:
      | Declared<"sessionNotFoundError", SessionNotFoundError>
      | Declared<"validationError", ValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBrowserSessionBrowsersSessionIdPatchError> = [
      { on: 404, kind: "sessionNotFoundError", decode: { kind: "json", schema: sessionNotFoundErrorSchema } },
      { on: 422, kind: "validationError", decode: { kind: "json", schema: validationErrorSchema } },
    ];
  }
}
