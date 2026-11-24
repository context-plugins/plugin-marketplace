import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ComplaintsResponseSchema,
  type ApiV1ComplaintsResponse,
} from "../models/api-v1-complaints-response.js";
import {
  apiV1InsuranceCarriersResponseSchema,
  type ApiV1InsuranceCarriersResponse,
} from "../models/api-v1-insurance-carriers-response.js";
import {
  apiV1InsuranceRateFilingsResponseSchema,
  type ApiV1InsuranceRateFilingsResponse,
} from "../models/api-v1-insurance-rate-filings-response.js";
import {
  apiV1LegalCasesResponseSchema,
  type ApiV1LegalCasesResponse,
} from "../models/api-v1-legal-cases-response.js";
import {
  apiV1StormEventsResponseSchema,
  type ApiV1StormEventsResponse,
} from "../models/api-v1-storm-events-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * The same corpora queried across associations, where the buyer genuinely asks the question that
 * way and an indexed filter exists to answer it.
 */
export class CrossAssociationCollections {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CFPB consumer complaints against mortgage servicers, banks and debt collectors…
   *
   * @remarks
   * CFPB consumer complaints against mortgage servicers, banks and debt collectors, as market
   * context for an association's counterparties. Not a record about the association. Live
   * description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.
   *
   * - A cross-association collection requires at least one indexed filter. Without one the request
   *   is refused with a 400 naming the filters it accepts, rather than starting a sequential scan
   *   over millions of rows.
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link CrossAssociationCollections.ResourceCollectionComplaintsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceCollectionComplaints(
    request: CrossAssociationCollections.ResourceCollectionComplaintsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ComplaintsResponse, CrossAssociationCollections.ResourceCollectionComplaintsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/complaints"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "county_fips", value: request.countyFips, schema: s.optional(s.string()) },
          { name: "jurisdiction", value: request.jurisdiction, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ComplaintsResponseSchema },
        errorFactory: CrossAssociationCollections.ResourceCollectionComplaintsError,
      },
      options,
    );
  }

  /**
   * Carriers writing in the association market, by state, with their filings and…
   *
   * @remarks
   * Carriers writing in the association market, by state, with their filings and market presence.
   * Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.
   *
   * - A cross-association collection requires at least one indexed filter. Without one the request
   *   is refused with a 400 naming the filters it accepts, rather than starting a sequential scan
   *   over millions of rows.
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link CrossAssociationCollections.ResourceCollectionInsuranceCarriersError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceCollectionInsuranceCarriers(
    request: CrossAssociationCollections.ResourceCollectionInsuranceCarriersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1InsuranceCarriersResponse,
    CrossAssociationCollections.ResourceCollectionInsuranceCarriersError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insurance/carriers"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "county_fips", value: request.countyFips, schema: s.optional(s.string()) },
          { name: "jurisdiction", value: request.jurisdiction, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1InsuranceCarriersResponseSchema },
        errorFactory: CrossAssociationCollections.ResourceCollectionInsuranceCarriersError,
      },
      options,
    );
  }

  /**
   * Litigation involving community associations across the corpus, filterable by…
   *
   * @remarks
   * Litigation involving community associations across the corpus, filterable by state and date.
   * Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.
   *
   * - A cross-association collection requires at least one indexed filter. Without one the request
   *   is refused with a 400 naming the filters it accepts, rather than starting a sequential scan
   *   over millions of rows.
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link CrossAssociationCollections.ResourceCollectionLegalCasesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceCollectionLegalCases(
    request: CrossAssociationCollections.ResourceCollectionLegalCasesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1LegalCasesResponse, CrossAssociationCollections.ResourceCollectionLegalCasesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/legal/cases"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "county_fips", value: request.countyFips, schema: s.optional(s.string()) },
          { name: "jurisdiction", value: request.jurisdiction, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1LegalCasesResponseSchema },
        errorFactory: CrossAssociationCollections.ResourceCollectionLegalCasesError,
      },
      options,
    );
  }

  /**
   * Insurance rate filings by carrier and state: what carriers asked for, and when
   *
   * @remarks
   * Insurance rate filings by carrier and state: what carriers asked for, and when. Live
   * description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.
   *
   * - A cross-association collection requires at least one indexed filter. Without one the request
   *   is refused with a 400 naming the filters it accepts, rather than starting a sequential scan
   *   over millions of rows.
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link CrossAssociationCollections.ResourceCollectionRateFilingsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceCollectionRateFilings(
    request: CrossAssociationCollections.ResourceCollectionRateFilingsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1InsuranceRateFilingsResponse,
    CrossAssociationCollections.ResourceCollectionRateFilingsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insurance/rate-filings"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "county_fips", value: request.countyFips, schema: s.optional(s.string()) },
          { name: "jurisdiction", value: request.jurisdiction, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1InsuranceRateFilingsResponseSchema },
        errorFactory: CrossAssociationCollections.ResourceCollectionRateFilingsError,
      },
      options,
    );
  }

  /**
   * NOAA storm events by county and date
   *
   * @remarks
   * NOAA storm events by county and date. The hazard history behind an association's exposure,
   * queryable across the whole corpus. Live description, provenance and coverage caveat come from
   * /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan.
   *
   * - A cross-association collection requires at least one indexed filter. Without one the request
   *   is refused with a 400 naming the filters it accepts, rather than starting a sequential scan
   *   over millions of rows.
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link CrossAssociationCollections.ResourceCollectionStormEventsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceCollectionStormEvents(
    request: CrossAssociationCollections.ResourceCollectionStormEventsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1StormEventsResponse, CrossAssociationCollections.ResourceCollectionStormEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/storm-events"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "county_fips", value: request.countyFips, schema: s.optional(s.string()) },
          { name: "jurisdiction", value: request.jurisdiction, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1StormEventsResponseSchema },
        errorFactory: CrossAssociationCollections.ResourceCollectionStormEventsError,
      },
      options,
    );
  }
}

export namespace CrossAssociationCollections {
  export type ResourceCollectionComplaintsRequest = {
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
    /** Two-letter state code. */
    state?: string;
    /** Five-digit county FIPS code. */
    countyFips?: string;
    /** Jurisdiction name as published by the source. */
    jurisdiction?: string;
  };

  export class ResourceCollectionComplaintsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceCollectionComplaintsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceCollectionInsuranceCarriersRequest = {
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
    /** Two-letter state code. */
    state?: string;
    /** Five-digit county FIPS code. */
    countyFips?: string;
    /** Jurisdiction name as published by the source. */
    jurisdiction?: string;
  };

  export class ResourceCollectionInsuranceCarriersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceCollectionInsuranceCarriersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceCollectionLegalCasesRequest = {
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
    /** Two-letter state code. */
    state?: string;
    /** Five-digit county FIPS code. */
    countyFips?: string;
    /** Jurisdiction name as published by the source. */
    jurisdiction?: string;
  };

  export class ResourceCollectionLegalCasesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceCollectionLegalCasesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceCollectionRateFilingsRequest = {
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
    /** Two-letter state code. */
    state?: string;
    /** Five-digit county FIPS code. */
    countyFips?: string;
    /** Jurisdiction name as published by the source. */
    jurisdiction?: string;
  };

  export class ResourceCollectionRateFilingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceCollectionRateFilingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceCollectionStormEventsRequest = {
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
    /** Two-letter state code. */
    state?: string;
    /** Five-digit county FIPS code. */
    countyFips?: string;
    /** Jurisdiction name as published by the source. */
    jurisdiction?: string;
  };

  export class ResourceCollectionStormEventsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceCollectionStormEventsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
