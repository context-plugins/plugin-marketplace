import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  customMessageCreateRequestSchema,
  type CustomMessageCreateRequest,
} from "../models/custom-message-create-request.js";
import {
  customMessagePropertiesSchema,
  type CustomMessageProperties,
} from "../models/custom-message-properties.js";
import {
  customMessageResponseSchema,
  type CustomMessageResponse,
} from "../models/custom-message-response.js";
import {
  customMessageUpdateRequestSchema,
  type CustomMessageUpdateRequest,
} from "../models/custom-message-update-request.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseCustomMessageResponseSchema,
  type ListResponseCustomMessageResponse,
} from "../models/list-response-custom-message-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields14Schema, type Fields14 } from "../models/unions/fields14.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy32Schema, type OrderBy32 } from "../models/unions/order-by32.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to custom message configuration. A custom message is a pre-configured message
 * delivered by an agent as a greeting at the beginning of a conversation. Multiple agents can use
 * the same custom mesasage. A custom message has one or more rules defined, which allow for
 * different messages to be dynamically selected and delivered at runtime based on the current time
 * and either date or day of the week. For more information, see [Console
 * docs](https://docs.syllable.ai/Resources/Messages).
 */
export class CustomMessages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Custom Message By Id
   *
   * @remarks
   * Get the custom message by its ID
   *
   * @returns Successful Response
   *
   * @throws {@link CustomMessages.CustomMessageGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  customMessageGetById(
    request: CustomMessages.CustomMessageGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMessageResponse, CustomMessages.CustomMessageGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/custom_messages/{custom_message_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "custom_message_id", value: request.customMessageId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customMessageResponseSchema },
        errorFactory: CustomMessages.CustomMessageGetByIdError,
      },
      options,
    );
  }

  /**
   * Create Custom Message
   *
   * @remarks
   * Create a new custom message
   *
   * @returns Successful Response
   *
   * @throws {@link CustomMessages.CustomMessagesCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  customMessagesCreate(
    request: CustomMessages.CustomMessagesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMessageResponse, CustomMessages.CustomMessagesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/custom_messages/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customMessageCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: customMessageResponseSchema },
        errorFactory: CustomMessages.CustomMessagesCreateError,
      },
      options,
    );
  }

  /**
   * Delete Custom Message
   *
   * @remarks
   * Delete custom message by ID
   *
   * @returns Successful Response
   *
   * @throws {@link CustomMessages.CustomMessagesDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  customMessagesDelete(
    request: CustomMessages.CustomMessagesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, CustomMessages.CustomMessagesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/custom_messages/{custom_message_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "custom_message_id", value: request.customMessageId, schema: s.int() }],
        query: [{ name: "reason", value: request.reason, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: CustomMessages.CustomMessagesDeleteError,
      },
      options,
    );
  }

  /**
   * Custom Messages List
   *
   * @remarks
   * List the existing custom_messages
   *
   * @returns Successful Response
   *
   * @throws {@link CustomMessages.CustomMessagesListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  customMessagesList(
    request: CustomMessages.CustomMessagesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseCustomMessageResponse, CustomMessages.CustomMessagesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/custom_messages/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => customMessagePropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy32Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields14Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseCustomMessageResponseSchema },
        errorFactory: CustomMessages.CustomMessagesListError,
      },
      options,
    );
  }

  /**
   * Update Custom Message
   *
   * @remarks
   * Update a custom message
   *
   * @returns Successful Response
   *
   * @throws {@link CustomMessages.CustomMessagesUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  customMessagesUpdate(
    request: CustomMessages.CustomMessagesUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomMessageResponse, CustomMessages.CustomMessagesUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/custom_messages/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customMessageUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: customMessageResponseSchema },
        errorFactory: CustomMessages.CustomMessagesUpdateError,
      },
      options,
    );
  }
}

export namespace CustomMessages {
  export type CustomMessageGetByIdRequest = {
    customMessageId: number;
  };

  export class CustomMessageGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CustomMessageGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CustomMessagesCreateRequest = {
    body: CustomMessageCreateRequest;
  };

  export class CustomMessagesCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CustomMessagesCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CustomMessagesDeleteRequest = {
    customMessageId: number;
    reason: string;
  };

  export class CustomMessagesDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CustomMessagesDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CustomMessagesListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: CustomMessageProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy32;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields14;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class CustomMessagesListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CustomMessagesListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CustomMessagesUpdateRequest = {
    body: CustomMessageUpdateRequest;
  };

  export class CustomMessagesUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CustomMessagesUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
