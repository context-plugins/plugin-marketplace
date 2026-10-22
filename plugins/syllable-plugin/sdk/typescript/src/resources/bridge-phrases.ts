import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bridgePhrasesCreateRequestSchema,
  type BridgePhrasesCreateRequest,
} from "../models/bridge-phrases-create-request.js";
import {
  bridgePhrasesPropertiesSchema,
  type BridgePhrasesProperties,
} from "../models/bridge-phrases-properties.js";
import {
  bridgePhrasesResponseSchema,
  type BridgePhrasesResponse,
} from "../models/bridge-phrases-response.js";
import {
  bridgePhrasesUpdateRequestSchema,
  type BridgePhrasesUpdateRequest,
} from "../models/bridge-phrases-update-request.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseBridgePhrasesResponseSchema,
  type ListResponseBridgePhrasesResponse,
} from "../models/list-response-bridge-phrases-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields1Schema, type Fields1 } from "../models/unions/fields1.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy11Schema, type OrderBy11 } from "../models/unions/order-by11.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

export class BridgePhrases {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Bridge Phrases
   *
   * @remarks
   * Create a new bridge phrases config.
   *
   * @returns Successful Response
   *
   * @throws {@link BridgePhrases.BridgePhrasesCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bridgePhrasesCreate(
    request: BridgePhrases.BridgePhrasesCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BridgePhrasesResponse, BridgePhrases.BridgePhrasesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/bridge_phrases/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bridgePhrasesCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: bridgePhrasesResponseSchema },
        errorFactory: BridgePhrases.BridgePhrasesCreateError,
      },
      options,
    );
  }

  /**
   * Delete Bridge Phrases
   *
   * @remarks
   * Delete a bridge phrases config.
   *
   * @returns Successful Response
   *
   * @throws {@link BridgePhrases.BridgePhrasesDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bridgePhrasesDelete(
    request: BridgePhrases.BridgePhrasesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, BridgePhrases.BridgePhrasesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/bridge_phrases/{bridge_phrases_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "bridge_phrases_id", value: request.bridgePhrasesId, schema: s.int() }],
        query: [{ name: "reason", value: request.reason, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: BridgePhrases.BridgePhrasesDeleteError,
      },
      options,
    );
  }

  /**
   * Get Bridge Phrases
   *
   * @remarks
   * Fetch a given bridge phrases config.
   *
   * @returns Successful Response
   *
   * @throws {@link BridgePhrases.BridgePhrasesGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bridgePhrasesGetById(
    request: BridgePhrases.BridgePhrasesGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BridgePhrasesResponse, BridgePhrases.BridgePhrasesGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/bridge_phrases/{bridge_phrases_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "bridge_phrases_id", value: request.bridgePhrasesId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bridgePhrasesResponseSchema },
        errorFactory: BridgePhrases.BridgePhrasesGetByIdError,
      },
      options,
    );
  }

  /**
   * List Bridge Phrases
   *
   * @remarks
   * Fetch bridge phrases configs.
   *
   * @returns Successful Response
   *
   * @throws {@link BridgePhrases.BridgePhrasesListError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bridgePhrasesList(
    request: BridgePhrases.BridgePhrasesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseBridgePhrasesResponse, BridgePhrases.BridgePhrasesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/bridge_phrases/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => bridgePhrasesPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy11Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields1Schema)) },
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
        success: { kind: "json", schema: listResponseBridgePhrasesResponseSchema },
        errorFactory: BridgePhrases.BridgePhrasesListError,
      },
      options,
    );
  }

  /**
   * Update Bridge Phrases
   *
   * @remarks
   * Update an existing bridge phrases config.
   *
   * @returns Successful Response
   *
   * @throws {@link BridgePhrases.BridgePhrasesUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bridgePhrasesUpdate(
    request: BridgePhrases.BridgePhrasesUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BridgePhrasesResponse, BridgePhrases.BridgePhrasesUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/bridge_phrases/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bridgePhrasesUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: bridgePhrasesResponseSchema },
        errorFactory: BridgePhrases.BridgePhrasesUpdateError,
      },
      options,
    );
  }
}

export namespace BridgePhrases {
  export type BridgePhrasesCreateRequestParams = {
    body: BridgePhrasesCreateRequest;
  };

  export class BridgePhrasesCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<BridgePhrasesCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type BridgePhrasesDeleteRequest = {
    bridgePhrasesId: number;
    reason: string;
  };

  export class BridgePhrasesDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<BridgePhrasesDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type BridgePhrasesGetByIdRequest = {
    bridgePhrasesId: number;
  };

  export class BridgePhrasesGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<BridgePhrasesGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type BridgePhrasesListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: BridgePhrasesProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy11;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields1;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class BridgePhrasesListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<BridgePhrasesListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type BridgePhrasesUpdateRequestParams = {
    body: BridgePhrasesUpdateRequest;
  };

  export class BridgePhrasesUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<BridgePhrasesUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
