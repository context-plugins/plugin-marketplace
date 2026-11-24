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
  apiV1ConversationsArchiveResponseSchema,
  type ApiV1ConversationsArchiveResponse,
} from "../models/api-v1-conversations-archive-response.js";
import {
  apiV1ConversationsArchive400Error1Schema,
  type ApiV1ConversationsArchive400Error1,
} from "../models/api-v1-conversations-archive400-error1.js";
import {
  apiV1ConversationsArchive401Error1Schema,
  type ApiV1ConversationsArchive401Error1,
} from "../models/api-v1-conversations-archive401-error1.js";
import {
  apiV1ConversationsArchive403Error1Schema,
  type ApiV1ConversationsArchive403Error1,
} from "../models/api-v1-conversations-archive403-error1.js";
import {
  apiV1ConversationsArchive404Error1Schema,
  type ApiV1ConversationsArchive404Error1,
} from "../models/api-v1-conversations-archive404-error1.js";
import {
  apiV1ConversationsArchive429Error1Schema,
  type ApiV1ConversationsArchive429Error1,
} from "../models/api-v1-conversations-archive429-error1.js";
import {
  apiV1ConversationsArchive500Error1Schema,
  type ApiV1ConversationsArchive500Error1,
} from "../models/api-v1-conversations-archive500-error1.js";
import {
  apiV1ConversationsArchive502Error1Schema,
  type ApiV1ConversationsArchive502Error1,
} from "../models/api-v1-conversations-archive502-error1.js";
import {
  apiV1ConversationsArchive503Error1Schema,
  type ApiV1ConversationsArchive503Error1,
} from "../models/api-v1-conversations-archive503-error1.js";
import {
  apiV1ConversationsArchive504Error1Schema,
  type ApiV1ConversationsArchive504Error1,
} from "../models/api-v1-conversations-archive504-error1.js";
import {
  apiV1ConversationsMessagesReactionRequestSchema,
  type ApiV1ConversationsMessagesReactionRequest,
} from "../models/api-v1-conversations-messages-reaction-request.js";
import {
  apiV1ConversationsMessagesReactionResponseInternalSchema,
  type ApiV1ConversationsMessagesReactionResponse,
} from "../models/api-v1-conversations-messages-reaction-response.js";
import {
  apiV1ConversationsMessagesReaction400Error1Schema,
  type ApiV1ConversationsMessagesReaction400Error1,
} from "../models/api-v1-conversations-messages-reaction400-error1.js";
import {
  apiV1ConversationsMessagesReaction401Error1Schema,
  type ApiV1ConversationsMessagesReaction401Error1,
} from "../models/api-v1-conversations-messages-reaction401-error1.js";
import {
  apiV1ConversationsMessagesReaction403Error1Schema,
  type ApiV1ConversationsMessagesReaction403Error1,
} from "../models/api-v1-conversations-messages-reaction403-error1.js";
import {
  apiV1ConversationsMessagesReaction404Error1Schema,
  type ApiV1ConversationsMessagesReaction404Error1,
} from "../models/api-v1-conversations-messages-reaction404-error1.js";
import {
  apiV1ConversationsMessagesReaction429Error1Schema,
  type ApiV1ConversationsMessagesReaction429Error1,
} from "../models/api-v1-conversations-messages-reaction429-error1.js";
import {
  apiV1ConversationsMessagesReaction500Error1Schema,
  type ApiV1ConversationsMessagesReaction500Error1,
} from "../models/api-v1-conversations-messages-reaction500-error1.js";
import {
  apiV1ConversationsMessagesReaction502Error1Schema,
  type ApiV1ConversationsMessagesReaction502Error1,
} from "../models/api-v1-conversations-messages-reaction502-error1.js";
import {
  apiV1ConversationsMessagesReaction503Error1Schema,
  type ApiV1ConversationsMessagesReaction503Error1,
} from "../models/api-v1-conversations-messages-reaction503-error1.js";
import {
  apiV1ConversationsMessagesReaction504Error1Schema,
  type ApiV1ConversationsMessagesReaction504Error1,
} from "../models/api-v1-conversations-messages-reaction504-error1.js";
import {
  apiV1ConversationsMessagesRequestInternalSchema,
  type ApiV1ConversationsMessagesRequest,
} from "../models/api-v1-conversations-messages-request.js";
import {
  apiV1ConversationsMessagesResponseInternalSchema,
  type ApiV1ConversationsMessagesResponse,
} from "../models/api-v1-conversations-messages-response.js";
import {
  apiV1ConversationsMessagesResponse1InternalSchema,
  type ApiV1ConversationsMessagesResponse1,
} from "../models/api-v1-conversations-messages-response1.js";
import {
  apiV1ConversationsMessages400Error1Schema,
  type ApiV1ConversationsMessages400Error1,
} from "../models/api-v1-conversations-messages400-error1.js";
import {
  apiV1ConversationsMessages401Error1Schema,
  type ApiV1ConversationsMessages401Error1,
} from "../models/api-v1-conversations-messages401-error1.js";
import {
  apiV1ConversationsMessages403Error1Schema,
  type ApiV1ConversationsMessages403Error1,
} from "../models/api-v1-conversations-messages403-error1.js";
import {
  apiV1ConversationsMessages404Error1Schema,
  type ApiV1ConversationsMessages404Error1,
} from "../models/api-v1-conversations-messages404-error1.js";
import {
  apiV1ConversationsMessages429Error1Schema,
  type ApiV1ConversationsMessages429Error1,
} from "../models/api-v1-conversations-messages429-error1.js";
import {
  apiV1ConversationsMessages500Error1Schema,
  type ApiV1ConversationsMessages500Error1,
} from "../models/api-v1-conversations-messages500-error1.js";
import {
  apiV1ConversationsMessages502Error1Schema,
  type ApiV1ConversationsMessages502Error1,
} from "../models/api-v1-conversations-messages502-error1.js";
import {
  apiV1ConversationsMessages503Error1Schema,
  type ApiV1ConversationsMessages503Error1,
} from "../models/api-v1-conversations-messages503-error1.js";
import {
  apiV1ConversationsMessages504Error1Schema,
  type ApiV1ConversationsMessages504Error1,
} from "../models/api-v1-conversations-messages504-error1.js";
import {
  apiV1ConversationsOpenResponseSchema,
  type ApiV1ConversationsOpenResponse,
} from "../models/api-v1-conversations-open-response.js";
import {
  apiV1ConversationsOpen400Error1Schema,
  type ApiV1ConversationsOpen400Error1,
} from "../models/api-v1-conversations-open400-error1.js";
import {
  apiV1ConversationsOpen401Error1Schema,
  type ApiV1ConversationsOpen401Error1,
} from "../models/api-v1-conversations-open401-error1.js";
import {
  apiV1ConversationsOpen403Error1Schema,
  type ApiV1ConversationsOpen403Error1,
} from "../models/api-v1-conversations-open403-error1.js";
import {
  apiV1ConversationsOpen404Error1Schema,
  type ApiV1ConversationsOpen404Error1,
} from "../models/api-v1-conversations-open404-error1.js";
import {
  apiV1ConversationsOpen429Error1Schema,
  type ApiV1ConversationsOpen429Error1,
} from "../models/api-v1-conversations-open429-error1.js";
import {
  apiV1ConversationsOpen500Error1Schema,
  type ApiV1ConversationsOpen500Error1,
} from "../models/api-v1-conversations-open500-error1.js";
import {
  apiV1ConversationsOpen502Error1Schema,
  type ApiV1ConversationsOpen502Error1,
} from "../models/api-v1-conversations-open502-error1.js";
import {
  apiV1ConversationsOpen503Error1Schema,
  type ApiV1ConversationsOpen503Error1,
} from "../models/api-v1-conversations-open503-error1.js";
import {
  apiV1ConversationsOpen504Error1Schema,
  type ApiV1ConversationsOpen504Error1,
} from "../models/api-v1-conversations-open504-error1.js";
import {
  apiV1ConversationsPrivateReplyRequestInternalSchema,
  type ApiV1ConversationsPrivateReplyRequest,
} from "../models/api-v1-conversations-private-reply-request.js";
import {
  apiV1ConversationsPrivateReplyResponseInternalSchema,
  type ApiV1ConversationsPrivateReplyResponse,
} from "../models/api-v1-conversations-private-reply-response.js";
import {
  apiV1ConversationsPrivateReply400Error1Schema,
  type ApiV1ConversationsPrivateReply400Error1,
} from "../models/api-v1-conversations-private-reply400-error1.js";
import {
  apiV1ConversationsPrivateReply401Error1Schema,
  type ApiV1ConversationsPrivateReply401Error1,
} from "../models/api-v1-conversations-private-reply401-error1.js";
import {
  apiV1ConversationsPrivateReply403Error1Schema,
  type ApiV1ConversationsPrivateReply403Error1,
} from "../models/api-v1-conversations-private-reply403-error1.js";
import {
  apiV1ConversationsPrivateReply404Error1Schema,
  type ApiV1ConversationsPrivateReply404Error1,
} from "../models/api-v1-conversations-private-reply404-error1.js";
import {
  apiV1ConversationsPrivateReply429Error1Schema,
  type ApiV1ConversationsPrivateReply429Error1,
} from "../models/api-v1-conversations-private-reply429-error1.js";
import {
  apiV1ConversationsPrivateReply500Error1Schema,
  type ApiV1ConversationsPrivateReply500Error1,
} from "../models/api-v1-conversations-private-reply500-error1.js";
import {
  apiV1ConversationsPrivateReply502Error1Schema,
  type ApiV1ConversationsPrivateReply502Error1,
} from "../models/api-v1-conversations-private-reply502-error1.js";
import {
  apiV1ConversationsPrivateReply503Error1Schema,
  type ApiV1ConversationsPrivateReply503Error1,
} from "../models/api-v1-conversations-private-reply503-error1.js";
import {
  apiV1ConversationsPrivateReply504Error1Schema,
  type ApiV1ConversationsPrivateReply504Error1,
} from "../models/api-v1-conversations-private-reply504-error1.js";
import {
  apiV1ConversationsReadRequestSchema,
  type ApiV1ConversationsReadRequest,
} from "../models/api-v1-conversations-read-request.js";
import {
  apiV1ConversationsReadResponseSchema,
  type ApiV1ConversationsReadResponse,
} from "../models/api-v1-conversations-read-response.js";
import {
  apiV1ConversationsRead400Error1Schema,
  type ApiV1ConversationsRead400Error1,
} from "../models/api-v1-conversations-read400-error1.js";
import {
  apiV1ConversationsRead401Error1Schema,
  type ApiV1ConversationsRead401Error1,
} from "../models/api-v1-conversations-read401-error1.js";
import {
  apiV1ConversationsRead403Error1Schema,
  type ApiV1ConversationsRead403Error1,
} from "../models/api-v1-conversations-read403-error1.js";
import {
  apiV1ConversationsRead404Error1Schema,
  type ApiV1ConversationsRead404Error1,
} from "../models/api-v1-conversations-read404-error1.js";
import {
  apiV1ConversationsRead429Error1Schema,
  type ApiV1ConversationsRead429Error1,
} from "../models/api-v1-conversations-read429-error1.js";
import {
  apiV1ConversationsRead500Error1Schema,
  type ApiV1ConversationsRead500Error1,
} from "../models/api-v1-conversations-read500-error1.js";
import {
  apiV1ConversationsRead502Error1Schema,
  type ApiV1ConversationsRead502Error1,
} from "../models/api-v1-conversations-read502-error1.js";
import {
  apiV1ConversationsRead503Error1Schema,
  type ApiV1ConversationsRead503Error1,
} from "../models/api-v1-conversations-read503-error1.js";
import {
  apiV1ConversationsRead504Error1Schema,
  type ApiV1ConversationsRead504Error1,
} from "../models/api-v1-conversations-read504-error1.js";
import {
  apiV1ConversationsRequestSchema,
  type ApiV1ConversationsRequest,
} from "../models/api-v1-conversations-request.js";
import {
  apiV1ConversationsResponseSchema,
  type ApiV1ConversationsResponse,
} from "../models/api-v1-conversations-response.js";
import {
  apiV1ConversationsResponse1Schema,
  type ApiV1ConversationsResponse1,
} from "../models/api-v1-conversations-response1.js";
import {
  apiV1Conversations400Error1Schema,
  type ApiV1Conversations400Error1,
} from "../models/api-v1-conversations400-error1.js";
import {
  apiV1Conversations401Error1Schema,
  type ApiV1Conversations401Error1,
} from "../models/api-v1-conversations401-error1.js";
import {
  apiV1Conversations403Error1Schema,
  type ApiV1Conversations403Error1,
} from "../models/api-v1-conversations403-error1.js";
import {
  apiV1Conversations404Error1Schema,
  type ApiV1Conversations404Error1,
} from "../models/api-v1-conversations404-error1.js";
import {
  apiV1Conversations429Error1Schema,
  type ApiV1Conversations429Error1,
} from "../models/api-v1-conversations429-error1.js";
import {
  apiV1Conversations500Error1Schema,
  type ApiV1Conversations500Error1,
} from "../models/api-v1-conversations500-error1.js";
import {
  apiV1Conversations502Error1Schema,
  type ApiV1Conversations502Error1,
} from "../models/api-v1-conversations502-error1.js";
import {
  apiV1Conversations503Error1Schema,
  type ApiV1Conversations503Error1,
} from "../models/api-v1-conversations503-error1.js";
import {
  apiV1Conversations504Error1Schema,
  type ApiV1Conversations504Error1,
} from "../models/api-v1-conversations504-error1.js";
import {
  platformBundleSocialConversationApiSchema,
  type PlatformBundleSocialConversationApi,
} from "../models/platform-bundle-social-conversation-api.js";
import {
  statusBundleSocialConversationApiSchema,
  type StatusBundleSocialConversationApi,
} from "../models/status-bundle-social-conversation-api.js";
import type { Servers } from "../servers.js";

