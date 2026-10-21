import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { addMessageResponseSchema, type AddMessageResponse } from "../models/add-message-response.js";
import {
  agentAddMessageRequestSchema,
  type AgentAddMessageRequest,
} from "../models/agent-add-message-request.js";
import {
  agentAddMessageStreamRequestSchema,
  type AgentAddMessageStreamRequest,
} from "../models/agent-add-message-stream-request.js";
import {
  agentArchivedConversationListResponseSchema,
  type AgentArchivedConversationListResponse,
} from "../models/agent-archived-conversation-list-response.js";
import {
  agentArchivedGroupsResponseSchema,
  type AgentArchivedGroupsResponse,
} from "../models/agent-archived-groups-response.js";
import {
  agentConversationArchiveResponseSchema,
  type AgentConversationArchiveResponse,
} from "../models/agent-conversation-archive-response.js";
import {
  agentConversationDeleteResponseSchema,
  type AgentConversationDeleteResponse,
} from "../models/agent-conversation-delete-response.js";
import {
  agentConversationDetailResponseSchema,
  type AgentConversationDetailResponse,
} from "../models/agent-conversation-detail-response.js";
import {
  agentConversationListResponseSchema,
  type AgentConversationListResponse,
} from "../models/agent-conversation-list-response.js";
import {
  agentConversationTitleUpdateResponseSchema,
  type AgentConversationTitleUpdateResponse,
} from "../models/agent-conversation-title-update-response.js";
import {
  agentConversationUnarchiveResponseSchema,
  type AgentConversationUnarchiveResponse,
} from "../models/agent-conversation-unarchive-response.js";
import {
  agentCreateConversationRequestSchema,
  type AgentCreateConversationRequest,
} from "../models/agent-create-conversation-request.js";
import { agentCreateRequestSchema, type AgentCreateRequest } from "../models/agent-create-request.js";
import { agentCreateResponseSchema, type AgentCreateResponse } from "../models/agent-create-response.js";
import { agentDeleteResponseSchema, type AgentDeleteResponse } from "../models/agent-delete-response.js";
import { agentListResponseSchema, type AgentListResponse } from "../models/agent-list-response.js";
import {
  agentMessageStreamSseEventSchema,
  type AgentMessageStreamSseEvent,
} from "../models/agent-message-stream-sse-event.js";
import {
  agentRegenerateRequestSchema,
  type AgentRegenerateRequest,
} from "../models/agent-regenerate-request.js";
import {
  agentRegenerateSseEventSchema,
  type AgentRegenerateSseEvent,
} from "../models/agent-regenerate-sse-event.js";
import {
  agentStreamCreateConversationRequestSchema,
  type AgentStreamCreateConversationRequest,
} from "../models/agent-stream-create-conversation-request.js";
import { agentStreamSseEventSchema, type AgentStreamSseEvent } from "../models/agent-stream-sse-event.js";
import { agentUpdateRequestSchema, type AgentUpdateRequest } from "../models/agent-update-request.js";
import { agentUpdateResponseSchema, type AgentUpdateResponse } from "../models/agent-update-response.js";
import {
  agentsConversationsAttachments400Error1Schema,
  type AgentsConversationsAttachments400Error1,
} from "../models/agents-conversations-attachments400-error1.js";
import {
  agentsConversationsCancelRequestSchema,
  type AgentsConversationsCancelRequest,
} from "../models/agents-conversations-cancel-request.js";
import {
  agentsConversationsCancelResponseSchema,
  type AgentsConversationsCancelResponse,
} from "../models/agents-conversations-cancel-response.js";
import {
  chatAttachmentUploadResponseSchema,
  type ChatAttachmentUploadResponse,
} from "../models/chat-attachment-upload-response.js";
import {
  conversationTitleUpdateRequestSchema,
  type ConversationTitleUpdateRequest,
} from "../models/conversation-title-update-request.js";
import {
  createAgentConversationResponseSchema,
  type CreateAgentConversationResponse,
} from "../models/create-agent-conversation-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  forkConversationResponseSchema,
  type ForkConversationResponse,
} from "../models/fork-conversation-response.js";
import { getAgentResponseSchema, type GetAgentResponse } from "../models/get-agent-response.js";
import { isArchivedSchema, type IsArchived } from "../models/is-archived.js";
import {
  messageFeedbackSubmitRequestSchema,
  type MessageFeedbackSubmitRequest,
} from "../models/message-feedback-submit-request.js";
import {
  messageFeedbackUpdateResponseSchema,
  type MessageFeedbackUpdateResponse,
} from "../models/message-feedback-update-response.js";
import { messageType4Schema, type MessageType4 } from "../models/message-type4.js";
import { SortBy10, sortBy10Schema } from "../models/sort-by10.js";
import { sortBy4Schema, type SortBy4 } from "../models/sort-by4.js";
import { SortOrder, sortOrderSchema } from "../models/sort-order.js";
import { SortOrder15, sortOrder15Schema } from "../models/sort-order15.js";
import type { Servers } from "../servers.js";

