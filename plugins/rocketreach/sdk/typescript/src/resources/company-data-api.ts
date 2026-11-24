import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyQuerySchema, type CompanyQuery } from "../models/company-query.js";
import { companyQuery1Schema, type CompanyQuery1 } from "../models/company-query1.js";
import {
  compiledCompanyApiSerializerWithExtendedCompanyAttributesSchema,
  type CompiledCompanyApiSerializerWithExtendedCompanyAttributes,
} from "../models/compiled-company-api-serializer-with-extended-company-attributes.js";
import {
  compiledCompanyPublicDetailsSchema,
  type CompiledCompanyPublicDetails,
} from "../models/compiled-company-public-details.js";
import { lookupTypeSchema, type LookupType } from "../models/lookup-type.js";
import { OrderByEnum, orderByEnumSchema } from "../models/order-by-enum.js";
import {
  profileApiSerializerWithCompiledCompanyInternalSchema,
  type ProfileApiSerializerWithCompiledCompany,
} from "../models/profile-api-serializer-with-compiled-company.js";
import {
  universalCreditCompanySearchOutputSchema,
  type UniversalCreditCompanySearchOutput,
} from "../models/universal-credit-company-search-output.js";
import type { Servers } from "../servers.js";

export class CompanyDataApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Company Lookup API
   *
   * @remarks
   * Search Companies by Criteria
   *
   * @returns Success. Returns the profile data for the company lookup.
   *
   * @throws {@link CompanyDataApi.CreateCompanyLookupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCompanyLookup(
    request: CompanyDataApi.CreateCompanyLookupRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    CompiledCompanyApiSerializerWithExtendedCompanyAttributes,
    CompanyDataApi.CreateCompanyLookupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/company/lookup/"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.int()) },
          { name: "linkedin_url", value: request.linkedinUrl, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "ticker", value: request.ticker, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: compiledCompanyApiSerializerWithExtendedCompanyAttributesSchema },
        errorFactory: CompanyDataApi.CreateCompanyLookupError,
      },
      options,
    );
  }

  /**
   * Company Search API
   *
   * @remarks
   * Search Companies by Criteria
   *
   * @returns Success. Companies search request accepted
   *
   * @throws {@link CompanyDataApi.CreateCompanySearchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCompanySearch(
    request: CompanyDataApi.CreateCompanySearchRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CompiledCompanyPublicDetails[], CompanyDataApi.CreateCompanySearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/searchCompany"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "start", value: request.start, schema: s.defaulted(s.int(), 1) },
            { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
            { name: "query", value: request.query, schema: s.optional(s.lazy(() => companyQuery1Schema)) },
            {
              name: "order_by",
              value: request.orderBy,
              schema: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => compiledCompanyPublicDetailsSchema)) },
        errorFactory: CompanyDataApi.CreateCompanySearchError,
      },
      options,
    );
  }

  /**
   * People and Company Lookup API
   *
   * @remarks
   * Person and Company Lookup
   *
   * @returns Success. Returns the profile data and company data for the person / company lookup.
   *
   * @throws {@link CompanyDataApi.CreatePersonAndCompanyLookupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPersonAndCompanyLookup(
    request: CompanyDataApi.CreatePersonAndCompanyLookupRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProfileApiSerializerWithCompiledCompany, CompanyDataApi.CreatePersonAndCompanyLookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/profile-company/lookup"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [
          { name: "current_employer", value: request.currentEmployer, schema: s.optional(s.string()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.int()) },
          { name: "linkedin_ext_url", value: request.linkedinExtUrl, schema: s.optional(s.string()) },
          { name: "linkedin_url", value: request.linkedinUrl, schema: s.optional(s.string()) },
          {
            name: "lookup_type",
            value: request.lookupType,
            schema: s.optionalNullable(s.lazy(() => lookupTypeSchema)),
          },
          { value: request.metadata, schema: s.optionalNullable(s.record(s.string(), s.unknown())) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "npi_number", value: request.npiNumber, schema: s.optional(s.int()) },
          { name: "phone", value: request.phone, schema: s.optional(s.string()) },
          {
            name: "return_cached_emails",
            value: request.returnCachedEmails,
            schema: s.defaulted(s.boolean(), true),
          },
          { name: "title", value: request.title, schema: s.optional(s.string()) },
          { name: "webhook_id", value: request.webhookId, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: profileApiSerializerWithCompiledCompanyInternalSchema },
        errorFactory: CompanyDataApi.CreatePersonAndCompanyLookupError,
      },
      options,
    );
  }

  /**
   * ⭐ Universal Company Lookup API
   *
   * @remarks
   * Search Companies by Criteria
   *
   * @returns Success. Returns the profile data for the company lookup.
   *
   * @throws {@link CompanyDataApi.CreateUniversalCompanyLookupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUniversalCompanyLookup(
    request: CompanyDataApi.CreateUniversalCompanyLookupRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    CompiledCompanyApiSerializerWithExtendedCompanyAttributes,
    CompanyDataApi.CreateUniversalCompanyLookupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/universal/company/lookup"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.int()) },
          { name: "linkedin_url", value: request.linkedinUrl, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "ticker", value: request.ticker, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: compiledCompanyApiSerializerWithExtendedCompanyAttributesSchema },
        errorFactory: CompanyDataApi.CreateUniversalCompanyLookupError,
      },
      options,
    );
  }

  /**
   * ⭐ Universal Company Search API
   *
   * @remarks
   * Search Companies by Criteria
   *
   * @returns Success. Companies search request accepted
   *
   * @throws {@link CompanyDataApi.CreateUniversalCompanySearchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUniversalCompanySearch(
    request: CompanyDataApi.CreateUniversalCompanySearchRequest = {},
    options?: RequestOptions,
  ): ApiPromise<UniversalCreditCompanySearchOutput[], CompanyDataApi.CreateUniversalCompanySearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/universal/company/search"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "start", value: request.start, schema: s.defaulted(s.int(), 1) },
            { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 100) },
            { name: "query", value: request.query, schema: s.optional(s.lazy(() => companyQuerySchema)) },
            {
              name: "order_by",
              value: request.orderBy,
              schema: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => universalCreditCompanySearchOutputSchema)) },
        errorFactory: CompanyDataApi.CreateUniversalCompanySearchError,
      },
      options,
    );
  }
}

export namespace CompanyDataApi {
  export type CreateCompanyLookupRequest = {
    /** Domain of the desired company to lookup (preferred). */
    domain?: string;
    /** RocketReach internal unique company ID */
    id?: number;
    /** LinkedIn URL of the desired company to lookup. */
    linkedinUrl?: string;
    /** Name of the desired company to lookup. */
    name?: string;
    /** Stock ticker of the desired company to lookup. */
    ticker?: string;
  };

  export const createCompanyLookupRequestSchema: Schema<CreateCompanyLookupRequest> = s.lazySchema(() =>
    s.object<CreateCompanyLookupRequest>({
      domain: s.optional(s.string().check(s.minLength(1))),
      id: s.optional(s.int()),
      linkedinUrl: s.optional(s.string().check(s.minLength(1))),
      name: s.optional(s.string().check(s.minLength(1))),
      ticker: s.optional(s.string().check(s.minLength(1))),
    }),
  );

  export class CreateCompanyLookupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCompanyLookupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateCompanySearchRequest = {
    /** Start index of the request results (counting from 1) @default 1 */
    start?: number;
    /** Maximum number of results to return per page [1-100] @default 10 */
    pageSize?: number;
    /** Search query object for the request */
    query?: CompanyQuery1;
    /**
     * Specifies the ordering of search results. "popularity" matches the default ordering of the
     * Search web app.
     *
     * @default OrderByEnum.Relevance
     */
    orderBy?: OrderByEnum;
  };

  export const createCompanySearchRequestSchema: Schema<CreateCompanySearchRequest> = s.lazySchema(() =>
    s.object<CreateCompanySearchRequest>({
      start: s.defaulted(s.int().check(s.gte(1), s.lte(10000)), 1),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      query: s.optional(s.lazy(() => companyQuery1Schema)),
      orderBy: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
    }),
  );

  export class CreateCompanySearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCompanySearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreatePersonAndCompanyLookupRequest = {
    /**
     * Current employer of the desired profile. Must specify along with `name`.
     * - Example: `RocketReach`
     */
    currentEmployer?: string;
    /**
     * An email address for the desired profile.
     * - Example: `jamie@rocketreach.co`
     */
    email?: string;
    /**
     * RocketReach internal unique profile ID.
     * - Example: `123456`
     */
    id?: number;
    /**
     * linkedin_ext_url deprecated, please use `linkedin_url` instead
     *
     * @deprecated
     */
    linkedinExtUrl?: string;
    /**
     * LinkedIn URL of the desired profile.
     * - Example: `www.linkedin.com/in/jamesgullbrand`
     */
    linkedinUrl?: string;
    /**
     * Lookup type for the request
     *
     * * `standard` - standard
     * * `premium` - premium
     * * `premium (feeds disabled)` - premium (feeds disabled)
     * * `bulk` - bulk
     * * `phone` - phone
     * * `enrich` - enrich
     */
    lookupType?: LookupType | null;
    /** User metadata about the profile, such as external ids, tags, notes, etc. */
    metadata?: Record<string, unknown> | null;
    /**
     * Name of the desired profile. Must specify along with `current_employer`.
     * - Example: `Jamie Gullbrand`
     */
    name?: string;
    /**
     * An NPI number for the desired profile (US healthcare professional).
     * - Example: `1234567890`
     */
    npiNumber?: number;
    /**
     * A phone number for the desired profile in either E.164 format or international format.
     * - Example: `+15555555555`
     */
    phone?: string;
    /**
     * Controls whether cached emails are included in the initial response when `lookup status =
     * progress`. When set to `false`, all email fields will be null until the lookup is complete
     * and all emails are fully verified. Use /checkStatus or Webhooks to retrieve the completed
     * response with fully verified emails (`status = complete`). Defaults to `true`.
     *
     * <b>NOTE: Default will change to false on September 1st, 2026. No cached emails will be
     * returned in the initial response. Use /checkStatus or webhooks to retrieve fully verified
     * emails.</b>
     *
     * @default true
     */
    returnCachedEmails?: boolean;
    /**
     * Job title of the desired profile.
     * - Example: `Product Manager`
     */
    title?: string;
    /** Your webhook's unique ID number. Find it in your API Usage & Settings page. */
    webhookId?: number;
  };

  export const createPersonAndCompanyLookupRequestSchema: Schema<CreatePersonAndCompanyLookupRequest> =
    s.lazySchema(() =>
      s.object<CreatePersonAndCompanyLookupRequest>({
        currentEmployer: s.optional(s.string().check(s.minLength(1))),
        email: s.optional(s.string().check(s.minLength(1), s.email())),
        id: s.optional(s.int()),
        linkedinExtUrl: s.optional(s.string().check(s.minLength(1))),
        linkedinUrl: s.optional(s.string().check(s.minLength(1))),
        lookupType: s.optionalNullable(s.lazy(() => lookupTypeSchema)),
        metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
        name: s.optional(s.string().check(s.minLength(1))),
        npiNumber: s.optional(s.int()),
        phone: s.optional(s.string().check(s.minLength(1))),
        returnCachedEmails: s.defaulted(s.boolean(), true),
        title: s.optional(s.string().check(s.minLength(1))),
        webhookId: s.optional(s.int()),
      }),
    );

  export class CreatePersonAndCompanyLookupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePersonAndCompanyLookupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateUniversalCompanyLookupRequest = {
    /** Domain of the desired company to lookup (preferred). */
    domain?: string;
    /** RocketReach internal unique company ID */
    id?: number;
    /** LinkedIn URL of the desired company to lookup. */
    linkedinUrl?: string;
    /** Name of the desired company to lookup. */
    name?: string;
    /** Stock ticker of the desired company to lookup. */
    ticker?: string;
  };

  export const createUniversalCompanyLookupRequestSchema: Schema<CreateUniversalCompanyLookupRequest> =
    s.lazySchema(() =>
      s.object<CreateUniversalCompanyLookupRequest>({
        domain: s.optional(s.string().check(s.minLength(1))),
        id: s.optional(s.int()),
        linkedinUrl: s.optional(s.string().check(s.minLength(1))),
        name: s.optional(s.string().check(s.minLength(1))),
        ticker: s.optional(s.string().check(s.minLength(1))),
      }),
    );

  export class CreateUniversalCompanyLookupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUniversalCompanyLookupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateUniversalCompanySearchRequest = {
    /**
     * Paginate through search results by returning results starting from this value (counting from
     * 1).
     *
     * @default 1
     */
    start?: number;
    /** Maximum number of search results to return per page. @default 100 */
    pageSize?: number;
    query?: CompanyQuery;
    /** @default OrderByEnum.Relevance */
    orderBy?: OrderByEnum;
  };

  export const createUniversalCompanySearchRequestSchema: Schema<CreateUniversalCompanySearchRequest> =
    s.lazySchema(() =>
      s.object<CreateUniversalCompanySearchRequest>({
        start: s.defaulted(s.int().check(s.gte(1), s.lte(10000)), 1),
        pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 100),
        query: s.optional(s.lazy(() => companyQuerySchema)),
        orderBy: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
      }),
    );

  export class CreateUniversalCompanySearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUniversalCompanySearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
