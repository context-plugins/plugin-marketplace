import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { channelPropertiesSchema, type ChannelProperties } from "../models/channel-properties.js";
import { channelSchema, type Channel } from "../models/channel.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { listResponseChannelSchema, type ListResponseChannel } from "../models/list-response-channel.js";
import {
  organizationChannelCreateRequestSchema,
  type OrganizationChannelCreateRequest,
} from "../models/organization-channel-create-request.js";
import {
  organizationChannelUpdateRequestSchema,
  type OrganizationChannelUpdateRequest,
} from "../models/organization-channel-update-request.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields2Schema, type Fields2 } from "../models/unions/fields2.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy21Schema, type OrderBy21 } from "../models/unions/order-by21.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to channel configuration. A channel is an organization-level point of
 * communication, like a phone number or a web chat. A channel can be associated with an agent by
 * creating a channel target linking them.
 */
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
   * Create Channel
   *
   * @returns Successful Response
   *
   * @throws {@link Channels.ChannelsCreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelsCreate(
    request: Channels.ChannelsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, Channels.ChannelsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/channels/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: organizationChannelCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: Channels.ChannelsCreateError,
      },
      options,
    );
  }

  /**
   * Get Channels
   *
   * @returns Successful Response
   *
   * @throws {@link Channels.ChannelsListError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelsList(
    request: Channels.ChannelsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseChannel, Channels.ChannelsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/channels/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => channelPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy21Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields2Schema)) },
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
        success: { kind: "json", schema: listResponseChannelSchema },
        errorFactory: Channels.ChannelsListError,
      },
      options,
    );
  }

  /**
   * Update Channel
   *
   * @returns Successful Response
   *
   * @throws {@link Channels.ChannelsUpdateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  channelsUpdate(
    request: Channels.ChannelsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<Channel, Channels.ChannelsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/channels/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: organizationChannelUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: channelSchema },
        errorFactory: Channels.ChannelsUpdateError,
      },
      options,
    );
  }
}

export namespace Channels {
  export type ChannelsCreateRequest = {
    body: OrganizationChannelCreateRequest;
  };

  export class ChannelsCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelsCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelsListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: ChannelProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy21;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields2;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class ChannelsListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelsListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ChannelsUpdateRequest = {
    body: OrganizationChannelUpdateRequest;
  };

  export class ChannelsUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ChannelsUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
