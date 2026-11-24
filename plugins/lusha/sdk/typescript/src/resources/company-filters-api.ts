import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  companyLocationFilterSchema,
  type CompanyLocationFilter,
} from "../models/company-location-filter.js";
import { companyNameResultSchema, type CompanyNameResult } from "../models/company-name-result.js";
import {
  companyNameSearchRequestSchema,
  type CompanyNameSearchRequest,
} from "../models/company-name-search-request.js";
import { companySizeRangeSchema, type CompanySizeRange } from "../models/company-size-range.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { industryLabelSchema, type IndustryLabel } from "../models/industry-label.js";
import {
  locationSearchRequestSchema,
  type LocationSearchRequest,
} from "../models/location-search-request.js";
import { naicsCodeSchema, type NaicsCode } from "../models/naics-code.js";
import { revenueRangeSchema, type RevenueRange } from "../models/revenue-range.js";
import { sicCodeSchema, type SicCode } from "../models/sic-code.js";
import {
  technologySearchRequestSchema,
  type TechnologySearchRequest,
} from "../models/technology-search-request.js";
import { technologySchema, type Technology } from "../models/technology.js";
import type { Servers } from "../servers.js";

/**
 * Available filters for company searches
 */
export class CompanyFiltersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Industries
   *
   * @remarks
   * Get list of available industries for company filtering
   *
   * @returns Industry hierarchy
   *
   * @throws {@link CompanyFiltersApi.GetCompanyIndustriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanyIndustries(
    options?: RequestOptions,
  ): ApiPromise<IndustryLabel[], CompanyFiltersApi.GetCompanyIndustriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prospecting/filters/companies/industries_labels"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => industryLabelSchema)) },
        errorFactory: CompanyFiltersApi.GetCompanyIndustriesError,
      },
      options,
    );
  }

  /**
   * Intent Topics
   *
   * @remarks
   * Get list of available intent topics
   *
   * @returns Intent topics
   *
   * @throws {@link CompanyFiltersApi.GetCompanyIntentTopicsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanyIntentTopics(
    options?: RequestOptions,
  ): ApiPromise<string[], CompanyFiltersApi.GetCompanyIntentTopicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prospecting/filters/companies/intent_topics"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: CompanyFiltersApi.GetCompanyIntentTopicsError,
      },
      options,
    );
  }

  /**
   * NAICS Codes
   *
   * @remarks
   * Get list of available NAICS codes
   *
   * @returns NAICS codes
   *
   * @throws {@link CompanyFiltersApi.GetCompanyNaicsCodesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanyNaicsCodes(
    options?: RequestOptions,
  ): ApiPromise<NaicsCode[], CompanyFiltersApi.GetCompanyNaicsCodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prospecting/filters/companies/naics"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => naicsCodeSchema)) },
        errorFactory: CompanyFiltersApi.GetCompanyNaicsCodesError,
      },
      options,
    );
  }

  /**
   * Revenues
   *
   * @remarks
   * Get list of available revenue ranges
   *
   * @returns Revenue ranges
   *
   * @throws {@link CompanyFiltersApi.GetCompanyRevenuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanyRevenues(
    options?: RequestOptions,
  ): ApiPromise<RevenueRange[], CompanyFiltersApi.GetCompanyRevenuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prospecting/filters/companies/revenues"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => revenueRangeSchema)) },
        errorFactory: CompanyFiltersApi.GetCompanyRevenuesError,
      },
      options,
    );
  }

  /**
   * SIC Codes
   *
   * @remarks
   * Get list of available SIC codes
   *
   * @returns SIC codes
   *
   * @throws {@link CompanyFiltersApi.GetCompanySicCodesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanySicCodes(
    options?: RequestOptions,
  ): ApiPromise<SicCode[], CompanyFiltersApi.GetCompanySicCodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prospecting/filters/companies/sics"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sicCodeSchema)) },
        errorFactory: CompanyFiltersApi.GetCompanySicCodesError,
      },
      options,
    );
  }

  /**
   * Sizes
   *
   * @remarks
   * Get list of available company size ranges
   *
   * @returns Company size ranges
   *
   * @throws {@link CompanyFiltersApi.GetCompanySizesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanySizes(
    options?: RequestOptions,
  ): ApiPromise<CompanySizeRange[], CompanyFiltersApi.GetCompanySizesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/prospecting/filters/companies/sizes"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => companySizeRangeSchema)) },
        errorFactory: CompanyFiltersApi.GetCompanySizesError,
      },
      options,
    );
  }

  /**
   * Locations
   *
   * @remarks
   * Search for company locations by text
   *
   * @returns Matching locations
   *
   * @throws {@link CompanyFiltersApi.SearchCompanyLocationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCompanyLocations(
    request: CompanyFiltersApi.SearchCompanyLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyLocationFilter[], CompanyFiltersApi.SearchCompanyLocationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/prospecting/filters/companies/locations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: locationSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => companyLocationFilterSchema)) },
        errorFactory: CompanyFiltersApi.SearchCompanyLocationsError,
      },
      options,
    );
  }

  /**
   * Names
   *
   * @remarks
   * Search for company names by text
   *
   * @returns Matching companies
   *
   * @throws {@link CompanyFiltersApi.SearchCompanyNamesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCompanyNames(
    request: CompanyFiltersApi.SearchCompanyNamesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyNameResult[], CompanyFiltersApi.SearchCompanyNamesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/prospecting/filters/companies/names"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companyNameSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => companyNameResultSchema)) },
        errorFactory: CompanyFiltersApi.SearchCompanyNamesError,
      },
      options,
    );
  }

  /**
   * Technologies
   *
   * @remarks
   * Search for technologies by text
   *
   * @returns Matching technologies
   *
   * @throws {@link CompanyFiltersApi.SearchCompanyTechnologiesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCompanyTechnologies(
    request: CompanyFiltersApi.SearchCompanyTechnologiesRequest,
    options?: RequestOptions,
  ): ApiPromise<Technology[], CompanyFiltersApi.SearchCompanyTechnologiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/prospecting/filters/companies/technologies"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: technologySearchRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => technologySchema)) },
        errorFactory: CompanyFiltersApi.SearchCompanyTechnologiesError,
      },
      options,
    );
  }
}

export namespace CompanyFiltersApi {
  export class GetCompanyIndustriesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanyIndustriesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetCompanyIntentTopicsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanyIntentTopicsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetCompanyNaicsCodesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanyNaicsCodesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetCompanyRevenuesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanyRevenuesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetCompanySicCodesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanySicCodesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetCompanySizesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanySizesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchCompanyLocationsRequest = {
    body: LocationSearchRequest;
  };

  export class SearchCompanyLocationsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SearchCompanyLocationsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchCompanyNamesRequest = {
    body: CompanyNameSearchRequest;
  };

  export class SearchCompanyNamesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SearchCompanyNamesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchCompanyTechnologiesRequest = {
    body: TechnologySearchRequest;
  };

  export class SearchCompanyTechnologiesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SearchCompanyTechnologiesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
