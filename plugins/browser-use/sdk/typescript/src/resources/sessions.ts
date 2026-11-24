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
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { queueListResponseSchema, type QueueListResponse } from "../models/queue-list-response.js";
import {
  queueMessageRequestInternalSchema,
  type QueueMessageRequest,
} from "../models/queue-message-request.js";
import { queuedMessageSchema, type QueuedMessage } from "../models/queued-message.js";
import {
  sessionCostCapRequestInternalSchema,
  type SessionCostCapRequest,
} from "../models/session-cost-cap-request.js";
import {
  sessionCostCapResponseSchema,
  type SessionCostCapResponse,
} from "../models/session-cost-cap-response.js";
import { sessionCostResponseSchema, type SessionCostResponse } from "../models/session-cost-response.js";
import { sessionInfoSchema, type SessionInfo } from "../models/session-info.js";
import { sessionListResponseSchema, type SessionListResponse } from "../models/session-list-response.js";
import { sessionShareInfoSchema, type SessionShareInfo } from "../models/session-share-info.js";
import {
  sessionShareUpdateRequestSchema,
  type SessionShareUpdateRequest,
} from "../models/session-share-update-request.js";
import { sessionUpdateRequestSchema, type SessionUpdateRequest } from "../models/session-update-request.js";
import { cursorSchema, type Cursor } from "../models/unions/cursor.js";
import {
  responseGetSessionShareSessionsSessionIdShareGetSchema,
  type ResponseGetSessionShareSessionsSessionIdShareGet,
} from "../models/unions/response-get-session-share-sessions-session-id-share-get.js";
import {
  xv4QueueDeduplicateSchema,
  type XV4QueueDeduplicate,
} from "../models/unions/xv4-queue-deduplicate.js";
import type { Servers } from "../servers.js";

