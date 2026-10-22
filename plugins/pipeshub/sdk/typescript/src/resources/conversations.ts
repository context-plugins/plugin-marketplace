import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { addMessageRequestSchema, type AddMessageRequest } from "../models/add-message-request.js";
import { addMessageResponseSchema, type AddMessageResponse } from "../models/add-message-response.js";
import {
  conversationMessageStreamRequestSchema,
  type ConversationMessageStreamRequest,
} from "../models/conversation-message-stream-request.js";
import {
  conversationMessageStreamSseEventSchema,
  type ConversationMessageStreamSseEvent,
} from "../models/conversation-message-stream-sse-event.js";
import {
  conversationPinResponseSchema,
  type ConversationPinResponse,
} from "../models/conversation-pin-response.js";
import {
  conversationStreamRequestSchema,
  type ConversationStreamRequest,
} from "../models/conversation-stream-request.js";
import {
  conversationStreamSseEventSchema,
  type ConversationStreamSseEvent,
} from "../models/conversation-stream-sse-event.js";
import {
  conversationsArchiveResponseSchema,
  type ConversationsArchiveResponse,
} from "../models/conversations-archive-response.js";
import {
  conversationsCancelRequestSchema,
  type ConversationsCancelRequest,
} from "../models/conversations-cancel-request.js";
import {
  conversationsCancelResponseSchema,
  type ConversationsCancelResponse,
} from "../models/conversations-cancel-response.js";
import { conversationsResponseSchema, type ConversationsResponse } from "../models/conversations-response.js";
import {
  conversationsResponse1Schema,
  type ConversationsResponse1,
} from "../models/conversations-response1.js";
import {
  conversationsResponse2Schema,
  type ConversationsResponse2,
} from "../models/conversations-response2.js";
import {
  conversationsShowArchivesResponseSchema,
  type ConversationsShowArchivesResponse,
} from "../models/conversations-show-archives-response.js";
import {
  conversationsShowArchivesSearchResponseSchema,
  type ConversationsShowArchivesSearchResponse,
} from "../models/conversations-show-archives-search-response.js";
import {
  conversationsTitleRequestSchema,
  type ConversationsTitleRequest,
} from "../models/conversations-title-request.js";
import {
  conversationsTitleResponseSchema,
  type ConversationsTitleResponse,
} from "../models/conversations-title-response.js";
import {
  conversationsUnarchiveResponseSchema,
  type ConversationsUnarchiveResponse,
} from "../models/conversations-unarchive-response.js";
import {
  createConversationRequestSchema,
  type CreateConversationRequest,
} from "../models/create-conversation-request.js";
import {
  createConversationResponseSchema,
  type CreateConversationResponse,
} from "../models/create-conversation-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  forkConversationResponseSchema,
  type ForkConversationResponse,
} from "../models/fork-conversation-response.js";
import {
  messageFeedbackSubmitRequestSchema,
  type MessageFeedbackSubmitRequest,
} from "../models/message-feedback-submit-request.js";
import {
  messageFeedbackUpdateResponseSchema,
  type MessageFeedbackUpdateResponse,
} from "../models/message-feedback-update-response.js";
import { messageType4Schema, type MessageType4 } from "../models/message-type4.js";
import { regenerateRequestSchema, type RegenerateRequest } from "../models/regenerate-request.js";
import { SortBy10, sortBy10Schema } from "../models/sort-by10.js";
import { SortBy4, sortBy4Schema } from "../models/sort-by4.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import { Source1, source1Schema } from "../models/source1.js";
import { sseEventSchema, type SseEvent } from "../models/sse-event.js";
import type { Servers } from "../servers.js";

/**
 * AI-powered conversational chat management with citations and follow-up questions
 */
