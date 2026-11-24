import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { filterTypeSchema, type FilterType } from "../models/filter-type.js";
import { filterType1Schema, type FilterType1 } from "../models/filter-type1.js";
import {
  filterTypesDiscoveryResponseSchema,
  type FilterTypesDiscoveryResponse,
} from "../models/filter-types-discovery-response.js";
import { filterValuesResponseSchema, type FilterValuesResponse } from "../models/filter-values-response.js";
import type { Servers } from "../servers.js";

/**
 * **Filter APIs:** Retrieve available filter values for prospecting.
 *
 * Use the discovery endpoints to list all available filter types, then fetch valid values for a
 * specific filter type before building a prospecting request.
 *
 * **Contact filter types:** `departments`, `seniority`, `existingDataPoints`, `countries`,
 * `locations`
 *
 * **Company filter types:** `names`, `sizes`, `revenues`, `locations`, `sics`, `naics`,
 * `industriesLabels`, `intentTopics`, `technologies`
 */
export class FiltersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Company Filter Types (Discovery)
   *
   * @remarks
   * Returns all available filter types for company prospecting and whether each requires a search
   * query.
   *
   * @returns Successful response
   *
   * @throws {@link FiltersApi.GetCompanyFilterTypesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanyFilterTypes(
    options?: RequestOptions,
  ): ApiPromise<FilterTypesDiscoveryResponse, FiltersApi.GetCompanyFilterTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/companies/prospecting/filters"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: filterTypesDiscoveryResponseSchema },
        errorFactory: FiltersApi.GetCompanyFilterTypesError,
      },
      options,
    );
  }

  /**
   * Get Company Filter Values
   *
   * @remarks
   * Returns valid values for a single company filter type.
   *
   * | Filter type | Query required? |
   * |---|---|
   * | `sizes` | No |
   * | `revenues` | No |
   * | `sics` | No |
   * | `naics` | No |
   * | `intentTopics` | No |
   * | `industriesLabels` | No |
   * | `names` | Yes (2-256 chars) |
   * | `technologies` | Yes (2-256 chars) |
   * | `locations` | Yes (2-256 chars) |
   *
   * @returns Successful response
   *
   * @throws {@link FiltersApi.GetCompanyFilterValuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanyFilterValues(
    request: FiltersApi.GetCompanyFilterValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<FilterValuesResponse, FiltersApi.GetCompanyFilterValuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/companies/prospecting/filters/{filterType}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "filterType", value: request.filterType, schema: filterType1Schema }],
        query: [{ name: "query", value: request.query, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: filterValuesResponseSchema },
        errorFactory: FiltersApi.GetCompanyFilterValuesError,
      },
      options,
    );
  }

  /**
   * Get Contact Filter Types (Discovery)
   *
   * @remarks
   * Returns all available filter types for contact prospecting and whether each requires a search
   * query.
   *
   * @returns Successful response
   *
   * @throws {@link FiltersApi.GetContactFilterTypesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactFilterTypes(
    options?: RequestOptions,
  ): ApiPromise<FilterTypesDiscoveryResponse, FiltersApi.GetContactFilterTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/contacts/prospecting/filters"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: filterTypesDiscoveryResponseSchema },
        errorFactory: FiltersApi.GetContactFilterTypesError,
      },
      options,
    );
  }

  /**
   * Get Contact Filter Values
   *
   * @remarks
   * Returns valid values for a single contact filter type.
   *
   * | Filter type | Query required? |
   * |---|---|
   * | `departments` | No |
   * | `seniority` | No |
   * | `existingDataPoints` | No |
   * | `countries` | No |
   * | `locations` | Yes (2-256 chars) |
   *
   * @returns Successful response
   *
   * @throws {@link FiltersApi.GetContactFilterValuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactFilterValues(
    request: FiltersApi.GetContactFilterValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<FilterValuesResponse, FiltersApi.GetContactFilterValuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/contacts/prospecting/filters/{filterType}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "filterType", value: request.filterType, schema: filterTypeSchema }],
        query: [{ name: "query", value: request.query, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: filterValuesResponseSchema },
        errorFactory: FiltersApi.GetContactFilterValuesError,
      },
      options,
    );
  }
}

export namespace FiltersApi {
  export class GetCompanyFilterTypesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanyFilterTypesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompanyFilterValuesRequest = {
    filterType: FilterType1;
    query?: string;
  };

  export const getCompanyFilterValuesRequestSchema: Schema<GetCompanyFilterValuesRequest> = s.lazySchema(() =>
    s.object<GetCompanyFilterValuesRequest>({
      filterType: filterType1Schema,
      query: s.optional(s.string().check(s.minLength(2), s.maxLength(256))),
    }),
  );

  export class GetCompanyFilterValuesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanyFilterValuesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetContactFilterTypesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactFilterTypesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetContactFilterValuesRequest = {
    filterType: FilterType;
    query?: string;
  };

  export const getContactFilterValuesRequestSchema: Schema<GetContactFilterValuesRequest> = s.lazySchema(() =>
    s.object<GetContactFilterValuesRequest>({
      filterType: filterTypeSchema,
      query: s.optional(s.string().check(s.minLength(2), s.maxLength(256))),
    }),
  );

  export class GetContactFilterValuesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactFilterValuesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
