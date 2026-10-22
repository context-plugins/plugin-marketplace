import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  availableTargetPropertiesSchema,
  type AvailableTargetProperties,
} from "../models/available-target-properties.js";
import {
  channelTargetCreateRequestSchema,
  type ChannelTargetCreateRequest,
} from "../models/channel-target-create-request.js";
import {
  channelTargetPropertiesSchema,
  type ChannelTargetProperties,
} from "../models/channel-target-properties.js";
import {
  channelTargetResponseSchema,
  type ChannelTargetResponse,
} from "../models/channel-target-response.js";
import {
  channelTargetUpdateRequestSchema,
  type ChannelTargetUpdateRequest,
} from "../models/channel-target-update-request.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseAvailableTargetSchema,
  type ListResponseAvailableTarget,
} from "../models/list-response-available-target.js";
import {
  listResponseChannelTargetResponseSchema,
  type ListResponseChannelTargetResponse,
} from "../models/list-response-channel-target-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields21Schema, type Fields21 } from "../models/unions/fields21.js";
import { fields22Schema, type Fields22 } from "../models/unions/fields22.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy310Schema, type OrderBy310 } from "../models/unions/order-by310.js";
import { orderBy39Schema, type OrderBy39 } from "../models/unions/order-by39.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to channel target configuration. A channel target links a channel to an agent,
 * allowing users to communicate with the agent through that channel. For more information, see
 * [Console docs](https://docs.syllable.ai/Resources/Channels).
 */
export class ChannelsTargets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Available Targets List
   *
   * @remarks
   * List the available phone numbers
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTargets.AvailableTargetsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  availableTargets(
    request: ChannelsTargets.AvailableTargetsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseAvailableTarget, ChannelsTargets.AvailableTargetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/channels/available-targets"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => availableTargetPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy39Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields21Schema)) },
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
        success: { kind: "json", schema: listResponseAvailableTargetSchema },
        errorFactory: ChannelsTargets.AvailableTargetsError,
      },
      options,
    );
  }

  /**
   * Assign A Channel Target
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTargets.ChannelTargetsCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelTargetsCreate(
    request: ChannelsTargets.ChannelTargetsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ChannelTargetResponse, ChannelsTargets.ChannelTargetsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/channels/{channel_id}/targets"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelTargetCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: channelTargetResponseSchema },
        errorFactory: ChannelsTargets.ChannelTargetsCreateError,
      },
      options,
    );
  }

  /**
   * Delete Channel Target
   *
   * @remarks
   * Hard-delete a channel target by ID
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTargets.ChannelTargetsDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelTargetsDelete(
    request: ChannelsTargets.ChannelTargetsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ChannelsTargets.ChannelTargetsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/channels/{channel_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "channel_id", value: request.channelId, schema: s.string() }],
        query: [{ name: "target_id", value: request.targetId, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ChannelsTargets.ChannelTargetsDeleteError,
      },
      options,
    );
  }

  /**
   * Get A Channel Target
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTargets.ChannelTargetsGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelTargetsGetById(
    request: ChannelsTargets.ChannelTargetsGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ChannelTargetResponse, ChannelsTargets.ChannelTargetsGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/channels/{channel_id}/targets/{target_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.int() },
          { name: "target_id", value: request.targetId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: channelTargetResponseSchema },
        errorFactory: ChannelsTargets.ChannelTargetsGetByIdError,
      },
      options,
    );
  }

  /**
   * Get Channel Targets
   *
   * @remarks
   * List channel targets for the current suborg.
   *
   * Supports the standard `ListManager` filters via `search_fields`/`search_field_values`. In
   * addition to `target_mode` (single value), `target_mode_list` accepts a comma-separated list of
   * modes (e.g. `voice,sms`) and matches targets whose mode is any of the listed values. Whitespace
   * around tokens is tolerated and empty tokens are ignored. If both `target_mode` and
   * `target_mode_list` are supplied, the two filters are combined with AND. `target_mode_list` is
   * filter-only and cannot be used as `order_by`.
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTargets.ChannelTargetsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelTargetsList(
    request: ChannelsTargets.ChannelTargetsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseChannelTargetResponse, ChannelsTargets.ChannelTargetsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/channels/targets"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => channelTargetPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy310Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields22Schema)) },
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
        success: { kind: "json", schema: listResponseChannelTargetResponseSchema },
        errorFactory: ChannelsTargets.ChannelTargetsListError,
      },
      options,
    );
  }

  /**
   * Edit Channel Target
   *
   * @remarks
   * Update channel target by ID
   *
   * @returns Successful Response
   *
   * @throws {@link ChannelsTargets.ChannelTargetsUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelTargetsUpdate(
    request: ChannelsTargets.ChannelTargetsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ChannelTargetResponse, ChannelsTargets.ChannelTargetsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/channels/{channel_id}/targets/{target_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [
          { name: "channel_id", value: request.channelId, schema: s.int() },
          { name: "target_id", value: request.targetId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: channelTargetUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: channelTargetResponseSchema },
        errorFactory: ChannelsTargets.ChannelTargetsUpdateError,
      },
      options,
    );
  }
}

export namespace ChannelsTargets {
  export type AvailableTargetsRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: AvailableTargetProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy39;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields21;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class AvailableTargetsError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AvailableTargetsError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelTargetsCreateRequest = {
    channelId: number;
    body: ChannelTargetCreateRequest;
  };

  export class ChannelTargetsCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelTargetsCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelTargetsDeleteRequest = {
    channelId: string;
    targetId: string;
  };

  export class ChannelTargetsDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelTargetsDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelTargetsGetByIdRequest = {
    channelId: number;
    targetId: number;
  };

  export class ChannelTargetsGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelTargetsGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelTargetsListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: ChannelTargetProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy310;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields22;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class ChannelTargetsListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelTargetsListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelTargetsUpdateRequest = {
    channelId: number;
    targetId: number;
    body: ChannelTargetUpdateRequest;
  };

  export class ChannelTargetsUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelTargetsUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
