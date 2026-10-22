import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent, FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessRequestPermissionDeniedResponseSchema,
  type AccessRequestPermissionDeniedResponse,
} from "../models/access-request-permission-denied-response.js";
import { chatRequestSchema, type ChatRequest } from "../models/chat-request.js";
import { chatResponseSchema, type ChatResponse } from "../models/chat-response.js";
import {
  deleteChatFilesRequestSchema,
  type DeleteChatFilesRequest,
} from "../models/delete-chat-files-request.js";
import { deleteChatsRequestSchema, type DeleteChatsRequest } from "../models/delete-chats-request.js";
import {
  getChatApplicationRequestSchema,
  type GetChatApplicationRequest,
} from "../models/get-chat-application-request.js";
import {
  getChatApplicationResponseSchema,
  type GetChatApplicationResponse,
} from "../models/get-chat-application-response.js";
import { getChatFilesRequestSchema, type GetChatFilesRequest } from "../models/get-chat-files-request.js";
import { getChatFilesResponseSchema, type GetChatFilesResponse } from "../models/get-chat-files-response.js";
import { getChatRequestSchema, type GetChatRequest } from "../models/get-chat-request.js";
import { getChatResponseSchema, type GetChatResponse } from "../models/get-chat-response.js";
import { listChatsResponseSchema, type ListChatsResponse } from "../models/list-chats-response.js";
import {
  uploadChatFilesResponseSchema,
  type UploadChatFilesResponse,
} from "../models/upload-chat-files-response.js";
import type { Servers } from "../servers.js";