/**
 * Read and reply to Instagram and Facebook direct message conversations, react to messages, and
 * send private replies to comments.
 */
export class ConversationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Archive conversation
   *
   * @remarks
   * Move a conversation out of the active inbox. Incoming messages reopen it automatically.
   *
   * @returns 200
   *
   * @throws {@link ConversationApi.ConversationArchiveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationArchive(
    request: ConversationApi.ConversationArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ConversationsArchiveResponse, ConversationApi.ConversationArchiveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/conversations/{id}/archive"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ConversationsArchiveResponseSchema },
        errorFactory: ConversationApi.ConversationArchiveError,
      },
      options,
    );
  }

  /**
   * Get conversation
   *
   * @remarks
   * Get a single conversation by id, including the participant, the linked social account and its
   * unread and status flags.
   *
   * @returns 200
   *
   * @throws {@link ConversationApi.ConversationGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationGet(
    request: ConversationApi.ConversationGetRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ConversationsResponse1, ConversationApi.ConversationGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/conversations/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ConversationsResponse1Schema },
        errorFactory: ConversationApi.ConversationGetError,
      },
      options,
    );
  }

  /**
   * Get conversations
   *
   * @remarks
   * List conversations for a team, newest activity first. Filter by `socialAccountId`, `platform`
   * and `status`. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous
   * response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on
   * the first page only.
   *
   * @returns 200
   *
   * @throws {@link ConversationApi.ConversationGetListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationGetList(
    request: ConversationApi.ConversationGetListRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ConversationsResponse, ConversationApi.ConversationGetListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/conversations/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "teamId", value: request.teamId, schema: s.string() },
          {
            name: "platform",
            value: request.platform,
            schema: s.optional(s.lazy(() => platformBundleSocialConversationApiSchema)),
          },
          { name: "socialAccountId", value: request.socialAccountId, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusBundleSocialConversationApiSchema)),
          },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.int()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.int()), 10) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ConversationsResponseSchema },
        errorFactory: ConversationApi.ConversationGetListError,
      },
      options,
    );
  }

  /**
   * Get conversation messages
   *
   * @remarks
   * List the messages of a conversation. Pages walk backwards in time, while the messages inside a
   * page are ordered oldest first, ready to render. Includes attachments, reactions and delivery
   * state. Paginate with `offset` (`limit` max 500, default 10) or by passing the previous
   * response's `nextCursor` back as `cursor`; the two cannot be combined. `total` is returned on
   * the first page only.
   *
   * @returns 200
   *
   * @throws {@link ConversationApi.ConversationGetMessagesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationGetMessages(
    request: ConversationApi.ConversationGetMessagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ConversationsMessagesResponse, ConversationApi.ConversationGetMessagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/conversations/{id}/messages"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.int()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.int()), 10) },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ConversationsMessagesResponseInternalSchema },
        errorFactory: ConversationApi.ConversationGetMessagesError,
      },
      options,
    );
  }

  /**
   * Mark conversation as read
   *
   * @remarks
   * Clear the unread state of a conversation, optionally up to a specific message.
   *
   * @returns 200
   *
   * @throws {@link ConversationApi.ConversationMarkReadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationMarkRead(
    request: ConversationApi.ConversationMarkReadRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ConversationsReadResponse, ConversationApi.ConversationMarkReadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/conversations/{id}/read"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ConversationsReadRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ConversationsReadResponseSchema },
        errorFactory: ConversationApi.ConversationMarkReadError,
      },
      options,
    );
  }

  /**
   * Open conversation
   *
   * @remarks
   * Move an archived or closed conversation back into the active inbox.
   *
   * @returns 200
   *
   * @throws {@link ConversationApi.ConversationOpenError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationOpen(
    request: ConversationApi.ConversationOpenRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ConversationsOpenResponse, ConversationApi.ConversationOpenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/conversations/{id}/open"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ConversationsOpenResponseSchema },
        errorFactory: ConversationApi.ConversationOpenError,
      },
      options,
    );
  }

  /**
   * Send a private reply to a fetched Meta comment
   *
   * @remarks
   * Send a direct message in reply to a Facebook or Instagram comment we have already imported.
   * Creates the conversation when none exists yet. Returns 503 while messaging sending is
   * temporarily disabled.
   *
   * @returns 200
   *
   * @throws {@link ConversationApi.ConversationPrivateReplyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationPrivateReply(
    request: ConversationApi.ConversationPrivateReplyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ConversationsPrivateReplyResponse, ConversationApi.ConversationPrivateReplyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/conversations/private-reply"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ConversationsPrivateReplyRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ConversationsPrivateReplyResponseInternalSchema },
        errorFactory: ConversationApi.ConversationPrivateReplyError,
      },
      options,
    );
  }

  /**
   * React or unreact to a conversation message
   *
   * @remarks
   * Add or remove a reaction on a message in a conversation. Returns 503 while messaging sending is
   * temporarily disabled.
   *
   * @returns 200
   *
   * @throws {@link ConversationApi.ConversationReactMessageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationReactMessage(
    request: ConversationApi.ConversationReactMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ConversationsMessagesReactionResponse, ConversationApi.ConversationReactMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/conversations/{id}/messages/{messageId}/reaction"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "messageId", value: request.messageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ConversationsMessagesReactionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ConversationsMessagesReactionResponseInternalSchema },
        errorFactory: ConversationApi.ConversationReactMessageError,
      },
      options,
    );
  }

  /**
   * Send a conversation message
   *
   * @remarks
   * Send a message to the participant of a conversation. The platform reply window must still be
   * open. Returns 503 while messaging sending is temporarily disabled.
   *
   * @returns 200
   *
   * @throws {@link ConversationApi.ConversationSendMessageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationSendMessage(
    request: ConversationApi.ConversationSendMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ConversationsMessagesResponse1, ConversationApi.ConversationSendMessageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/conversations/{id}/messages"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ConversationsMessagesRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ConversationsMessagesResponse1InternalSchema },
        errorFactory: ConversationApi.ConversationSendMessageError,
      },
      options,
    );
  }

  /**
   * Update conversation
   *
   * @remarks
   * Set the status of a conversation. This is the general form of the archive and open endpoints,
   * which move a conversation to one specific status.
   *
   * @returns 200
   *
   * @throws {@link ConversationApi.ConversationUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  conversationUpdate(
    request: ConversationApi.ConversationUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ConversationsResponse1, ConversationApi.ConversationUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/conversations/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ConversationsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ConversationsResponse1Schema },
        errorFactory: ConversationApi.ConversationUpdateError,
      },
      options,
    );
  }
}

export namespace ConversationApi {
  export type ConversationArchiveRequest = {
    id: string;
  };

  export class ConversationArchiveError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1ConversationsArchive400Error1", ApiV1ConversationsArchive400Error1>
      | Declared<"apiV1ConversationsArchive401Error1", ApiV1ConversationsArchive401Error1>
      | Declared<"apiV1ConversationsArchive403Error1", ApiV1ConversationsArchive403Error1>
      | Declared<"apiV1ConversationsArchive404Error1", ApiV1ConversationsArchive404Error1>
      | Declared<"apiV1ConversationsArchive429Error1", ApiV1ConversationsArchive429Error1>
      | Declared<"apiV1ConversationsArchive500Error1", ApiV1ConversationsArchive500Error1>
      | Declared<"apiV1ConversationsArchive502Error1", ApiV1ConversationsArchive502Error1>
      | Declared<"apiV1ConversationsArchive503Error1", ApiV1ConversationsArchive503Error1>
      | Declared<"apiV1ConversationsArchive504Error1", ApiV1ConversationsArchive504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConversationArchiveError> = [
      {
        on: 400,
        kind: "apiV1ConversationsArchive400Error1",
        decode: { kind: "json", schema: apiV1ConversationsArchive400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1ConversationsArchive401Error1",
        decode: { kind: "json", schema: apiV1ConversationsArchive401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1ConversationsArchive403Error1",
        decode: { kind: "json", schema: apiV1ConversationsArchive403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1ConversationsArchive404Error1",
        decode: { kind: "json", schema: apiV1ConversationsArchive404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1ConversationsArchive429Error1",
        decode: { kind: "json", schema: apiV1ConversationsArchive429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1ConversationsArchive500Error1",
        decode: { kind: "json", schema: apiV1ConversationsArchive500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1ConversationsArchive502Error1",
        decode: { kind: "json", schema: apiV1ConversationsArchive502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1ConversationsArchive503Error1",
        decode: { kind: "json", schema: apiV1ConversationsArchive503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1ConversationsArchive504Error1",
        decode: { kind: "json", schema: apiV1ConversationsArchive504Error1Schema },
      },
    ];
  }

  export type ConversationGetRequest = {
    id: string;
  };

  export class ConversationGetError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Conversations400Error1", ApiV1Conversations400Error1>
      | Declared<"apiV1Conversations401Error1", ApiV1Conversations401Error1>
      | Declared<"apiV1Conversations403Error1", ApiV1Conversations403Error1>
      | Declared<"apiV1Conversations404Error1", ApiV1Conversations404Error1>
      | Declared<"apiV1Conversations429Error1", ApiV1Conversations429Error1>
      | Declared<"apiV1Conversations500Error1", ApiV1Conversations500Error1>
      | Declared<"apiV1Conversations502Error1", ApiV1Conversations502Error1>
      | Declared<"apiV1Conversations503Error1", ApiV1Conversations503Error1>
      | Declared<"apiV1Conversations504Error1", ApiV1Conversations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConversationGetError> = [
      {
        on: 400,
        kind: "apiV1Conversations400Error1",
        decode: { kind: "json", schema: apiV1Conversations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Conversations401Error1",
        decode: { kind: "json", schema: apiV1Conversations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Conversations403Error1",
        decode: { kind: "json", schema: apiV1Conversations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Conversations404Error1",
        decode: { kind: "json", schema: apiV1Conversations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Conversations429Error1",
        decode: { kind: "json", schema: apiV1Conversations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Conversations500Error1",
        decode: { kind: "json", schema: apiV1Conversations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Conversations502Error1",
        decode: { kind: "json", schema: apiV1Conversations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Conversations503Error1",
        decode: { kind: "json", schema: apiV1Conversations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Conversations504Error1",
        decode: { kind: "json", schema: apiV1Conversations504Error1Schema },
      },
    ];
  }

  export type ConversationGetListRequest = {
    teamId: string;
    platform?: PlatformBundleSocialConversationApi;
    socialAccountId?: string;
    status?: StatusBundleSocialConversationApi;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
    cursor?: string | null;
  };

  export const conversationGetListRequestSchema: Schema<ConversationGetListRequest> = s.lazySchema(() =>
    s.object<ConversationGetListRequest>({
      teamId: s.string(),
      platform: s.optional(s.lazy(() => platformBundleSocialConversationApiSchema)),
      socialAccountId: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusBundleSocialConversationApiSchema)),
      offset: s.defaulted(s.nullable(s.int().check(s.gte(0))), 0),
      limit: s.defaulted(s.nullable(s.int().check(s.gte(1), s.lte(500))), 10),
      cursor: s.optionalNullable(s.string()),
    }),
  );

  export class ConversationGetListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Conversations400Error1", ApiV1Conversations400Error1>
      | Declared<"apiV1Conversations401Error1", ApiV1Conversations401Error1>
      | Declared<"apiV1Conversations403Error1", ApiV1Conversations403Error1>
      | Declared<"apiV1Conversations404Error1", ApiV1Conversations404Error1>
      | Declared<"apiV1Conversations429Error1", ApiV1Conversations429Error1>
      | Declared<"apiV1Conversations500Error1", ApiV1Conversations500Error1>
      | Declared<"apiV1Conversations502Error1", ApiV1Conversations502Error1>
      | Declared<"apiV1Conversations503Error1", ApiV1Conversations503Error1>
      | Declared<"apiV1Conversations504Error1", ApiV1Conversations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConversationGetListError> = [
      {
        on: 400,
        kind: "apiV1Conversations400Error1",
        decode: { kind: "json", schema: apiV1Conversations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Conversations401Error1",
        decode: { kind: "json", schema: apiV1Conversations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Conversations403Error1",
        decode: { kind: "json", schema: apiV1Conversations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Conversations404Error1",
        decode: { kind: "json", schema: apiV1Conversations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Conversations429Error1",
        decode: { kind: "json", schema: apiV1Conversations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Conversations500Error1",
        decode: { kind: "json", schema: apiV1Conversations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Conversations502Error1",
        decode: { kind: "json", schema: apiV1Conversations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Conversations503Error1",
        decode: { kind: "json", schema: apiV1Conversations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Conversations504Error1",
        decode: { kind: "json", schema: apiV1Conversations504Error1Schema },
      },
    ];
  }

  export type ConversationGetMessagesRequest = {
    id: string;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
    cursor?: string | null;
  };

  export const conversationGetMessagesRequestSchema: Schema<ConversationGetMessagesRequest> = s.lazySchema(
    () =>
      s.object<ConversationGetMessagesRequest>({
        id: s.string(),
        offset: s.defaulted(s.nullable(s.int().check(s.gte(0))), 0),
        limit: s.defaulted(s.nullable(s.int().check(s.gte(1), s.lte(500))), 10),
        cursor: s.optionalNullable(s.string()),
      }),
  );

  export class ConversationGetMessagesError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1ConversationsMessages400Error1", ApiV1ConversationsMessages400Error1>
      | Declared<"apiV1ConversationsMessages401Error1", ApiV1ConversationsMessages401Error1>
      | Declared<"apiV1ConversationsMessages403Error1", ApiV1ConversationsMessages403Error1>
      | Declared<"apiV1ConversationsMessages404Error1", ApiV1ConversationsMessages404Error1>
      | Declared<"apiV1ConversationsMessages429Error1", ApiV1ConversationsMessages429Error1>
      | Declared<"apiV1ConversationsMessages500Error1", ApiV1ConversationsMessages500Error1>
      | Declared<"apiV1ConversationsMessages502Error1", ApiV1ConversationsMessages502Error1>
      | Declared<"apiV1ConversationsMessages503Error1", ApiV1ConversationsMessages503Error1>
      | Declared<"apiV1ConversationsMessages504Error1", ApiV1ConversationsMessages504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConversationGetMessagesError> = [
      {
        on: 400,
        kind: "apiV1ConversationsMessages400Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1ConversationsMessages401Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1ConversationsMessages403Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1ConversationsMessages404Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1ConversationsMessages429Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1ConversationsMessages500Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1ConversationsMessages502Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1ConversationsMessages503Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1ConversationsMessages504Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages504Error1Schema },
      },
    ];
  }

  export type ConversationMarkReadRequest = {
    id: string;
    /** Body */
    body?: ApiV1ConversationsReadRequest;
  };

  export class ConversationMarkReadError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1ConversationsRead400Error1", ApiV1ConversationsRead400Error1>
      | Declared<"apiV1ConversationsRead401Error1", ApiV1ConversationsRead401Error1>
      | Declared<"apiV1ConversationsRead403Error1", ApiV1ConversationsRead403Error1>
      | Declared<"apiV1ConversationsRead404Error1", ApiV1ConversationsRead404Error1>
      | Declared<"apiV1ConversationsRead429Error1", ApiV1ConversationsRead429Error1>
      | Declared<"apiV1ConversationsRead500Error1", ApiV1ConversationsRead500Error1>
      | Declared<"apiV1ConversationsRead502Error1", ApiV1ConversationsRead502Error1>
      | Declared<"apiV1ConversationsRead503Error1", ApiV1ConversationsRead503Error1>
      | Declared<"apiV1ConversationsRead504Error1", ApiV1ConversationsRead504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConversationMarkReadError> = [
      {
        on: 400,
        kind: "apiV1ConversationsRead400Error1",
        decode: { kind: "json", schema: apiV1ConversationsRead400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1ConversationsRead401Error1",
        decode: { kind: "json", schema: apiV1ConversationsRead401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1ConversationsRead403Error1",
        decode: { kind: "json", schema: apiV1ConversationsRead403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1ConversationsRead404Error1",
        decode: { kind: "json", schema: apiV1ConversationsRead404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1ConversationsRead429Error1",
        decode: { kind: "json", schema: apiV1ConversationsRead429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1ConversationsRead500Error1",
        decode: { kind: "json", schema: apiV1ConversationsRead500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1ConversationsRead502Error1",
        decode: { kind: "json", schema: apiV1ConversationsRead502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1ConversationsRead503Error1",
        decode: { kind: "json", schema: apiV1ConversationsRead503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1ConversationsRead504Error1",
        decode: { kind: "json", schema: apiV1ConversationsRead504Error1Schema },
      },
    ];
  }

  export type ConversationOpenRequest = {
    id: string;
  };

  export class ConversationOpenError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1ConversationsOpen400Error1", ApiV1ConversationsOpen400Error1>
      | Declared<"apiV1ConversationsOpen401Error1", ApiV1ConversationsOpen401Error1>
      | Declared<"apiV1ConversationsOpen403Error1", ApiV1ConversationsOpen403Error1>
      | Declared<"apiV1ConversationsOpen404Error1", ApiV1ConversationsOpen404Error1>
      | Declared<"apiV1ConversationsOpen429Error1", ApiV1ConversationsOpen429Error1>
      | Declared<"apiV1ConversationsOpen500Error1", ApiV1ConversationsOpen500Error1>
      | Declared<"apiV1ConversationsOpen502Error1", ApiV1ConversationsOpen502Error1>
      | Declared<"apiV1ConversationsOpen503Error1", ApiV1ConversationsOpen503Error1>
      | Declared<"apiV1ConversationsOpen504Error1", ApiV1ConversationsOpen504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConversationOpenError> = [
      {
        on: 400,
        kind: "apiV1ConversationsOpen400Error1",
        decode: { kind: "json", schema: apiV1ConversationsOpen400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1ConversationsOpen401Error1",
        decode: { kind: "json", schema: apiV1ConversationsOpen401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1ConversationsOpen403Error1",
        decode: { kind: "json", schema: apiV1ConversationsOpen403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1ConversationsOpen404Error1",
        decode: { kind: "json", schema: apiV1ConversationsOpen404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1ConversationsOpen429Error1",
        decode: { kind: "json", schema: apiV1ConversationsOpen429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1ConversationsOpen500Error1",
        decode: { kind: "json", schema: apiV1ConversationsOpen500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1ConversationsOpen502Error1",
        decode: { kind: "json", schema: apiV1ConversationsOpen502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1ConversationsOpen503Error1",
        decode: { kind: "json", schema: apiV1ConversationsOpen503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1ConversationsOpen504Error1",
        decode: { kind: "json", schema: apiV1ConversationsOpen504Error1Schema },
      },
    ];
  }

  export type ConversationPrivateReplyRequest = {
    /** Body */
    body?: ApiV1ConversationsPrivateReplyRequest;
  };

  export class ConversationPrivateReplyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1ConversationsPrivateReply400Error1", ApiV1ConversationsPrivateReply400Error1>
      | Declared<"apiV1ConversationsPrivateReply401Error1", ApiV1ConversationsPrivateReply401Error1>
      | Declared<"apiV1ConversationsPrivateReply403Error1", ApiV1ConversationsPrivateReply403Error1>
      | Declared<"apiV1ConversationsPrivateReply404Error1", ApiV1ConversationsPrivateReply404Error1>
      | Declared<"apiV1ConversationsPrivateReply429Error1", ApiV1ConversationsPrivateReply429Error1>
      | Declared<"apiV1ConversationsPrivateReply500Error1", ApiV1ConversationsPrivateReply500Error1>
      | Declared<"apiV1ConversationsPrivateReply502Error1", ApiV1ConversationsPrivateReply502Error1>
      | Declared<"apiV1ConversationsPrivateReply503Error1", ApiV1ConversationsPrivateReply503Error1>
      | Declared<"apiV1ConversationsPrivateReply504Error1", ApiV1ConversationsPrivateReply504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConversationPrivateReplyError> = [
      {
        on: 400,
        kind: "apiV1ConversationsPrivateReply400Error1",
        decode: { kind: "json", schema: apiV1ConversationsPrivateReply400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1ConversationsPrivateReply401Error1",
        decode: { kind: "json", schema: apiV1ConversationsPrivateReply401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1ConversationsPrivateReply403Error1",
        decode: { kind: "json", schema: apiV1ConversationsPrivateReply403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1ConversationsPrivateReply404Error1",
        decode: { kind: "json", schema: apiV1ConversationsPrivateReply404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1ConversationsPrivateReply429Error1",
        decode: { kind: "json", schema: apiV1ConversationsPrivateReply429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1ConversationsPrivateReply500Error1",
        decode: { kind: "json", schema: apiV1ConversationsPrivateReply500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1ConversationsPrivateReply502Error1",
        decode: { kind: "json", schema: apiV1ConversationsPrivateReply502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1ConversationsPrivateReply503Error1",
        decode: { kind: "json", schema: apiV1ConversationsPrivateReply503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1ConversationsPrivateReply504Error1",
        decode: { kind: "json", schema: apiV1ConversationsPrivateReply504Error1Schema },
      },
    ];
  }

  export type ConversationReactMessageRequest = {
    id: string;
    messageId: string;
    /** Body */
    body?: ApiV1ConversationsMessagesReactionRequest;
  };

  export class ConversationReactMessageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1ConversationsMessagesReaction400Error1", ApiV1ConversationsMessagesReaction400Error1>
      | Declared<"apiV1ConversationsMessagesReaction401Error1", ApiV1ConversationsMessagesReaction401Error1>
      | Declared<"apiV1ConversationsMessagesReaction403Error1", ApiV1ConversationsMessagesReaction403Error1>
      | Declared<"apiV1ConversationsMessagesReaction404Error1", ApiV1ConversationsMessagesReaction404Error1>
      | Declared<"apiV1ConversationsMessagesReaction429Error1", ApiV1ConversationsMessagesReaction429Error1>
      | Declared<"apiV1ConversationsMessagesReaction500Error1", ApiV1ConversationsMessagesReaction500Error1>
      | Declared<"apiV1ConversationsMessagesReaction502Error1", ApiV1ConversationsMessagesReaction502Error1>
      | Declared<"apiV1ConversationsMessagesReaction503Error1", ApiV1ConversationsMessagesReaction503Error1>
      | Declared<"apiV1ConversationsMessagesReaction504Error1", ApiV1ConversationsMessagesReaction504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConversationReactMessageError> = [
      {
        on: 400,
        kind: "apiV1ConversationsMessagesReaction400Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessagesReaction400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1ConversationsMessagesReaction401Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessagesReaction401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1ConversationsMessagesReaction403Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessagesReaction403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1ConversationsMessagesReaction404Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessagesReaction404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1ConversationsMessagesReaction429Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessagesReaction429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1ConversationsMessagesReaction500Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessagesReaction500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1ConversationsMessagesReaction502Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessagesReaction502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1ConversationsMessagesReaction503Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessagesReaction503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1ConversationsMessagesReaction504Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessagesReaction504Error1Schema },
      },
    ];
  }

  export type ConversationSendMessageRequest = {
    id: string;
    /** Body */
    body?: ApiV1ConversationsMessagesRequest;
  };

  export class ConversationSendMessageError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1ConversationsMessages400Error1", ApiV1ConversationsMessages400Error1>
      | Declared<"apiV1ConversationsMessages401Error1", ApiV1ConversationsMessages401Error1>
      | Declared<"apiV1ConversationsMessages403Error1", ApiV1ConversationsMessages403Error1>
      | Declared<"apiV1ConversationsMessages404Error1", ApiV1ConversationsMessages404Error1>
      | Declared<"apiV1ConversationsMessages429Error1", ApiV1ConversationsMessages429Error1>
      | Declared<"apiV1ConversationsMessages500Error1", ApiV1ConversationsMessages500Error1>
      | Declared<"apiV1ConversationsMessages502Error1", ApiV1ConversationsMessages502Error1>
      | Declared<"apiV1ConversationsMessages503Error1", ApiV1ConversationsMessages503Error1>
      | Declared<"apiV1ConversationsMessages504Error1", ApiV1ConversationsMessages504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConversationSendMessageError> = [
      {
        on: 400,
        kind: "apiV1ConversationsMessages400Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1ConversationsMessages401Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1ConversationsMessages403Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1ConversationsMessages404Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1ConversationsMessages429Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1ConversationsMessages500Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1ConversationsMessages502Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1ConversationsMessages503Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1ConversationsMessages504Error1",
        decode: { kind: "json", schema: apiV1ConversationsMessages504Error1Schema },
      },
    ];
  }

  export type ConversationUpdateRequest = {
    id: string;
    /** Body */
    body?: ApiV1ConversationsRequest;
  };

  export class ConversationUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Conversations400Error1", ApiV1Conversations400Error1>
      | Declared<"apiV1Conversations401Error1", ApiV1Conversations401Error1>
      | Declared<"apiV1Conversations403Error1", ApiV1Conversations403Error1>
      | Declared<"apiV1Conversations404Error1", ApiV1Conversations404Error1>
      | Declared<"apiV1Conversations429Error1", ApiV1Conversations429Error1>
      | Declared<"apiV1Conversations500Error1", ApiV1Conversations500Error1>
      | Declared<"apiV1Conversations502Error1", ApiV1Conversations502Error1>
      | Declared<"apiV1Conversations503Error1", ApiV1Conversations503Error1>
      | Declared<"apiV1Conversations504Error1", ApiV1Conversations504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConversationUpdateError> = [
      {
        on: 400,
        kind: "apiV1Conversations400Error1",
        decode: { kind: "json", schema: apiV1Conversations400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1Conversations401Error1",
        decode: { kind: "json", schema: apiV1Conversations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1Conversations403Error1",
        decode: { kind: "json", schema: apiV1Conversations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1Conversations404Error1",
        decode: { kind: "json", schema: apiV1Conversations404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1Conversations429Error1",
        decode: { kind: "json", schema: apiV1Conversations429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1Conversations500Error1",
        decode: { kind: "json", schema: apiV1Conversations500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1Conversations502Error1",
        decode: { kind: "json", schema: apiV1Conversations502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1Conversations503Error1",
        decode: { kind: "json", schema: apiV1Conversations503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1Conversations504Error1",
        decode: { kind: "json", schema: apiV1Conversations504Error1Schema },
      },
    ];
  }
}
