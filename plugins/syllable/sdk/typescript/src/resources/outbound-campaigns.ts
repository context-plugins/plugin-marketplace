import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1OutboundCampaigns400Error1Schema,
  type ApiV1OutboundCampaigns400Error1,
} from "../models/api-v1-outbound-campaigns400-error1.js";
import { campaignPropertiesSchema, type CampaignProperties } from "../models/campaign-properties.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  outboundCampaignInputSchema,
  type OutboundCampaignInput,
} from "../models/outbound-campaign-input.js";
import { outboundCampaignSchema, type OutboundCampaign } from "../models/outbound-campaign.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields26Schema, type Fields26 } from "../models/unions/fields26.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy314Schema, type OrderBy314 } from "../models/unions/order-by314.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import {
  responseOutboundCampaignCreateSchema,
  type ResponseOutboundCampaignCreate,
} from "../models/unions/response-outbound-campaign-create.js";
import {
  responseOutboundCampaignListSchema,
  type ResponseOutboundCampaignList,
} from "../models/unions/response-outbound-campaign-list.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to outbound message campaigns
 */
export class OutboundCampaigns {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Outbound Communication Campaign
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundCampaigns.OutboundCampaignCreateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundCampaignCreate(
    request: OutboundCampaigns.OutboundCampaignCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ResponseOutboundCampaignCreate, OutboundCampaigns.OutboundCampaignCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/outbound/campaigns"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: outboundCampaignInputSchema },
      },
      {
        success: { kind: "json", schema: responseOutboundCampaignCreateSchema },
        errorFactory: OutboundCampaigns.OutboundCampaignCreateError,
      },
      options,
    );
  }

  /**
   * Delete Outbound Communication Campaign
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundCampaigns.OutboundCampaignDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundCampaignDelete(
    request: OutboundCampaigns.OutboundCampaignDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, OutboundCampaigns.OutboundCampaignDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/outbound/campaigns/{campaign_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "campaign_id", value: request.campaignId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: OutboundCampaigns.OutboundCampaignDeleteError,
      },
      options,
    );
  }

  /**
   * Get Outbound Communication Campaign
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundCampaigns.OutboundCampaignGetByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundCampaignGetById(
    request: OutboundCampaigns.OutboundCampaignGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<OutboundCampaign, OutboundCampaigns.OutboundCampaignGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/outbound/campaigns/{campaign_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "campaign_id", value: request.campaignId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: outboundCampaignSchema },
        errorFactory: OutboundCampaigns.OutboundCampaignGetByIdError,
      },
      options,
    );
  }

  /**
   * List Outbound Communication Campaigns
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundCampaigns.OutboundCampaignListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundCampaignList(
    request: OutboundCampaigns.OutboundCampaignListRequest,
    options?: RequestOptions,
  ): ApiPromise<ResponseOutboundCampaignList, OutboundCampaigns.OutboundCampaignListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/outbound/campaigns"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => campaignPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy314Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields26Schema)) },
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
        success: { kind: "json", schema: responseOutboundCampaignListSchema },
        errorFactory: OutboundCampaigns.OutboundCampaignListError,
      },
      options,
    );
  }

  /**
   * Update Outbound Communication Campaign
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundCampaigns.OutboundCampaignUpdateError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundCampaignUpdate(
    request: OutboundCampaigns.OutboundCampaignUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<OutboundCampaign, OutboundCampaigns.OutboundCampaignUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/outbound/campaigns/{campaign_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "campaign_id", value: request.campaignId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: outboundCampaignInputSchema },
      },
      {
        success: { kind: "json", schema: outboundCampaignSchema },
        errorFactory: OutboundCampaigns.OutboundCampaignUpdateError,
      },
      options,
    );
  }
}

export namespace OutboundCampaigns {
  export type OutboundCampaignCreateRequest = {
    body: OutboundCampaignInput;
  };

  export class OutboundCampaignCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundCampaignCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundCampaignDeleteRequest = {
    campaignId: number;
  };

  export class OutboundCampaignDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundCampaignDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundCampaignGetByIdRequest = {
    campaignId: number;
  };

  export class OutboundCampaignGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundCampaignGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundCampaignListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: CampaignProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy314;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields26;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class OutboundCampaignListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1OutboundCampaigns400Error1", ApiV1OutboundCampaigns400Error1>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<OutboundCampaignListError> = [
      {
        on: 400,
        kind: "apiV1OutboundCampaigns400Error1",
        decode: { kind: "json", schema: apiV1OutboundCampaigns400Error1Schema },
      },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundCampaignUpdateRequest = {
    campaignId: number;
    body: OutboundCampaignInput;
  };

  export class OutboundCampaignUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundCampaignUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
