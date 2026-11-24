import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessDeniedExceptionSchema,
  type AccessDeniedException,
} from "../models/access-denied-exception.js";
import {
  addNotificationChannelResponseSchema,
  type AddNotificationChannelResponse,
} from "../models/add-notification-channel-response.js";
import { channelsRequestSchema, type ChannelsRequest } from "../models/channels-request.js";
import { channelsRequest1Schema, type ChannelsRequest1 } from "../models/channels-request1.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  listNotificationChannelsResponseSchema,
  type ListNotificationChannelsResponse,
} from "../models/list-notification-channels-response.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Channels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add Notification Channel
   *
   * @remarks
   * Adds a notification channel to DevOps Guru. A notification channel is used to notify you about
   * important DevOps Guru events, such as when an insight is generated. If you use an Amazon SNS
   * topic in another account, you must attach a policy to it that grants DevOps Guru permission to
   * send it notifications. DevOps Guru adds the required policy on your behalf to send
   * notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
   * For more information, see Permissions for Amazon SNS topics. If you use an Amazon SNS topic
   * that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK),
   * then you must add permissions to the CMK. For more information, see Permissions for Amazon Web
   * Services KMS–encrypted Amazon SNS topics.
   *
   * @returns Success
   *
   * @throws {@link Channels.AddNotificationChannelError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addNotificationChannel(
    request: Channels.AddNotificationChannelRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AddNotificationChannelResponse, Channels.AddNotificationChannelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/channels"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => channelsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: addNotificationChannelResponseSchema },
        errorFactory: Channels.AddNotificationChannelError,
      },
      options,
    );
  }

  /**
   * List Notification Channels
   *
   * @remarks
   * Returns a list of notification channels configured for DevOps Guru. Each notification channel
   * is used to notify you when DevOps Guru generates an insight that contains information about how
   * to improve your operations. The one supported notification channel is Amazon Simple
   * Notification Service (Amazon SNS).
   *
   * @returns Success
   *
   * @throws {@link Channels.ListNotificationChannelsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listNotificationChannels(
    request: Channels.ListNotificationChannelsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListNotificationChannelsResponse, Channels.ListNotificationChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/channels"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => channelsRequest1Schema)) },
      },
      {
        success: { kind: "json", schema: listNotificationChannelsResponseSchema },
        errorFactory: Channels.ListNotificationChannelsError,
      },
      options,
    );
  }

  /**
   * Remove Notification Channel
   *
   * @remarks
   * Removes a notification channel from DevOps Guru. A notification channel is used to notify you
   * when DevOps Guru generates an insight that contains information about how to improve your
   * operations.
   *
   * @returns Success
   *
   * @throws {@link Channels.RemoveNotificationChannelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  removeNotificationChannel(
    request: Channels.RemoveNotificationChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Channels.RemoveNotificationChannelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/channels/{Id}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "Id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Channels.RemoveNotificationChannelError,
      },
      options,
    );
  }
}

export namespace Channels {
  export type AddNotificationChannelRequest = {
    body?: ChannelsRequest;
  };

  export class AddNotificationChannelError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddNotificationChannelError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListNotificationChannelsRequest = {
    body?: ChannelsRequest1;
  };

  export class ListNotificationChannelsError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListNotificationChannelsError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type RemoveNotificationChannelRequest = {
    /** The ID of the notification channel to be removed. */
    id: string;
  };

  export class RemoveNotificationChannelError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveNotificationChannelError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