/**
 * Custom AI agents with specialized capabilities and tool integrations
 */
export class Agents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add message to agent conversation (non-streaming)
   *
   * @remarks
   * Ask a follow-up in an existing agent conversation and wait for the complete answer. The JSON
   * counterpart of `POST /agents/{agentKey}/conversations/{conversationId}/messages/stream`.
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
   * @throws {@link Agents.AddAgentConversationMessageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addAgentConversationMessage(
    request: Agents.AddAgentConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<AddMessageResponse, Agents.AddAgentConversationMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/{conversationId}/messages"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentAddMessageRequestSchema },
      },
      {
        success: { kind: "json", schema: addMessageResponseSchema },
        errorFactory: Agents.AddAgentConversationMessageError,
      },
      options,
    );
  }

  /**
   * Archive an agent conversation
   *
   * @remarks
   * Marks the conversation as archived for the authenticated owner.
   *
   * @returns Conversation archived
   *
   * @throws {@link Agents.ArchiveAgentConversationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  archiveAgentConversation(
    request: Agents.ArchiveAgentConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentConversationArchiveResponse, Agents.ArchiveAgentConversationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/{conversationId}/archive"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentConversationArchiveResponseSchema },
        errorFactory: Agents.ArchiveAgentConversationError,
      },
      options,
    );
  }

  /**
   * Cancel an in-flight agent chat stream
   *
   * @remarks
   * Cooperatively stop a `POST /agents/{agentKey}/conversations/stream` or `.../messages/stream`
   * run that is still generating, using the `runId` sent when that stream started.
   *
   * Same synchronous JSON ack contract as the assistant `POST
   * /conversations/{conversationId}/cancel` — both forward to the same backend cancellation
   * endpoint, since the run registry is keyed by `runId` alone. `{ cancelled: false }` covers a
   * `runId` that already finished or was never registered.
   *
   * `runId` must belong to a run started on THIS `conversationId` — a `runId` that exists but was
   * registered under a different conversation (even one owned by the same caller) is rejected with
   * `403`, same as a `runId` owned by a different user/org.
   *
   * @returns Cancellation requested, or the run had already finished.
   *
   * @throws {@link Agents.CancelAgentConversationStreamError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelAgentConversationStream(
    request: Agents.CancelAgentConversationStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentsConversationsCancelResponse, Agents.CancelAgentConversationStreamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/{conversationId}/cancel"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentsConversationsCancelRequestSchema },
      },
      {
        success: { kind: "json", schema: agentsConversationsCancelResponseSchema },
        errorFactory: Agents.CancelAgentConversationStreamError,
      },
      options,
    );
  }

  /**
   * Create agent
   *
   * @remarks
   * Create a new custom AI agent.
   *
   * **Overview:** Agents are specialized AI assistants configured for specific tasks. They can have
   * custom system prompts, access to specific tools, and be limited to certain knowledge bases.
   *
   * **Agent Configuration:**
   * - **System prompt:** Instructions that define agent behavior
   * - **Tools:** Capabilities like web search, code execution, etc.
   * - **Knowledge bases:** Data sources the agent can access
   * - **Model config:** AI model settings (temperature, max tokens)
   *
   * **Use Cases:**
   * - Customer support bot with product knowledge
   * - Code review assistant with repository access
   * - HR assistant with policy documents
   *
   * @returns Agent created
   *
   * @throws {@link Agents.CreateAgentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAgent(
    request: Agents.CreateAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentCreateResponse, Agents.CreateAgentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agents/create"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: agentCreateResponseSchema },
        errorFactory: Agents.CreateAgentError,
      },
      options,
    );
  }

  /**
   * Create agent conversation (non-streaming)
   *
   * @remarks
   * Start a conversation with an agent and wait for the complete answer. The JSON counterpart of
   * `POST /agents/{agentKey}/conversations/stream`.
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
   * @returns Conversation created with the agent's first answer.
   *
   * @throws {@link Agents.CreateAgentConversationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAgentConversation(
    request: Agents.CreateAgentConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateAgentConversationResponse, Agents.CreateAgentConversationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "agentKey", value: request.agentKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentCreateConversationRequestSchema },
      },
      {
        success: { kind: "json", schema: createAgentConversationResponseSchema },
        errorFactory: Agents.CreateAgentConversationError,
      },
      options,
    );
  }

  /**
   * Delete agent
   *
   * @remarks
   * Soft-delete an agent (tombstone) in the graph database.
   *
   * **Overview:** The Python query service marks the agent instance deleted inside a transaction.
   * List and search endpoints exclude tombstoned agents. Toolsets, tools, and knowledge linked to
   * the agent are not removed by this call.
   *
   * **Permissions:** Only the agent owner may delete (`can_delete` on the permission check).
   *
   * **Warning:** All conversations with this agent will become inaccessible.
   *
   * **Gateway not-found behavior:** Unknown `agentKey`, deleting an already-deleted agent, and `GET
   * /agents/{agentKey}` after delete return **HTTP 404** with an `ErrorResponse` body.
   *
   * @returns Agent soft-deleted successfully
   *
   * @throws {@link Agents.DeleteAgentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAgent(
    request: Agents.DeleteAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentDeleteResponse, Agents.DeleteAgentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/agents/{agentKey}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "agentKey", value: request.agentKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentDeleteResponseSchema },
        errorFactory: Agents.DeleteAgentError,
      },
      options,
    );
  }

  /**
   * Delete an agent conversation
   *
   * @remarks
   * Soft-deletes an agent conversation owned by the authenticated user.
   *
   * The controller scopes the lookup by `_id`, `orgId`, `userId`, and `agentKey`. If no matching
   * writable conversation is found, the route is intentionally a no-op and still returns HTTP 200
   * with `conversation: null`.
   *
   * This makes the operation idempotent:
   *
   * - deleting a nonexistent conversation returns success with `null`
   * - deleting through a different `agentKey` returns success with `null`
   * - deleting an already deleted conversation returns success with `null`
   *
   * **Artifacts:** before the conversation is marked deleted, every artifact the caller created in
   * it is deleted for good (every version and stored file). Artifacts another participant created
   * stay theirs. If the cleanup cannot be done the conversation is left in place and the error is
   * returned (for example 503); repeating the request finishes it.
   *
   * @returns Conversation deleted or no-op delete completed successfully
   *
   * @throws {@link Agents.DeleteAgentConversationByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAgentConversationById(
    request: Agents.DeleteAgentConversationByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentConversationDeleteResponse, Agents.DeleteAgentConversationByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/{conversationId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentConversationDeleteResponseSchema },
        errorFactory: Agents.DeleteAgentConversationByIdError,
      },
      options,
    );
  }

  /**
   * Delete an agent chat attachment
   *
   * @remarks
   * Deletes a previously uploaded attachment by proxying `DELETE` to the query service
   * (`/api/v1/chat/attachments/{recordId}`). The Node handler always ends the response **without a
   * JSON body** on success (empty body); the **status code** is the upstream status, or **204** if
   * none is returned.
   *
   * On validation failure in the gateway (invalid / blank path params), the response is **400**
   * with a small JSON error object. Same fire-and-forget semantics as `DELETE
   * /conversations/attachments/{recordId}` on the client.
   *
   * @returns Success with no content (typical when upstream returns 204).
   *
   * @throws {@link Agents.DeleteAgentConversationChatAttachmentError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAgentConversationChatAttachment(
    request: Agents.DeleteAgentConversationChatAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Agents.DeleteAgentConversationChatAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/attachments/{recordId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "recordId", value: request.recordId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Agents.DeleteAgentConversationChatAttachmentError,
      },
      options,
    );
  }

  /**
   * Fork agent conversation from a message
   *
   * @remarks
   * Copy this agent conversation into a new private chat owned by the caller, including every
   * message up to and including `messageId`. The original conversation is left unchanged.
   *
   * Only the owner of the conversation can fork it; anyone else gets 404.
   *
   * @returns Forked conversation created
   *
   * @throws {@link Agents.ForkAgentConversationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  forkAgentConversation(
    request: Agents.ForkAgentConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<ForkConversationResponse, Agents.ForkAgentConversationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/agents/{agentKey}/conversations/{conversationId}/message/{messageId}/fork",
        ),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: forkConversationResponseSchema },
        errorFactory: Agents.ForkAgentConversationError,
      },
      options,
    );
  }

  /**
   * Get agent
   *
   * @remarks
   * Retrieve agent details by its unique key.
   *
   * **Gateway not-found behavior:** Unknown `agentKey`, lookup after soft-delete, and other
   * AI-backend failures that return 404 from the Python query service are surfaced by the Node
   * gateway as **HTTP 404** with an `ErrorResponse` body.
   *
   * @returns Agent details
   *
   * @throws {@link Agents.GetAgentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAgent(
    request: Agents.GetAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<GetAgentResponse, Agents.GetAgentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agents/{agentKey}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "agentKey", value: request.agentKey, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getAgentResponseSchema },
        errorFactory: Agents.GetAgentError,
      },
      options,
    );
  }

  /**
   * Get agent conversation by ID
   *
   * @remarks
   * Returns the conversation with paginated/sorted messages and filter metadata.
   *
   * **Message Pagination:**
   *
   * Messages are paginated newest-first: `page=1` returns the most recent batch. Increment `page`
   * to load older batches (used by the infinite-scroll "load older messages" feature).
   *
   * - `page`: Page number (default: 1)
   * - `limit`: Messages per page (default: 20, max: 100)
   *
   * @returns Agent conversation detail
   *
   * @throws {@link Agents.GetAgentConversationByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAgentConversationById(
    request: Agents.GetAgentConversationByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentConversationDetailResponse, Agents.GetAgentConversationByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/{conversationId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "sortBy", value: request.sortBy, schema: s.defaulted(sortBy10Schema, SortBy10.CreatedAt) },
          {
            name: "sortOrder",
            value: request.sortOrder,
            schema: s.defaulted(sortOrderSchema, SortOrder.Desc),
          },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateTime()) },
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
        success: { kind: "json", schema: agentConversationDetailResponseSchema },
        errorFactory: Agents.GetAgentConversationByIdError,
      },
      options,
    );
  }

  /**
   * List archived agent conversations grouped by agent
   *
   * @remarks
   * Returns archived agent conversations for the current user, grouped by `agentKey`, with
   * pagination over agent groups. Excludes conversations whose agent was soft-deleted upstream.
   *
   * @returns Grouped archived conversations
   *
   * @throws {@link Agents.ListAgentArchivedConversationsGroupedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAgentArchivedConversationsGrouped(
    request: Agents.ListAgentArchivedConversationsGroupedRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentArchivedGroupsResponse, Agents.ListAgentArchivedConversationsGroupedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agents/conversations/show/archives"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "agentPage", value: request.agentPage, schema: s.defaulted(s.int(), 1) },
          { name: "agentLimit", value: request.agentLimit, schema: s.defaulted(s.int(), 5) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentArchivedGroupsResponseSchema },
        errorFactory: Agents.ListAgentArchivedConversationsGroupedError,
      },
      options,
    );
  }

  /**
   * List archived conversations for an agent
   *
   * @remarks
   * Paginated list of archived conversations for the given agent key.
   *
   * @returns Archived conversations for the agent
   *
   * @throws {@link Agents.ListAgentConversationArchivesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAgentConversationArchives(
    request: Agents.ListAgentConversationArchivesRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentArchivedConversationListResponse, Agents.ListAgentConversationArchivesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/show/archives"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "agentKey", value: request.agentKey, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "sortBy", value: request.sortBy, schema: s.optional(s.lazy(() => sortBy4Schema)) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.lazy(() => sortOrderSchema)) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.dateTime()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentArchivedConversationListResponseSchema },
        errorFactory: Agents.ListAgentConversationArchivesError,
      },
      options,
    );
  }

  /**
   * List agent conversations
   *
   * @remarks
   * Paginated list of conversations for the agent (owned and shared-with-me), excluding archived
   * threads.
   *
   * @returns Conversation list
   *
   * @throws {@link Agents.ListAgentConversationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAgentConversations(
    request: Agents.ListAgentConversationsRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentConversationListResponse, Agents.ListAgentConversationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "agentKey", value: request.agentKey, schema: s.string() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "sortBy", value: request.sortBy, schema: s.optional(s.string()) },
          { name: "sortOrder", value: request.sortOrder, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "startDate", value: request.startDate, schema: s.optional(s.string()) },
          { name: "endDate", value: request.endDate, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          {
            name: "isArchived",
            value: request.isArchived,
            schema: s.optional(s.lazy(() => isArchivedSchema)),
          },
          { name: "projectId", value: request.projectId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentConversationListResponseSchema },
        errorFactory: Agents.ListAgentConversationsError,
      },
      options,
    );
  }

  /**
   * List agents
   *
   * @remarks
   * Retrieve a paginated list of agents available to the authenticated user.
   *
   * **Overview**
   *
   * Returns agents accessible through direct, team, or org-level permissions. Search is performed
   * across agent name, description, and tags. Sorting and pagination are applied by the AI backend
   * and the resulting envelope is forwarded unchanged by the Node gateway.
   *
   * **Gateway contract**
   *
   * The Node route supports only these query params: `page`, `limit`, `search`, `sort_by`, and
   * `sort_order`.
   *
   * The Python backend also understands `isDeleted`, but this gateway route does not forward it, so
   * it is not part of the public API contract here.
   *
   * @returns Paginated list of accessible agents.
   *
   * @throws {@link Agents.ListAgentsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAgents(
    request: Agents.ListAgentsRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentListResponse, Agents.ListAgentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/agents"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "sort_by", value: request.sortBy, schema: s.defaulted(s.string(), "updatedAtTimestamp") },
          {
            name: "sort_order",
            value: request.sortOrder,
            schema: s.defaulted(sortOrder15Schema, SortOrder15.Desc),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentListResponseSchema },
        errorFactory: Agents.ListAgentsError,
      },
      options,
    );
  }

  /**
   * Regenerate agent conversation message
   *
   * @remarks
   * Regenerate the AI response for a specific message in an agent conversation and stream the new
   * answer over Server-Sent Events.
   *
   * **Constraints:**
   *
   * - Only the last message in the conversation can be regenerated.
   * - The target message must be of type `bot_response`.
   *
   * **Request body:**
   *
   * `chatMode: quick` is required. Other fields are optional and reuse the original model/context
   * when omitted. The body supports:
   * - `filters`
   * - `chatMode`
   * - `modelKey`
   * - `modelName`
   * - `modelFriendlyName`
   * - `timezone`
   * - `currentTime`
   * - `tools`
   * - `protocol`
   * - `agentCapabilities`
   *
   * **Streaming behavior:**
   *
   * The response is delivered as an AG-UI `text/event-stream`. Stable outcomes are `RUN_FINISHED`
   * and `RUN_ERROR`; see `AgentRegenerateSSEEvent`.
   *
   * Additional agent/tool lifecycle events may be forwarded by the backend and should be treated as
   * informational updates.
   *
   * Validation failures on params/body are returned as normal HTTP `400` responses before the
   * stream starts. Valid-shape requests that fail conversation lookup or regenerate rules are
   * reported as `RUN_ERROR` events after stream initialization.
   *
   * @returns SSE stream established. Stable event names: - `RUN_FINISHED` — `{ type, result }`,
   * where `result` contains the updated conversation and metadata - `RUN_ERROR` — `{ type, message,
   * code? }`, reporting lookup, authorization, or regenerate-rule failures Forwarded lifecycle and
   * child-run events may include `runId`, `threadId`, and `parentRunId`. Additional backend-defined
   * agent/tool events may be emitted. Clients should ignore unknown event names.
   *
   * @throws {@link Agents.RegenerateAgentConversationMessageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  regenerateAgentConversationMessage(
    request: Agents.RegenerateAgentConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<AgentRegenerateSseEvent>, Agents.RegenerateAgentConversationMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/agents/{agentKey}/conversations/{conversationId}/message/{messageId}/regenerate",
        ),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentRegenerateRequestSchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: agentRegenerateSseEventSchema },
        errorFactory: Agents.RegenerateAgentConversationMessageError,
      },
      options,
    );
  }

  /**
   * Create agent conversation with streaming response
   *
   * @remarks
   * Start a new conversation with the specified agent and stream the AI response as Server-Sent
   * Events (SSE). The first user message is saved and forwarded to the upstream agent backend;
   * subsequent tokens, tool calls, and lifecycle events are emitted on the open SSE connection.
   *
   * AG-UI is the sole wire protocol. The request must include `chatMode: quick`; see
   * `AgentStreamSSEEvent` for the event vocabulary.
   *
   * @returns SSE stream (text/event-stream)
   *
   * @throws {@link Agents.StreamAgentConversationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  streamAgentConversation(
    request: Agents.StreamAgentConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<AgentStreamSseEvent>, Agents.StreamAgentConversationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/stream"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "agentKey", value: request.agentKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentStreamCreateConversationRequestSchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: agentStreamSseEventSchema },
        errorFactory: Agents.StreamAgentConversationError,
      },
      options,
    );
  }

  /**
   * Add message to agent conversation with streaming response
   *
   * @remarks
   * Append a user message to an existing agent conversation and stream the assistant reply over
   * SSE.
   *
   * AG-UI is the sole wire protocol. The request must include `chatMode: quick`; see
   * `AgentMessageStreamSSEEvent` for the event vocabulary.
   *
   * @returns SSE stream (text/event-stream)
   *
   * @throws {@link Agents.StreamAgentConversationMessageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  streamAgentConversationMessage(
    request: Agents.StreamAgentConversationMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<AgentMessageStreamSseEvent>, Agents.StreamAgentConversationMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/agents/{agentKey}/conversations/{conversationId}/messages/stream",
        ),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentAddMessageStreamRequestSchema },
      },
      {
        success: { kind: "eventStreamJson", dataSchema: agentMessageStreamSseEventSchema },
        errorFactory: Agents.StreamAgentConversationMessageError,
      },
      options,
    );
  }

  /**
   * Unarchive an agent conversation
   *
   * @remarks
   * Restores an archived agent conversation to the active list.
   *
   * @returns Conversation unarchived
   *
   * @throws {@link Agents.UnarchiveAgentConversationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unarchiveAgentConversation(
    request: Agents.UnarchiveAgentConversationRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentConversationUnarchiveResponse, Agents.UnarchiveAgentConversationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/{conversationId}/unarchive"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentConversationUnarchiveResponseSchema },
        errorFactory: Agents.UnarchiveAgentConversationError,
      },
      options,
    );
  }

  /**
   * Update agent
   *
   * @remarks
   * Apply a partial update to an existing agent configuration.
   *
   * **Gateway contract**
   *
   * The Node gateway validates the request body via Zod middleware before forwarding to the Python
   * agent service. The `agentKey` path param and the request body are both validated. Query
   * parameters are ignored by the controller.
   *
   * **Update semantics**
   *
   * Only fields present in the request body are updated. `models` may be omitted (the agent's
   * existing models are kept), set to an empty array (clears the agent's models so it falls back to
   * the organization's default LLM at chat time), or set to a non-empty array. When a non-empty
   * array is provided, the gateway Zod middleware requires at least one object entry with
   * `isReasoning: true`.
   *
   * **Permissions**
   *
   * The authenticated user must have `can_edit` on the agent (typically the owner). Service-account
   * and `shareWithOrg` transitions follow additional Python business rules.
   *
   * **Success response**
   *
   * Returns a lightweight success envelope only. Use `GET /agents/{agentKey}` to read the persisted
   * agent after an update.
   *
   * @returns Agent updated successfully
   *
   * @throws {@link Agents.UpdateAgentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAgent(
    request: Agents.UpdateAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentUpdateResponse, Agents.UpdateAgentError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/agents/{agentKey}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "agentKey", value: request.agentKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: agentUpdateResponseSchema },
        errorFactory: Agents.UpdateAgentError,
      },
      options,
    );
  }

  /**
   * Submit feedback for an agent message
   *
   * @remarks
   * Append structured feedback to a bot-response message in an agent conversation. Uses the same
   * request body shape as `updateMessageFeedback` (helpfulness, categories, comments). Feedback can
   * only be submitted on `bot_response` messages.
   *
   * @returns Feedback stored
   *
   * @throws {@link Agents.UpdateAgentConversationMessageFeedbackError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAgentConversationMessageFeedback(
    request: Agents.UpdateAgentConversationMessageFeedbackRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageFeedbackUpdateResponse, Agents.UpdateAgentConversationMessageFeedbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/agents/{agentKey}/conversations/{conversationId}/message/{messageId}/feedback",
        ),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: messageFeedbackSubmitRequestSchema },
      },
      {
        success: { kind: "json", schema: messageFeedbackUpdateResponseSchema },
        errorFactory: Agents.UpdateAgentConversationMessageFeedbackError,
      },
      options,
    );
  }

  /**
   * Update agent conversation title
   *
   * @remarks
   * Updates the display title for an agent conversation owned by the caller.
   *
   * The controller looks up the conversation by `_id`, `orgId`, `userId`, `agentKey`, and
   * `isDeleted: false`.
   *
   * The request body uses the shared title validator (`1..200` chars), and the controller trims the
   * incoming title before saving it. A whitespace-only title can therefore still return HTTP 400
   * even if the raw string is non-empty.
   *
   * @returns Title updated successfully
   *
   * @throws {@link Agents.UpdateAgentConversationTitleError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAgentConversationTitle(
    request: Agents.UpdateAgentConversationTitleRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentConversationTitleUpdateResponse, Agents.UpdateAgentConversationTitleError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/{conversationId}/title"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "agentKey", value: request.agentKey, schema: s.string() },
          { name: "conversationId", value: request.conversationId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: conversationTitleUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: agentConversationTitleUpdateResponseSchema },
        errorFactory: Agents.UpdateAgentConversationTitleError,
      },
      options,
    );
  }

  /**
   * Upload agent chat attachments
   *
   * @remarks
   * Multipart upload of PDF, JPEG, or PNG files for agent chat. Same limits as assistant chat
   * (`POST /conversations/attachments/upload`): up to 10 files, 5 MiB each. Proxies to the AI
   * backend. Optional `conversationId` associates uploads with an existing agent thread.
   *
   * @returns Success. The gateway proxies the AI-backend JSON envelope after transforming the
   * multipart upload into the backend attachment payload.
   *
   * @throws {@link Agents.UploadAgentConversationChatAttachmentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadAgentConversationChatAttachments(
    request: Agents.UploadAgentConversationChatAttachmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ChatAttachmentUploadResponse, Agents.UploadAgentConversationChatAttachmentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/agents/{agentKey}/conversations/attachments/upload"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "agentKey", value: request.agentKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "files", value: request.files },
            {
              kind: "text",
              name: "conversationId",
              value: request.conversationId,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: chatAttachmentUploadResponseSchema },
        errorFactory: Agents.UploadAgentConversationChatAttachmentsError,
      },
      options,
    );
  }
}

export namespace Agents {
  export type AddAgentConversationMessageRequest = {
    agentKey: string;
    conversationId: string;
    /** The follow-up question, with optional scope, model and tool overrides. */
    body: AgentAddMessageRequest;
  };

  export class AddAgentConversationMessageError extends ApiError {
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

    static readonly errors: ErrorDecoders<AddAgentConversationMessageError> = [
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

  export type ArchiveAgentConversationRequest = {
    agentKey: string;
    conversationId: string;
  };

  export class ArchiveAgentConversationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ArchiveAgentConversationError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CancelAgentConversationStreamRequest = {
    /** Stable key identifying the agent that owns this conversation. */
    agentKey: string;
    /** ID of the agent conversation to cancel a run for. */
    conversationId: string;
    body: AgentsConversationsCancelRequest;
  };

  export class CancelAgentConversationStreamError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelAgentConversationStreamError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CreateAgentRequest = {
    /** Request payload */
    body: AgentCreateRequest;
  };

  export class CreateAgentError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateAgentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type CreateAgentConversationRequest = {
    agentKey: string;
    /** The first question, with optional scope, model, project and tool overrides. */
    body: AgentCreateConversationRequest;
  };

  export class CreateAgentConversationError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateAgentConversationError> = [
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

  export type DeleteAgentRequest = {
    /** Unique agent identifier (gateway Zod requires non-empty string). */
    agentKey: string;
  };

  export class DeleteAgentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAgentError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteAgentConversationByIdRequest = {
    agentKey: string;
    conversationId: string;
  };

  export class DeleteAgentConversationByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAgentConversationByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteAgentConversationChatAttachmentRequest = {
    /** Agent key path parameter. Must be non-empty. */
    agentKey: string;
    /** Attachment record id (from the upload response). Must be non-blank after trim. */
    recordId: string;
  };

  export class DeleteAgentConversationChatAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"agentsConversationsAttachments400Error1", AgentsConversationsAttachments400Error1>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAgentConversationChatAttachmentError> = [
      {
        on: 400,
        kind: "agentsConversationsAttachments400Error1",
        decode: { kind: "json", schema: agentsConversationsAttachments400Error1Schema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type ForkAgentConversationRequest = {
    agentKey: string;
    conversationId: string;
    /** Inclusive last message to copy into the new chat */
    messageId: string;
  };

  export class ForkAgentConversationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ForkAgentConversationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetAgentRequest = {
    /** Unique agent identifier */
    agentKey: string;
  };

  export class GetAgentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAgentError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetAgentConversationByIdRequest = {
    agentKey: string;
    conversationId: string;
    /** Page number for message pagination (1 = most recent batch) @default 1 */
    page?: number;
    /** Number of messages per page @default 20 */
    limit?: number;
    /** Field to sort messages by @default SortBy10.CreatedAt */
    sortBy?: SortBy10;
    /** Sort direction @default SortOrder.Desc */
    sortOrder?: SortOrder;
    /** Filter messages created on or after this date */
    startDate?: Date;
    /** Filter messages created on or before this date */
    endDate?: Date;
    /** Filter messages by type */
    messageType?: MessageType4;
  };

  export class GetAgentConversationByIdError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetAgentConversationByIdError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListAgentArchivedConversationsGroupedRequest = {
    /** @default 1 */
    agentPage?: number;
    /** @default 5 */
    agentLimit?: number;
  };

  export class ListAgentArchivedConversationsGroupedError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListAgentArchivedConversationsGroupedError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type ListAgentConversationArchivesRequest = {
    agentKey: string;
    /** @default 1 */
    page?: number;
    /** @default 20 */
    limit?: number;
    sortBy?: SortBy4;
    sortOrder?: SortOrder;
    search?: string;
    startDate?: Date;
    endDate?: Date;
  };

  export class ListAgentConversationArchivesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAgentConversationArchivesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type ListAgentConversationsRequest = {
    /** Agent identifier used to scope the conversation list. */
    agentKey: string;
    /** 1-based page number. Defaults to `1`. @default 1 */
    page?: number;
    /** Page size. Defaults to `20`; maximum `100`. @default 20 */
    limit?: number;
    /**
     * Preferred sort field. Supported values are `createdAt`, `lastActivityAt`, and `title`.
     *
     * The current gateway validator preserves legacy behavior: unsupported values are accepted but
     * ignored, and the handler falls back to `lastActivityAt`.
     */
    sortBy?: string;
    /**
     * Preferred sort direction. Supported values are `asc` and `desc`.
     *
     * The current gateway validator preserves legacy behavior: unsupported values are accepted but
     * ignored, and the handler falls back to descending order.
     */
    sortOrder?: string;
    /**
     * Case-insensitive search term applied to conversation `title` and `messages.content`. Maximum
     * length is 1000 characters. HTML/XSS payloads and format specifiers are rejected.
     */
    search?: string;
    /**
     * Inclusive lower bound on `createdAt`. The handler accepts any JavaScript-parseable date
     * string; invalid values return HTTP 400.
     */
    startDate?: string;
    /**
     * Inclusive upper bound on `createdAt`. The handler accepts any JavaScript-parseable date
     * string; invalid values return HTTP 400.
     */
    endDate?: string;
    /**
     * Optional status filter applied to the `sharedWithMeConversations` branch of the response. The
     * main `conversations` list ignores this parameter.
     */
    status?: string;
    /**
     * Optional archived flag applied to the `sharedWithMeConversations` branch before the
     * route-level non-archived guard is enforced. Accepted values are `true` and `false`.
     */
    isArchived?: IsArchived;
    /**
     * Restrict results to a single project. Pass a project's `id`, or the literal string
     * `unassigned` to list agent conversations with no `projectId`.
     */
    projectId?: string;
  };

  export class ListAgentConversationsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAgentConversationsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListAgentsRequest = {
    /** 1-based page number. @default 1 */
    page?: number;
    /** Maximum number of agents to return in the current page. @default 20 */
    limit?: number;
    /**
     * Case-insensitive search across agent name, description, and tags. Leading/trailing whitespace
     * is trimmed; blank-after-trim values are rejected.
     */
    search?: string;
    /**
     * Backend sort field. Leading/trailing whitespace is trimmed. Common value is
     * `updatedAtTimestamp`.
     *
     * @default "updatedAtTimestamp"
     */
    sortBy?: string;
    /** Sort direction. @default SortOrder15.Desc */
    sortOrder?: SortOrder15;
  };

  export class ListAgentsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAgentsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RegenerateAgentConversationMessageRequest = {
    /** Stable key identifying the agent that owns this conversation. */
    agentKey: string;
    /** ID of the agent conversation containing the target message. */
    conversationId: string;
    /** ID of the bot-response message to regenerate. */
    messageId: string;
    /** Regeneration payload requiring `chatMode: quick`. */
    body: AgentRegenerateRequest;
  };

  export class RegenerateAgentConversationMessageError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RegenerateAgentConversationMessageError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type StreamAgentConversationRequest = {
    /** Stable key identifying the agent that owns this conversation. */
    agentKey: string;
    /** Initial turn payload for the new agent conversation stream. */
    body: AgentStreamCreateConversationRequest;
  };

  export class StreamAgentConversationError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StreamAgentConversationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type StreamAgentConversationMessageRequest = {
    agentKey: string;
    conversationId: string;
    /** Follow-up message payload for the agent conversation stream. */
    body: AgentAddMessageStreamRequest;
  };

  export class StreamAgentConversationMessageError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StreamAgentConversationMessageError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UnarchiveAgentConversationRequest = {
    agentKey: string;
    conversationId: string;
  };

  export class UnarchiveAgentConversationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnarchiveAgentConversationError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateAgentRequest = {
    /** Unique agent identifier */
    agentKey: string;
    /** Partial agent configuration fields to update */
    body: AgentUpdateRequest;
  };

  export class UpdateAgentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAgentError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateAgentConversationMessageFeedbackRequest = {
    /** Unique agent identifier (gateway Zod requires non-empty string). */
    agentKey: string;
    /** Unique conversation identifier. */
    conversationId: string;
    /** Identifier of the bot-response message being rated. */
    messageId: string;
    /** Feedback payload for the agent message. */
    body: MessageFeedbackSubmitRequest;
  };

  export class UpdateAgentConversationMessageFeedbackError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAgentConversationMessageFeedbackError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateAgentConversationTitleRequest = {
    agentKey: string;
    conversationId: string;
    /**
     * New title for the agent conversation.
     *
     * The server trims the provided string before saving it.
     */
    body: ConversationTitleUpdateRequest;
  };

  export class UpdateAgentConversationTitleError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAgentConversationTitleError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UploadAgentConversationChatAttachmentsRequest = {
    agentKey: string;
    /**
     * One or more files; field name must be `files`. Accepted MIME types: `application/pdf`,
     * `image/jpeg`, `image/jpg`, `image/png`, `text/plain`, `text/markdown`, `text/mdx`,
     * `application/vnd.openxmlformats-officedocument.wordprocessingml.document`,
     * `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`, `text/csv`,
     * `text/tab-separated-values`. Max 5 MiB each.
     */
    files: FileInput;
    /**
     * Optional existing agent conversation id. Empty string is treated as unset; any non-empty
     * value must be a 24-character ObjectId.
     */
    conversationId?: string;
  };

  export class UploadAgentConversationChatAttachmentsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadAgentConversationChatAttachmentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