export class ChatApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Chat
   *
   * @remarks
   * Have a conversation with Glean AI.
   *
   * @returns OK
   *
   * @throws {@link ChatApi.ChatError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  chat(
    request: ChatApi.ChatRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ChatResponse, ChatApi.ChatError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/chat"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: chatRequestSchema },
      },
      {
        success: { kind: "json", schema: chatResponseSchema },
        errorFactory: ChatApi.ChatError,
      },
      options,
    );
  }

  /**
   * Deletes all saved Chats owned by a user
   *
   * @remarks
   * Deletes all saved Chats a user has had and all their contained conversational content.
   *
   * @returns OK
   *
   * @throws {@link ChatApi.DeleteallchatsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteallchats(
    request: ChatApi.DeleteallchatsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChatApi.DeleteallchatsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/deleteallchats"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChatApi.DeleteallchatsError,
      },
      options,
    );
  }

  /**
   * Delete files uploaded by a user for chat
   *
   * @remarks
   * Delete files uploaded by a user for Chat.
   *
   * @returns OK
   *
   * @throws {@link ChatApi.DeletechatfilesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletechatfiles(
    request: ChatApi.DeletechatfilesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChatApi.DeletechatfilesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/deletechatfiles"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: deleteChatFilesRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChatApi.DeletechatfilesError,
      },
      options,
    );
  }

  /**
   * Deletes saved Chats
   *
   * @remarks
   * Deletes saved Chats and all their contained conversational content.
   *
   * @returns OK
   *
   * @throws {@link ChatApi.DeletechatsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletechats(
    request: ChatApi.DeletechatsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ChatApi.DeletechatsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/deletechats"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: deleteChatsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ChatApi.DeletechatsError,
      },
      options,
    );
  }

  /**
   * Download a chat file
   *
   * @remarks
   * Download the raw content of a file generated or uploaded during a chat session (for example, an
   * image produced by the assistant). Returns the file bytes with a Content-Type header matching
   * the file's MIME type.
   *
   * @returns File content.
   *
   * @throws {@link ChatApi.GetChatFileError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChatFile(
    request: ChatApi.GetChatFileRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ChatApi.GetChatFileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rest/api/v1/chat-files/{fileId}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "fileId", value: request.fileId, schema: s.string() }],
        query: [{ name: "preview", value: request.preview, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ChatApi.GetChatFileError,
      },
      options,
    );
  }

  /**
   * Retrieves a Chat
   *
   * @remarks
   * Retrieves the chat history between Glean Assistant and the user for a given Chat.
   *
   * @returns OK
   *
   * @throws {@link ChatApi.GetchatError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getchat(
    request: ChatApi.GetchatRequest,
    options?: RequestOptions,
  ): ApiPromise<GetChatResponse, ChatApi.GetchatError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/getchat"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: getChatRequestSchema },
      },
      {
        success: { kind: "json", schema: getChatResponseSchema },
        errorFactory: ChatApi.GetchatError,
      },
      options,
    );
  }

  /**
   * Gets the metadata for a custom Chat application
   *
   * @remarks
   * Gets the Chat application details for the specified application ID.
   *
   * @returns OK
   *
   * @throws {@link ChatApi.GetchatapplicationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getchatapplication(
    request: ChatApi.GetchatapplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetChatApplicationResponse, ChatApi.GetchatapplicationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/getchatapplication"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: getChatApplicationRequestSchema },
      },
      {
        success: { kind: "json", schema: getChatApplicationResponseSchema },
        errorFactory: ChatApi.GetchatapplicationError,
      },
      options,
    );
  }

  /**
   * Get files uploaded by a user for Chat
   *
   * @remarks
   * Get files uploaded by a user for Chat.
   *
   * @returns OK
   *
   * @throws {@link ChatApi.GetchatfilesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getchatfiles(
    request: ChatApi.GetchatfilesRequest,
    options?: RequestOptions,
  ): ApiPromise<GetChatFilesResponse, ChatApi.GetchatfilesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/getchatfiles"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: getChatFilesRequestSchema },
      },
      {
        success: { kind: "json", schema: getChatFilesResponseSchema },
        errorFactory: ChatApi.GetchatfilesError,
      },
      options,
    );
  }

  /**
   * Retrieves all saved Chats
   *
   * @remarks
   * Retrieves all the saved Chats between Glean Assistant and the user. The returned Chats contain
   * only metadata and no conversational content.
   *
   * @returns OK
   *
   * @throws {@link ChatApi.ListchatsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listchats(
    request: ChatApi.ListchatsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChatsResponse, ChatApi.ListchatsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/listchats"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChatsResponseSchema },
        errorFactory: ChatApi.ListchatsError,
      },
      options,
    );
  }

  /**
   * Upload files for Chat
   *
   * @remarks
   * Upload files for Chat.
   *
   * @returns OK
   *
   * @throws {@link ChatApi.UploadchatfilesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadchatfiles(
    request: ChatApi.UploadchatfilesRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadChatFilesResponse, ChatApi.UploadchatfilesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/uploadchatfiles"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "locale", value: request.locale, schema: s.optional(s.string()) },
          { name: "timezoneOffset", value: request.timezoneOffset, schema: s.optional(s.int()) },
        ],
        headers: [
          { name: "X-Glean-ActAs", value: request.xGleanActAs, schema: s.optional(s.string()) },
          { name: "X-Glean-Auth-Type", value: request.xGleanAuthType, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "multipart", value: [{ kind: "file", name: "files", value: request.files }] },
      },
      {
        success: { kind: "json", schema: uploadChatFilesResponseSchema },
        errorFactory: ChatApi.UploadchatfilesError,
      },
      options,
    );
  }
}

export namespace ChatApi {
  export type ChatRequestParams = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Includes chat history for Glean AI to respond to. */
    body: ChatRequest;
  };

  export class ChatError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChatError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeleteallchatsRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
  };

  export class DeleteallchatsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteallchatsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type DeletechatfilesRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    body: DeleteChatFilesRequest;
  };

  export class DeletechatfilesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletechatfilesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type DeletechatsRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    body: DeleteChatsRequest;
  };

  export class DeletechatsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletechatsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetChatFileRequest = {
    /** Identifier of the chat file to download. */
    fileId: string;
    /**
     * When true and the file is a PDF, the response is served inline (Content-Disposition: inline)
     * instead of as an attachment.
     */
    preview?: boolean;
  };

  export class GetChatFileError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetChatFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type GetchatRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    body: GetChatRequest;
  };

  export class GetchatError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"accessRequestPermissionDeniedResponse", AccessRequestPermissionDeniedResponse>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetchatError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      {
        on: 403,
        kind: "accessRequestPermissionDeniedResponse",
        decode: { kind: "json", schema: accessRequestPermissionDeniedResponseSchema },
      },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetchatapplicationRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    body: GetChatApplicationRequest;
  };

  export class GetchatapplicationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetchatapplicationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type GetchatfilesRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    body: GetChatFilesRequest;
  };

  export class GetchatfilesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetchatfilesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListchatsRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
  };

  export class ListchatsError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListchatsError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type UploadchatfilesRequest = {
    /**
     * The client's preferred locale in rfc5646 format (e.g. `en`, `ja`, `pt-BR`). If omitted, the
     * `Accept-Language` will be used. If not present or not supported, defaults to the closest
     * match or `en`.
     */
    locale?: string;
    /**
     * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7
     * hours behind UTC.
     */
    timezoneOffset?: number;
    /**
     * Email address of a user on whose behalf the request is intended to be made (should be
     * non-empty only for global tokens).
     */
    xGleanActAs?: string;
    /** Auth type being used to access the endpoint (should be non-empty only for global tokens). */
    xGleanAuthType?: string;
    /** Raw file to be uploaded for chat in binary format. */
    files: FileInput;
  };

  export class UploadchatfilesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadchatfilesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