export class Sessions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Queued Message
   *
   * @remarks
   * Remove a still-pending queued message; 409 once the drain has claimed it.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelQueuedMessageSessionsSessionIdQueueMessageIdDelete(
    request: Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<QueuedMessage, Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sessions/{session_id}/queue/{message_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [
          { name: "session_id", value: request.sessionId, schema: s.string() },
          { name: "message_id", value: request.messageId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: queuedMessageSchema },
        errorFactory: Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError,
      },
      options,
    );
  }

  /**
   * Create Session Share
   *
   * @remarks
   * Enable sharing: reactivates the session's existing share (stable token, so a link that was
   * toggled off keeps working when re-enabled) or creates one on first use.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.CreateSessionShareSessionsSessionIdSharePostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSessionShareSessionsSessionIdSharePost(
    request: Sessions.CreateSessionShareSessionsSessionIdSharePostRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionShareInfo, Sessions.CreateSessionShareSessionsSessionIdSharePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sessions/{session_id}/share"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionShareInfoSchema },
        errorFactory: Sessions.CreateSessionShareSessionsSessionIdSharePostError,
      },
      options,
    );
  }

  /**
   * Delete Session
   *
   * @remarks
   * Delete a session: it disappears from the session lists and can no longer be opened or
   * continued.
   *
   * Soft delete (mirrors V2's `is_archived`): the runs, events and usage records stay in place so
   * billing and analytics keep reconciling, and ZDR purge is the only thing that ever destroys V4
   * content. Idempotent — deleting twice is a no-op 204.
   *
   * An in-flight run is cancelled first, and pending queued messages are cancelled too; otherwise
   * the drain would dispatch a follow-up run whose `session_archived_at` is NULL and resurrect the
   * session. Cancel is forwarded to CP before anything is written (and outside the queue lock, per
   * the enqueue path's ordering), so a CP failure (502) leaves the session visible rather than
   * hiding a run that is still burning credits.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.DeleteSessionSessionsSessionIdDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSessionSessionsSessionIdDelete(
    request: Sessions.DeleteSessionSessionsSessionIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sessions.DeleteSessionSessionsSessionIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sessions/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sessions.DeleteSessionSessionsSessionIdDeleteError,
      },
      options,
    );
  }

  /**
   * Get Session Cost
   *
   * @remarks
   * Everything this session has cost so far, split by source.
   *
   * A run's `total_cost_usd` is its LLM (and web-search) charge only. Browser time and proxy
   * bandwidth are metered against the session's browser, which outlives any one run — so this is
   * the endpoint for the session's full cost.
   *
   * These are recorded usage costs, not an invoice total: promotional waivers and credits are
   * applied downstream in billing, so a session run under a promotion can report cost here that was
   * never charged.
   *
   * Costs keep moving after a run reports `finished`: LLM calls settle up to about 90 seconds
   * later, and the browser accrues time and proxy traffic until it stops.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.GetSessionCostSessionsSessionIdCostGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionCostSessionsSessionIdCostGet(
    request: Sessions.GetSessionCostSessionsSessionIdCostGetRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionCostResponse, Sessions.GetSessionCostSessionsSessionIdCostGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sessions/{session_id}/cost"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionCostResponseSchema },
        errorFactory: Sessions.GetSessionCostSessionsSessionIdCostGetError,
      },
      options,
    );
  }

  /**
   * Get Session Queue Message
   *
   * @remarks
   * Read one queued message including terminal handoff states.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionQueueMessageSessionsSessionIdQueueMessageIdGet(
    request: Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<QueuedMessage, Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sessions/{session_id}/queue/{message_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [
          { name: "session_id", value: request.sessionId, schema: s.string() },
          { name: "message_id", value: request.messageId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: queuedMessageSchema },
        errorFactory: Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError,
      },
      options,
    );
  }

  /**
   * Get Session
   *
   * @remarks
   * Session detail — the same slim shape as one GET /sessions row (its latest run). Doubles as the
   * busy/idle poll for a conversation (POLL rate bucket): slim columns only, indexed
   * public_session_id lookup, never the heavy result/token fields.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.GetSessionSessionsSessionIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionSessionsSessionIdGet(
    request: Sessions.GetSessionSessionsSessionIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionInfo, Sessions.GetSessionSessionsSessionIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sessions/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionInfoSchema },
        errorFactory: Sessions.GetSessionSessionsSessionIdGetError,
      },
      options,
    );
  }

  /**
   * Get Session Share
   *
   * @remarks
   * The session's share link (active or not); null if never shared.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.GetSessionShareSessionsSessionIdShareGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionShareSessionsSessionIdShareGet(
    request: Sessions.GetSessionShareSessionsSessionIdShareGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ResponseGetSessionShareSessionsSessionIdShareGet,
    Sessions.GetSessionShareSessionsSessionIdShareGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sessions/{session_id}/share"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: responseGetSessionShareSessionsSessionIdShareGetSchema },
        errorFactory: Sessions.GetSessionShareSessionsSessionIdShareGetError,
      },
      options,
    );
  }

  /**
   * List Session Queue
   *
   * @remarks
   * List open messages, recently delivered queued messages, and steering cutoffs.
   *
   * Includes live dispatch claims so clients can restore an accepted queued message after a refresh
   * without briefly losing its waiting state.
   *
   * Consumed QUEUE rows are returned too, capped at the most recent _DELIVERED_QUEUE_HISTORY, plus
   * up to _AGENCY_DELIVERED_QUEUE_HISTORY compact Agency choice and generation receipts so inbox
   * state survives refresh. A message absorbed mid-run is announced by a `queued_input_injected`
   * event carrying only its input id, so the chat has no other source for the text to render. The
   * cap bounds this response because clients poll it while a run is active; a session with more
   * delivered follow-ups than the cap renders its oldest injected bubbles without text.
   *
   * The latest consumed interrupt bridges the primary-write/read-replica gap before its replacement
   * run appears; clients discard it once that run is visible. Compact per-source cutoffs preserve
   * every historical interrupted transcript boundary without returning every historical steering
   * message and its attachments.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.ListSessionQueueSessionsSessionIdQueueGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSessionQueueSessionsSessionIdQueueGet(
    request: Sessions.ListSessionQueueSessionsSessionIdQueueGetRequest,
    options?: RequestOptions,
  ): ApiPromise<QueueListResponse, Sessions.ListSessionQueueSessionsSessionIdQueueGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sessions/{session_id}/queue"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: queueListResponseSchema },
        errorFactory: Sessions.ListSessionQueueSessionsSessionIdQueueGetError,
      },
      options,
    );
  }

  /**
   * List Sessions
   *
   * @remarks
   * List the project's V4 sessions — one row per session (its most recent run), most-recent first.
   *
   * A session is a conversation: follow-up runs reuse the same public_session_id, so GET
   * /api/v4/runs would list one row per RUN. This collapses to one row per SESSION directly in
   * Postgres with DISTINCT ON, so a chatty session with 100 runs is still a single row (no scan
   * amplification), and selects only the slim columns the session list needs — never the heavy
   * per-run text/token/cost fields.
   *
   * Keyset-paginated on the latest run's (created_at, id): pass `next_cursor` back as `cursor` to
   * page. Offset/COUNT was dropped — it doesn't scale on projects with many sessions.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.ListSessionsSessionsGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSessionsSessionsGet(
    request: Sessions.ListSessionsSessionsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SessionListResponse, Sessions.ListSessionsSessionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sessions"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursorSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionListResponseSchema },
        errorFactory: Sessions.ListSessionsSessionsGetError,
      },
      options,
    );
  }

  /**
   * Purge Session
   *
   * @remarks
   * Purge V4 session data; return 202 while active work or uploads defer deletion.
   *
   * Redacts DB records and deletes S3 objects (bcode state, workspace files, recordings, downloads,
   * staging uploads) for every run in the session. Same cleanup the ZDR cron performs, but
   * on-demand; outstanding upload grants defer physical deletion. V4 analog of the V2 POST
   * /sessions/{id}/purge. Surfaces shared with a still-live sibling run are deferred by the same
   * guards the cron uses.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.PurgeSessionSessionsSessionIdPurgePostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purgeSessionSessionsSessionIdPurgePost(
    request: Sessions.PurgeSessionSessionsSessionIdPurgePostRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sessions.PurgeSessionSessionsSessionIdPurgePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sessions/{session_id}/purge"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sessions.PurgeSessionSessionsSessionIdPurgePostError,
      },
      options,
    );
  }

  /**
   * Queue Session Message
   *
   * @remarks
   * Send a message to a session. If the session is busy it waits on the queue and runs as the next
   * turn; if idle it drains immediately.
   *
   * `interrupt=true` cancels the session's active run so this message takes effect now instead of
   * waiting for the current turn (no-op when the session is idle).
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.QueueSessionMessageSessionsSessionIdQueuePostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  queueSessionMessageSessionsSessionIdQueuePost(
    request: Sessions.QueueSessionMessageSessionsSessionIdQueuePostRequest,
    options?: RequestOptions,
  ): ApiPromise<QueuedMessage, Sessions.QueueSessionMessageSessionsSessionIdQueuePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sessions/{session_id}/queue"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-V4-Queue-Deduplicate",
            value: request.xV4QueueDeduplicate,
            schema: s.optional(s.lazy(() => xv4QueueDeduplicateSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: queueMessageRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: queuedMessageSchema },
        errorFactory: Sessions.QueueSessionMessageSessionsSessionIdQueuePostError,
      },
      options,
    );
  }

  /**
   * Update Session Cost Cap
   *
   * @remarks
   * Update the active run cap without starting another run.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSessionCostCapSessionsSessionIdCostCapPatch(
    request: Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionCostCapResponse, Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/sessions/{session_id}/cost-cap"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sessionCostCapRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: sessionCostCapResponseSchema },
        errorFactory: Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchError,
      },
      options,
    );
  }

  /**
   * Update Session
   *
   * @remarks
   * Rename a session.
   *
   * `session_title` is denormalized onto every run in the session (the session list reads the
   * latest run), so a rename writes them all in one UPDATE. Null clears the name and the UI falls
   * back to the opening task — it does NOT re-run title generation, which only fills rows where the
   * title IS NULL and so would silently overwrite the clear.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.UpdateSessionSessionsSessionIdPatchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSessionSessionsSessionIdPatch(
    request: Sessions.UpdateSessionSessionsSessionIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionInfo, Sessions.UpdateSessionSessionsSessionIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/sessions/{session_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sessionUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: sessionInfoSchema },
        errorFactory: Sessions.UpdateSessionSessionsSessionIdPatchError,
      },
      options,
    );
  }

  /**
   * Update Session Share
   *
   * @remarks
   * Toggle the session's share link on/off.
   *
   * @returns Successful Response
   *
   * @throws {@link Sessions.UpdateSessionShareSessionsSessionIdSharePutError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSessionShareSessionsSessionIdSharePut(
    request: Sessions.UpdateSessionShareSessionsSessionIdSharePutRequest,
    options?: RequestOptions,
  ): ApiPromise<SessionShareInfo, Sessions.UpdateSessionShareSessionsSessionIdSharePutError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sessions/{session_id}/share"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "session_id", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sessionShareUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: sessionShareInfoSchema },
        errorFactory: Sessions.UpdateSessionShareSessionsSessionIdSharePutError,
      },
      options,
    );
  }
}

export namespace Sessions {
  export type CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest = {
    sessionId: string;
    messageId: number;
  };

  export class CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CreateSessionShareSessionsSessionIdSharePostRequest = {
    sessionId: string;
  };

  export class CreateSessionShareSessionsSessionIdSharePostError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSessionShareSessionsSessionIdSharePostError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeleteSessionSessionsSessionIdDeleteRequest = {
    sessionId: string;
  };

  export class DeleteSessionSessionsSessionIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error502", undefined>
      | Declared<"error503", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSessionSessionsSessionIdDeleteError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetSessionCostSessionsSessionIdCostGetRequest = {
    sessionId: string;
  };

  export class GetSessionCostSessionsSessionIdCostGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSessionCostSessionsSessionIdCostGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest = {
    sessionId: string;
    messageId: number;
  };

  export class GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetSessionSessionsSessionIdGetRequest = {
    sessionId: string;
  };

  export class GetSessionSessionsSessionIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSessionSessionsSessionIdGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetSessionShareSessionsSessionIdShareGetRequest = {
    sessionId: string;
  };

  export class GetSessionShareSessionsSessionIdShareGetError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSessionShareSessionsSessionIdShareGetError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListSessionQueueSessionsSessionIdQueueGetRequest = {
    sessionId: string;
  };

  export class ListSessionQueueSessionsSessionIdQueueGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSessionQueueSessionsSessionIdQueueGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListSessionsSessionsGetRequest = {
    /** Max sessions per page (max 100). @default 20 */
    limit?: number;
    /** Keyset cursor from a prior response. */
    cursor?: Cursor;
  };

  export const listSessionsSessionsGetRequestSchema: Schema<ListSessionsSessionsGetRequest> = s.lazySchema(
    () =>
      s.object<ListSessionsSessionsGetRequest>({
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
        cursor: s.optional(s.lazy(() => cursorSchema)),
      }),
  );

  export class ListSessionsSessionsGetError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSessionsSessionsGetError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type PurgeSessionSessionsSessionIdPurgePostRequest = {
    sessionId: string;
  };

  export class PurgeSessionSessionsSessionIdPurgePostError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<PurgeSessionSessionsSessionIdPurgePostError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type QueueSessionMessageSessionsSessionIdQueuePostRequest = {
    sessionId: string;
    xV4QueueDeduplicate?: XV4QueueDeduplicate;
    body: QueueMessageRequest;
  };

  export class QueueSessionMessageSessionsSessionIdQueuePostError extends ApiError {
    declare readonly payload:
      | Declared<"apiKeySpendLimitError", ApiKeySpendLimitError>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<QueueSessionMessageSessionsSessionIdQueuePostError> = [
      {
        on: 402,
        kind: "apiKeySpendLimitError",
        decode: { kind: "json", schema: apiKeySpendLimitErrorSchema },
      },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest = {
    sessionId: string;
    body: SessionCostCapRequest;
  };

  export class UpdateSessionCostCapSessionsSessionIdCostCapPatchError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSessionCostCapSessionsSessionIdCostCapPatchError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateSessionSessionsSessionIdPatchRequest = {
    sessionId: string;
    body: SessionUpdateRequest;
  };

  export class UpdateSessionSessionsSessionIdPatchError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSessionSessionsSessionIdPatchError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UpdateSessionShareSessionsSessionIdSharePutRequest = {
    sessionId: string;
    body: SessionShareUpdateRequest;
  };

  export class UpdateSessionShareSessionsSessionIdSharePutError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSessionShareSessionsSessionIdSharePutError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