export class Conversations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add message (non-streaming)
   *
   * @remarks
   * Ask a follow-up in an existing assistant conversation and wait for the complete answer. The
   * JSON counterpart of `POST /conversations/{conversationId}/messages/stream`. Earlier turns are
   * sent to the model as history; project context comes from the conversation, never from the
   * request.
   *
   * **How a turn runs**
   *
   * 1. The user's message is saved (in its own short transaction on a replica set).
   * 2. The AI backend runs the same agent-loop pipeline as the `/stream` route and returns only its
   *    final result. No transaction is held during this call, and the call is never retried.
   * 3. The answer, citations and status are saved exactly as the streaming route saves them, and
   *    the updated conversation is returned.
   *
   * Every failure after step 1 is persisted: the conversation ends with status `Failed`, a
   * `failReason`, and an `error` message, and the response carries `X-Conversation-Id` so the
   * caller can fetch it. A 4xx from the AI backend (for example no model configured) keeps its
   * status and user-facing message; other failures return 500 with a generic message.
   *
   * The response arrives only when the whole answer is ready, which can take minutes for agent
   * runs. Allow a generous client and proxy timeout, or use the `/stream` variant for interactive
   * clients.
   *
   * @returns The conversation with the new question and answer.
   *
   * @throws {@link Conversations.AddMessageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addMessage(
    request: Conversations.AddMessageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AddMessageResponse, Conversations.AddMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/messages"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addMessageRequestSchema },
      },
      {
        success: { kind: "json", schema: addMessageResponseSchema },
        errorFactory: Conversations.AddMessageError,
      },
      options,
    );
  }

  /**
   * Add message to a conversation with streaming response
   *
   * @remarks
   * Add a follow-up message to an existing conversation and stream the assistant's response over
   * Server-Sent Events.
   *
   * Functionally equivalent to `POST /conversations/{conversationId}/messages` but the response is
   * delivered as an SSE stream so clients can render the answer incrementally.
   *
   * AG-UI is the sole wire protocol. The vocabulary is described by
   * `ConversationMessageStreamSSEEvent`; it is the same event set as `/conversations/stream`, while
   * the terminal result reflects an existing conversation.
   *
   * @returns SSE stream established. The body is a sequence of `text/event-stream` frames using the
   * event vocabulary described on the schema below.
   *
   * @throws {@link Conversations.AddMessageStreamError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addMessageStream(
    request: Conversations.AddMessageStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<ConversationMessageStreamSseEvent>, Conversations.AddMessageStreamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/messages/stream"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: conversationMessageStreamRequestSchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: conversationMessageStreamSseEventSchema },
        errorFactory: Conversations.AddMessageStreamError,
      },
      options,
    );
  }

  /**
   * Archive conversation
   *
   * @remarks
   * Archive a conversation to hide it from the main list.
   *
   * **Overview:**
   *
   * Archived conversations are preserved but hidden from the default conversation list. Use
   * archiving to clean up your workspace without permanently deleting conversations.
   *
   * **Access:**
   *
   * The caller must be the conversation's initiator, or be listed in `sharedWith` with
   * `accessLevel: write`. Already-archived conversations return `400`.
   *
   * **Retrieval:**
   *
   * View archived conversations using `GET /conversations/show/archives`. Restore one with `PATCH
   * /conversations/{conversationId}/unarchive`.
   *
   * @returns Conversation archived successfully
   *
   * @throws {@link Conversations.ArchiveConversationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveConversation(
    request: Conversations.ArchiveConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsArchiveResponse, Conversations.ArchiveConversationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/archive"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsArchiveResponseSchema },
        errorFactory: Conversations.ArchiveConversationError,
      },
      options,
    );
  }

  /**
   * Cancel an in-flight chat stream
   *
   * @remarks
   * Cooperatively stop a `POST /conversations/stream` or `POST
   * /conversations/{conversationId}/messages/stream` run that is still generating, using the
   * `runId` sent when that stream started.
   *
   * This is a synchronous JSON ack, not another SSE stream. The cancelled run's own stream (if
   * still connected) receives a terminal frame with a `stopped` status and whatever partial answer
   * had already generated; nothing further is delivered here.
   *
   * `{ cancelled: false }` — not an error — covers a `runId` that already finished or was never
   * registered; the caller only needs to know the stream is not running anymore, not why.
   *
   * `runId` must belong to a run started on THIS `conversationId` — a `runId` that exists but was
   * registered under a different conversation (even one owned by the same caller) is rejected with
   * `403`, same as a `runId` owned by a different user/org.
   *
   * @returns Cancellation requested, or the run had already finished.
   *
   * @throws {@link Conversations.CancelConversationStreamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelConversationStream(
    request: Conversations.CancelConversationStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsCancelResponse, Conversations.CancelConversationStreamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/cancel"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: conversationsCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: conversationsCancelResponseSchema },
        errorFactory: Conversations.CancelConversationStreamError,
      },
      options,
    );
  }

  /**
   * Create conversation (non-streaming)
   *
   * @remarks
   * Start a new assistant conversation and wait for the complete answer. The JSON counterpart of
   * `POST /conversations/stream`, for API, SDK and automation callers that do not consume SSE.
   *
   * **How a turn runs**
   *
   * 1. The user's message is saved (in its own short transaction on a replica set).
   * 2. The AI backend runs the same agent-loop pipeline as the `/stream` route and returns only its
   *    final result. No transaction is held during this call, and the call is never retried.
   * 3. The answer, citations and status are saved exactly as the streaming route saves them, and
   *    the updated conversation is returned.
   *
   * Every failure after step 1 is persisted: the conversation ends with status `Failed`, a
   * `failReason`, and an `error` message, and the response carries `X-Conversation-Id` so the
   * caller can fetch it. A 4xx from the AI backend (for example no model configured) keeps its
   * status and user-facing message; other failures return 500 with a generic message.
   *
   * The response arrives only when the whole answer is ready, which can take minutes for agent
   * runs. Allow a generous client and proxy timeout, or use the `/stream` variant for interactive
   * clients.
   *
   * **Modes**
   *
   * `chatMode: agent` (or `agent:<mode>`) runs the universal agent and honours `tools` /
   * `agentCapabilities`; `internal_search` and `web_search` run the search assistant and ignore
   * `tools`. Omitted, it defaults to internal search.
   *
   * @returns Conversation created with its first answer.
   *
   * @throws {@link Conversations.CreateConversationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConversation(
    request: Conversations.CreateConversationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateConversationResponse, Conversations.CreateConversationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations/create"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createConversationRequestSchema },
      },
      {
        success: { kind: "json", schema: createConversationResponseSchema },
        errorFactory: Conversations.CreateConversationError,
      },
      options,
    );
  }

  /**
   * Delete conversation
   *
   * @remarks
   * Delete a conversation by its ID.
   *
   * **Overview:**
   *
   * Performs a soft delete by setting `isDeleted: true`. The conversation is removed from listings
   * but preserved in the database. All citations referenced by messages in the conversation are
   * also soft-deleted.
   *
   * **Permissions:**
   *
   * The conversation initiator can always delete. Users the conversation has been shared with may
   * delete it only when their `sharedWith.accessLevel` is `write`.
   *
   * **Artifacts:** before the conversation is marked deleted, every artifact the caller created in
   * it is deleted for good (every version and stored file), and so are older stored outputs of the
   * conversation. If that cannot be done the conversation is left in place and the error is
   * returned (for example 503); repeating the request finishes the cleanup.
   *
   * @returns Conversation deleted successfully
   *
   * @throws {@link Conversations.DeleteConversationByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConversationById(
    request: Conversations.DeleteConversationByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsResponse2, Conversations.DeleteConversationByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/conversations/{conversationId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsResponse2Schema },
        errorFactory: Conversations.DeleteConversationByIdError,
      },
      options,
    );
  }

  /**
   * Fork conversation from a message
   *
   * @remarks
   * Copy this conversation into a new private chat owned by the caller, including every message up
   * to and including `messageId`. The original conversation is left unchanged.
   *
   * Only the owner of the conversation can fork it. A shared recipient or a project member gets
   * 404, because their access to the original's attachments and artifacts is revoked on unshare.
   * The fork does not inherit share settings. If the source is linked to a project the caller can
   * still see, the fork stays in that project but is private to the caller; otherwise it is created
   * outside the project.
   *
   * @returns Forked conversation created
   *
   * @throws {@link Conversations.ForkConversationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  forkConversation(
    request: Conversations.ForkConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ForkConversationResponse, Conversations.ForkConversationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/message/{messageId}/fork"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "conversationId", value: request.conversationId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: forkConversationResponseSchema },
        errorFactory: Conversations.ForkConversationError,
      },
      options,
    );
  }

  /**
   * List all conversations
   *
   * @remarks
   * Retrieve paginated conversations for the authenticated user.
   *
   * **Overview:**
   *
   * Use the optional `source` query parameter to choose which list to return: `owned` — only
   * conversations you own (`userId` matches the current user). `shared` — conversations where you
   * have recipient access (`isShared` and your user appears in `sharedWith`), without the
   * owner-only branch. Defaults to `owned` when omitted. Each call returns one list; call twice if
   * you need both.
   *
   * **Filtering:**
   *
   * - Only non-archived conversations are returned by default
   * - Use `/conversations/show/archives` for archived conversations
   *
   * **Sorting:**
   *
   * Conversations are sorted by last activity timestamp (most recent first) by default. With
   * `source=owned`, conversations the caller pinned (`PATCH /conversations/{conversationId}/pin`)
   * come first, in the same order, whatever `sortBy` is. `source=shared` is never pinned-first.
   *
   * @returns List of conversations for the requested source
   *
   * @throws {@link Conversations.GetAllConversationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllConversations(
    request: Conversations.GetAllConversationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsResponse, Conversations.GetAllConversationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/conversations"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "source", value: request.source, schema: s.defaulted(source1Schema, Source1.Owned) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "sortBy", value: request.sortBy, schema: s.optional(s.lazy(() => sortBy4Schema)) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "conversationId", value: request.conversationId, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "shared", value: request.shared, schema: s.optional(s.string()) },
          { name: "projectId", value: request.projectId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsResponseSchema },
        errorFactory: Conversations.GetAllConversationsError,
      },
      options,
    );
  }

  /**
   * List archived conversations
   *
   * @remarks
   * Retrieve all archived conversations for the authenticated user.
   *
   * **Overview:**
   *
   * Archived conversations are hidden from the main list but preserved for reference. This endpoint
   * returns only conversations where `isArchived: true` and `archivedBy` is set. Results include
   * conversations the caller owns and those shared with them.
   *
   * **Filtering and sorting:**
   *
   * Results can be narrowed using `search`, `shared`, `startDate`, `endDate`, and `conversationId`.
   * Sorting is controlled by `sortBy` and `sortOrder`. Pagination is controlled by `page` and
   * `limit`.
   *
   * **Unarchiving:**
   *
   * Use `PATCH /conversations/{conversationId}/unarchive` to restore a conversation to the active
   * list.
   *
   * @returns List of archived conversations
   *
   * @throws {@link Conversations.GetArchivedConversationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getArchivedConversations(
    request: Conversations.GetArchivedConversationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsShowArchivesResponse, Conversations.GetArchivedConversationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/conversations/show/archives"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.defaulted(sortBy4Schema, SortBy4.LastActivityAt),
          },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "shared", value: request.shared, schema: s.optional(s.boolean()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "conversationId", value: request.conversationId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsShowArchivesResponseSchema },
        errorFactory: Conversations.GetArchivedConversationsError,
      },
      options,
    );
  }

  /**
   * Get conversation by ID
   *
   * @remarks
   * Retrieve a specific conversation with its full message history.
   *
   * **Overview:**
   *
   * Returns the complete conversation including all messages, citations, feedback, and metadata.
   * Messages can be paginated for long conversations.
   *
   * **Message Pagination:**
   *
   * For conversations with many messages, use pagination parameters:
   *
   * - `page`: Page number (default: 1)
   * - `limit`: Messages per page (default: 10)
   * - `sortBy`: Sort field (default: createdAt)
   * - `sortOrder`: 'asc' or 'desc' (default: desc)
   *
   * **Access Control:**
   *
   * Users can access conversations they own or that have been shared with them.
   *
   * @returns Conversation with paginated messages, applied filter metadata, and request metadata
   *
   * @throws {@link Conversations.GetConversationByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConversationById(
    request: Conversations.GetConversationByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsResponse1, Conversations.GetConversationByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/conversations/{conversationId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBy10Schema, SortBy10.CreatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateTime()) },
          { name: "shared", value: request.shared, schema: s.optional(s.boolean()) },
          {
            name: "messageType",
            value: request.messageType,
            schema: s.optional(s.lazy(() => messageType4Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsResponse1Schema },
        errorFactory: Conversations.GetConversationByIdError,
      },
      options,
    );
  }

  /**
   * Pin conversation
   *
   * @remarks
   * Pin a conversation so it is listed first in the caller's own conversation list.
   *
   * **Access:**
   *
   * Owner only: the caller must be the conversation's `initiator`. People the conversation is
   * shared with, even with `write` access, cannot pin it, and their own lists are not affected by
   * the owner's pin.
   *
   * **Behaviour:**
   *
   * Idempotent: pinning an already pinned conversation succeeds and changes nothing. Archived and
   * deleted conversations cannot be pinned. Archiving a pinned conversation removes its pin.
   * Pinning does not change `lastActivityAt` or `updatedAt`, so the conversation keeps its place
   * among the other pinned chats.
   *
   * - Path params: `conversationId`
   * - Query params: none
   * - Body: none
   *
   * @returns Conversation is pinned
   *
   * @throws {@link Conversations.PinConversationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pinConversation(
    request: Conversations.PinConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationPinResponse, Conversations.PinConversationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/pin"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationPinResponseSchema },
        errorFactory: Conversations.PinConversationError,
      },
      options,
    );
  }

  /**
   * Regenerate AI response
   *
   * @remarks
   * Regenerate the AI response for a specific message and stream the new answer over Server-Sent
   * Events.
   *
   * **Overview:**
   *
   * If you're not satisfied with an AI response, use this endpoint to generate a new answer. The
   * original user query is re-processed and a new bot response replaces the previous one in place.
   *
   * **Constraints:**
   *
   * - Only the *last* message of the conversation can be regenerated.
   * - The target message must be of type `bot_response`.
   *
   * **Use Cases:**
   *
   * - Response was incomplete or unclear
   * - Want to try a different AI model
   * - New documents have been indexed since original response
   *
   * **Model Override:**
   *
   * Specify `modelKey` to use a different model for regeneration.
   *
   * **Streaming:**
   *
   * The response is delivered as an AG-UI `text/event-stream` stream. Routing still depends on
   * `chatMode`: `internal_search` and `web_search` use the assistant backend, while `agent` uses
   * the universal agent loop. See `SSEEvent` for the event vocabulary.
   *
   * @returns SSE stream established. The body is a sequence of `text/event-stream` frames using the
   * event vocabulary described on `SSEEvent`. The exact subset of events emitted depends on
   * `chatMode` (see the route description for routing rules). The gateway emits a root
   * `RUN_FINISHED` as `{ type, result }` after persistence and a root `RUN_ERROR` as `{ type,
   * message, code? }` on failure. Forwarded lifecycle and child-run events may contain `runId`,
   * `threadId`, and `parentRunId`. Clients should ignore unknown event names.
   *
   * @throws {@link Conversations.RegenerateAnswerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  regenerateAnswer(
    request: Conversations.RegenerateAnswerRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<SseEvent>, Conversations.RegenerateAnswerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/message/{messageId}/regenerate"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "conversationId", value: request.conversationId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => regenerateRequestSchema)),
        },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: sseEventSchema },
        errorFactory: Conversations.RegenerateAnswerError,
      },
      options,
    );
  }

  /**
   * Search archived conversations
   *
   * @remarks
   * Search across all archived conversations (assistant and agent) for the authenticated user.
   *
   * **Overview:**
   *
   * Performs a case-insensitive substring match against conversation titles and message content
   * across both assistant (`Conversation`) and agent (`AgentConversation`) archived collections.
   * Results are merged server-side and sorted by `lastActivityAt` descending.
   *
   * **Search parameter:**
   *
   * The `search` query parameter is required, must be a non-empty string, and is capped at 1000
   * characters. Requests that omit it or exceed the cap return `400`.
   *
   * **Pagination:**
   *
   * Results are paginated using `page` and `limit`. The response includes a `pagination` block with
   * total counts and a `summary` block that breaks matches down by source.
   *
   * **Item shape:**
   *
   * Each item is a conversation list entry (no `messages` payload — that field is omitted for
   * performance) tagged with `source`, plus computed `isOwner`, `accessLevel`, `archivedAt`, and
   * `archivedBy`. `agentKey` is present only when `source` is `agent`.
   *
   * @returns Search results across archived conversations
   *
   * @throws {@link Conversations.SearchArchivedConversationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchArchivedConversations(
    request: Conversations.SearchArchivedConversationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsShowArchivesSearchResponse, Conversations.SearchArchivedConversationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/conversations/show/archives/search"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "search", value: request.search, schema: s.string() },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsShowArchivesSearchResponseSchema },
        errorFactory: Conversations.SearchArchivedConversationsError,
      },
      options,
    );
  }

  /**
   * Create conversation with streaming response
   *
   * @remarks
   * Start a new conversation and stream the AI response over Server-Sent Events (SSE). Behaves like
   * `POST /conversations` but emits tokens, tool activity, and status updates incrementally instead
   * of returning a single JSON response at the end.
   *
   * **Lifecycle**
   *
   * 1. The server validates `query`, persists an in-progress conversation, then opens the SSE
   *    stream with HTTP `200`.
   * 2. A `CUSTOM` event named `conversation_created` is emitted immediately with the new
   *    `conversationId` so the client can link the stream (sidebar, parallel tabs, deep links)
   *    without an extra request.
   * 3. AI-backend events stream through (token chunks, tool calls, status, etc.).
   * 4. On success a single root `RUN_FINISHED` event is emitted carrying the full persisted
   *    conversation in `result`.
   * 5. On failure a root `RUN_ERROR` event is emitted and the conversation is marked FAILED before
   *    the stream closes.
   *
   * **Event vocabulary**
   *
   * AG-UI is the sole wire protocol. See `ConversationStreamSSEEvent` for the full event enum and
   * payload guidance.
   *
   * Clients should ignore unknown event names rather than treating them as errors.
   *
   * **Agent mode**
   *
   * When `chatMode` is `agent`, the optional `tools` list restricts which tools the agent may
   * invoke for this turn. Outside agent modes the `tools` field is ignored.
   *
   * @returns SSE stream established. The body is a sequence of `text/event-stream` frames using the
   * event vocabulary described above.
   *
   * @throws {@link Conversations.StreamChatError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  streamChat(
    request: Conversations.StreamChatRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<ConversationStreamSseEvent>, Conversations.StreamChatError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations/stream"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: conversationStreamRequestSchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: conversationStreamSseEventSchema },
        errorFactory: Conversations.StreamChatError,
      },
      options,
    );
  }

  /**
   * Unarchive conversation
   *
   * @remarks
   * Restore an archived conversation.
   *
   * - Path params: `conversationId`
   * - Query params: none
   * - Body: none
   *
   * @returns Conversation unarchived successfully
   *
   * @throws {@link Conversations.UnarchiveConversationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unarchiveConversation(
    request: Conversations.UnarchiveConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsUnarchiveResponse, Conversations.UnarchiveConversationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/unarchive"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsUnarchiveResponseSchema },
        errorFactory: Conversations.UnarchiveConversationError,
      },
      options,
    );
  }

  /**
   * Unpin conversation
   *
   * @remarks
   * Remove a conversation's pin so it is listed by recent activity again.
   *
   * **Access:**
   *
   * Owner only, as for `PATCH /conversations/{conversationId}/pin`.
   *
   * **Behaviour:**
   *
   * Idempotent: unpinning a conversation that is not pinned succeeds and changes nothing.
   *
   * - Path params: `conversationId`
   * - Query params: none
   * - Body: none
   *
   * @returns Conversation is not pinned
   *
   * @throws {@link Conversations.UnpinConversationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unpinConversation(
    request: Conversations.UnpinConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationPinResponse, Conversations.UnpinConversationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/unpin"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationPinResponseSchema },
        errorFactory: Conversations.UnpinConversationError,
      },
      options,
    );
  }

  /**
   * Update conversation title
   *
   * @remarks
   * Update the title of a conversation.
   *
   * **Overview:**
   *
   * Conversation titles are auto-generated from the first query by default. Use this endpoint to
   * set a custom, more descriptive title.
   *
   * **Title limits:**
   *
   * - Minimum: 1 character
   * - Maximum: 200 characters
   *
   * **Permissions:**
   *
   * The conversation must exist, belong to the calling user's organization, be owned by the caller
   * (matched on `userId`), and not be soft-deleted.
   *
   * @returns Title updated successfully
   *
   * @throws {@link Conversations.UpdateConversationTitleError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConversationTitle(
    request: Conversations.UpdateConversationTitleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsTitleResponse, Conversations.UpdateConversationTitleError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/title"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "conversationId", value: request.conversationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: conversationsTitleRequestSchema },
      },
      {
        success: { kind: "json", schema: conversationsTitleResponseSchema },
        errorFactory: Conversations.UpdateConversationTitleError,
      },
      options,
    );
  }

  /**
   * Submit feedback on AI response
   *
   * @remarks
   * Append a feedback entry to a bot-response message.
   *
   * **Overview**
   *
   * Feedback helps improve AI response quality over time. You can record an overall helpfulness
   * signal, issue categories, and free-text comments. Each call appends a new entry to the message;
   * previous entries are preserved.
   *
   * **Feedback options**
   *
   * - `isHelpful` — overall thumbs up/down.
   * - `categories` — issue or positive categories from a fixed list.
   * - `comments` — free-text `positive` and `negative`.
   *
   * **Restrictions**
   *
   * Feedback can only be submitted on `bot_response` messages — user queries and system messages
   * are rejected with `400`.
   *
   * @returns Feedback submitted successfully.
   *
   * @throws {@link Conversations.UpdateMessageFeedbackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMessageFeedback(
    request: Conversations.UpdateMessageFeedbackRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageFeedbackUpdateResponse, Conversations.UpdateMessageFeedbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/conversations/{conversationId}/message/{messageId}/feedback"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "conversationId", value: request.conversationId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: messageFeedbackSubmitRequestSchema },
      },
      {
        success: { kind: "json", schema: messageFeedbackUpdateResponseSchema },
        errorFactory: Conversations.UpdateMessageFeedbackError,
      },
      options,
    );
  }
}

export namespace Conversations {
  export type AddMessageRequestParams = {
    conversationId: string;
    /** The follow-up question, with optional scope and model overrides. */
    body: AddMessageRequest;
  };

  export class AddMessageError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"error413", undefined>
      | Declared<"error422", undefined>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"error429", undefined>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddMessageError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 424, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type AddMessageStreamRequest = {
    /**
     * Identifier of the conversation to append the message to. The conversation must belong to the
     * caller and must not be deleted.
     */
    conversationId: string;
    /** Request payload */
    body: ConversationMessageStreamRequest;
  };

  export class AddMessageStreamError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddMessageStreamError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ArchiveConversationRequest = {
    /** Conversation identifier */
    conversationId: string;
  };

  export class ArchiveConversationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveConversationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CancelConversationStreamRequest = {
    conversationId: string;
    body: ConversationsCancelRequest;
  };

  export class CancelConversationStreamError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelConversationStreamError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CreateConversationRequestParams = {
    /** The first question, with optional scope, model and mode. */
    body: CreateConversationRequest;
  };

  export class CreateConversationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error413", undefined>
      | Declared<"error422", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"error429", undefined>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateConversationError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 424, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteConversationByIdRequest = {
    /** Unique conversation identifier */
    conversationId: string;
  };

  export class DeleteConversationByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteConversationByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ForkConversationRequest = {
    conversationId: string;
    /** Inclusive last message to copy into the new chat */
    messageId: string;
  };

  export class ForkConversationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ForkConversationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetAllConversationsRequest = {
    /**
     * `owned` — owner list (`userId` filter only). `shared` — explicit share grant list (`isShared`
     * + `sharedWith`). Defaults to `owned` when omitted.
     *
     * @default Source1.Owned
     */
    source?: Source1;
    /** Page number (1-based). Defaults to 1. */
    page?: number;
    /** Page size. Defaults to 20; capped by the server (max 100). */
    limit?: number;
    /** Sort field. Invalid values fall back to `lastActivityAt`. */
    sortBy?: SortBy4;
    /** Sort direction. Defaults to `desc` unless set to `asc`. */
    sortOrder?: SortOrder;
    /**
     * When set, restricts results to that conversation ID (if visible under the chosen `source`).
     */
    conversationId?: string;
    /** Case-insensitive match on title and message content (max 1000 characters). */
    search?: string;
    /** Filter by `createdAt` ≥ this ISO date. */
    startDate?: Date;
    /** Filter by `createdAt` ≤ this ISO date. */
    endDate?: Date;
    /** When set, filters by `isShared`. Accepts case-insensitive `true`/`false`, or `1`/`0`. */
    shared?: string;
    /**
     * Restrict results to a single project. Pass a project's `id` to list conversations linked to
     * that project (visible to the caller — owner, member, or org-visible project with
     * `projectVisibility: project`), or the literal string `unassigned` to list conversations with
     * no `projectId`.
     */
    projectId?: string;
  };

  export class GetAllConversationsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllConversationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type GetArchivedConversationsRequest = {
    /** Page number (1-indexed) @default 1 */
    page?: number;
    /** Items per page @default 20 */
    limit?: number;
    /** Field to sort by @default SortBy4.LastActivityAt */
    sortBy?: SortBy4;
    /** Sort direction @default SortOrder.Desc */
    sortOrder?: SortOrder;
    /** Case-insensitive substring match against title and message content (max 1000 chars) */
    search?: string;
    /** Filter by shared status */
    shared?: boolean;
    /** Include conversations created on or after this timestamp */
    startDate?: Date;
    /** Include conversations created on or before this timestamp */
    endDate?: Date;
    /** Restrict results to a single conversation by identifier */
    conversationId?: string;
  };

  export class GetArchivedConversationsError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetArchivedConversationsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type GetConversationByIdRequest = {
    /** Unique conversation identifier */
    conversationId: string;
    /** Page number for message pagination @default 1 */
    page?: number;
    /** Number of messages per page @default 20 */
    limit?: number;
    /** Field to sort messages by @default SortBy10.CreatedAt */
    sortBy?: SortBy10;
    /** Sort direction @default SortOrder.Desc */
    sortOrder?: SortOrder;
    /** Case-insensitive search across conversation title and message content */
    search?: string;
    /** Filter messages created on or after this date (ISO 8601) */
    startDate?: Date;
    /** Filter messages created on or before this date (ISO 8601) */
    endDate?: Date;
    /** Filter by shared status of the conversation */
    shared?: boolean;
    /** Filter messages by type */
    messageType?: MessageType4;
  };

  export class GetConversationByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConversationByIdError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type PinConversationRequest = {
    /** Conversation identifier */
    conversationId: string;
  };

  export class PinConversationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PinConversationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type RegenerateAnswerRequest = {
    conversationId: string;
    /** ID of the message to regenerate response for */
    messageId: string;
    /** Request payload */
    body?: RegenerateRequest;
  };

  export class RegenerateAnswerError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RegenerateAnswerError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type SearchArchivedConversationsRequest = {
    /** Search term to match against conversation titles and message content (max 1000 chars) */
    search: string;
    /** Page number (1-indexed) @default 1 */
    page?: number;
    /** Items per page @default 20 */
    limit?: number;
  };

  export class SearchArchivedConversationsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SearchArchivedConversationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type StreamChatRequest = {
    /** Request payload */
    body: ConversationStreamRequest;
  };

  export class StreamChatError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StreamChatError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UnarchiveConversationRequest = {
    /** Conversation identifier */
    conversationId: string;
  };

  export class UnarchiveConversationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnarchiveConversationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UnpinConversationRequest = {
    /** Conversation identifier */
    conversationId: string;
  };

  export class UnpinConversationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnpinConversationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateConversationTitleRequest = {
    /** Unique conversation identifier */
    conversationId: string;
    /** Request payload */
    body: ConversationsTitleRequest;
  };

  export class UpdateConversationTitleError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateConversationTitleError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateMessageFeedbackRequest = {
    /** Unique conversation identifier. */
    conversationId: string;
    /** Identifier of the bot-response message being rated. */
    messageId: string;
    /** Request payload */
    body: MessageFeedbackSubmitRequest;
  };

  export class UpdateMessageFeedbackError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMessageFeedbackError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
