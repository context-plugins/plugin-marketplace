import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { countryFilterSchema, type CountryFilter } from "../models/country-filter.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { locationFilterSchema, type LocationFilter } from "../models/location-filter.js";
import {
  locationSearchRequestSchema,
  type LocationSearchRequest,
} from "../models/location-search-request.js";
import type { Servers } from "../servers.js";

/**
 * Available filters for contact searches
 */
export class ContactFiltersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Countries
   *
   * @remarks
   * Get list of all available countries for contact filtering
   *
   * @returns List of countries with codes
   *
   * @throws {@link ContactFiltersApi.GetContactCountriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactCountries(
    options?: RequestOptions,
  ): ApiPromise<CountryFilter[], ContactFiltersApi.GetContactCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prospecting/filters/contacts/all_countries"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => countryFilterSchema)) },
        errorFactory: ContactFiltersApi.GetContactCountriesError,
      },
      options,
    );
  }

  /**
   * Data Points
   *
   * @remarks
   * Get list of available data points for contact filtering
   *
   * @returns List of data points
   *
   * @throws {@link ContactFiltersApi.GetContactDataPointsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactDataPoints(
    options?: RequestOptions,
  ): ApiPromise<string[], ContactFiltersApi.GetContactDataPointsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prospecting/filters/contacts/existing_data_points"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: ContactFiltersApi.GetContactDataPointsError,
      },
      options,
    );
  }

  /**
   * Departments
   *
   * @remarks
   * Get list of available departments for contact filtering
   *
   * @returns List of departments
   *
   * @throws {@link ContactFiltersApi.GetContactDepartmentsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactDepartments(
    options?: RequestOptions,
  ): ApiPromise<string[], ContactFiltersApi.GetContactDepartmentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prospecting/filters/contacts/departments"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: ContactFiltersApi.GetContactDepartmentsError,
      },
      options,
    );
  }

  /**
   * Seniority
   *
   * @remarks
   * Get list of available seniority levels for contact filtering
   *
   * @returns List of seniority levels
   *
   * @throws {@link ContactFiltersApi.GetContactSeniorityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactSeniority(
    options?: RequestOptions,
  ): ApiPromise<string[], ContactFiltersApi.GetContactSeniorityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prospecting/filters/contacts/seniority"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: ContactFiltersApi.GetContactSeniorityError,
      },
      options,
    );
  }

  /**
   * Locations
   *
   * @remarks
   * Search for locations by text for contact filtering
   *
   * @returns Matching locations
   *
   * @throws {@link ContactFiltersApi.SearchContactLocationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchContactLocations(
    request: ContactFiltersApi.SearchContactLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<LocationFilter[], ContactFiltersApi.SearchContactLocationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/prospecting/filters/contacts/locations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: locationSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => locationFilterSchema)) },
        errorFactory: ContactFiltersApi.SearchContactLocationsError,
      },
      options,
    );
  }
}

export namespace ContactFiltersApi {
  export class GetContactCountriesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetContactCountriesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetContactDataPointsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetContactDataPointsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetContactDepartmentsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetContactDepartmentsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetContactSeniorityError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetContactSeniorityError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchContactLocationsRequest = {
    body: LocationSearchRequest;
  };

  export class SearchContactLocationsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SearchContactLocationsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
