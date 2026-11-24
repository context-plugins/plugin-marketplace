import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lookupTypeSchema, type LookupType } from "../models/lookup-type.js";
import { OrderByEnum, orderByEnumSchema } from "../models/order-by-enum.js";
import { personQuerySchema, type PersonQuery } from "../models/person-query.js";
import { personQuery1Schema, type PersonQuery1 } from "../models/person-query1.js";
import {
  profileApiCompiledCompanyInternalSchema,
  type ProfileApiCompiledCompany,
} from "../models/profile-api-compiled-company.js";
import {
  profileApiSerializerWithCompiledCompanyInternalSchema,
  type ProfileApiSerializerWithCompiledCompany,
} from "../models/profile-api-serializer-with-compiled-company.js";
import {
  profileApiWithMetadataCompiledCompanyInternalSchema,
  type ProfileApiWithMetadataCompiledCompany,
} from "../models/profile-api-with-metadata-compiled-company.js";
import { profileMatchInternalSchema, type ProfileMatch } from "../models/profile-match.js";
import {
  profileSearchResultSerializerBaseInternalSchema,
  type ProfileSearchResultSerializerBase,
} from "../models/profile-search-result-serializer-base.js";
import {
  universalCreditPersonLookupInputInternalSchema,
  type UniversalCreditPersonLookupInput,
} from "../models/universal-credit-person-lookup-input.js";
import {
  universalCreditPersonLookupOutputWithMetadataInternalSchema,
  type UniversalCreditPersonLookupOutputWithMetadata,
} from "../models/universal-credit-person-lookup-output-with-metadata.js";
import {
  universalCreditPersonLookupOutputInternalSchema,
  type UniversalCreditPersonLookupOutput,
} from "../models/universal-credit-person-lookup-output.js";
import {
  universalCreditPersonSearchOutputInternalSchema,
  type UniversalCreditPersonSearchOutput,
} from "../models/universal-credit-person-search-output.js";
import type { Servers } from "../servers.js";

export class PeopleDataApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * People Lookup Status API
   *
   * @remarks
   * Check Person Lookup Status
   *
   * @returns Success. Returns the status and profile data of the requested profiles.
   *
   * @throws {@link PeopleDataApi.CheckPersonLookupStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkPersonLookupStatus(
    request: PeopleDataApi.CheckPersonLookupStatusRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProfileApiCompiledCompany[], PeopleDataApi.CheckPersonLookupStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/person/checkStatus"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.optional(s.array(s.int())) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => profileApiCompiledCompanyInternalSchema)) },
        errorFactory: PeopleDataApi.CheckPersonLookupStatusError,
      },
      options,
    );
  }

  /**
   * ⭐ Universal People Lookup Status API
   *
   * @remarks
   * Check Universal Person Lookup Status
   *
   * @returns Success. Returns the status and profile data of the requested profiles.
   *
   * @throws {@link PeopleDataApi.CheckUniversalPersonLookupStatusError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  checkUniversalPersonLookupStatus(
    request: PeopleDataApi.CheckUniversalPersonLookupStatusRequest = {},
    options?: RequestOptions,
  ): ApiPromise<UniversalCreditPersonLookupOutput[], PeopleDataApi.CheckUniversalPersonLookupStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/universal/person/check_status"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [{ name: "ids", value: request.ids, schema: s.optional(s.array(s.int())) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => universalCreditPersonLookupOutputInternalSchema)),
        },
        errorFactory: PeopleDataApi.CheckUniversalPersonLookupStatusError,
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
   * @throws {@link PeopleDataApi.CreatePersonAndCompanyLookup2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPersonAndCompanyLookup2(
    request: PeopleDataApi.CreatePersonAndCompanyLookup2Request = {},
    options?: RequestOptions,
  ): ApiPromise<ProfileApiSerializerWithCompiledCompany, PeopleDataApi.CreatePersonAndCompanyLookup2Error> {
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
        errorFactory: PeopleDataApi.CreatePersonAndCompanyLookup2Error,
      },
      options,
    );
  }

  /**
   * Bulk People Lookup API
   *
   * @remarks
   * Bulk People Lookup by Criteria
   *
   * @returns Success. Bulk lookup request accepted
   *
   * @throws {@link PeopleDataApi.CreatePersonBulkLookupError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPersonBulkLookup(
    request: PeopleDataApi.CreatePersonBulkLookupRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, PeopleDataApi.CreatePersonBulkLookupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bulkLookup"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "queries",
              value: request.queries,
              schema: s.optional(s.array(s.lazy(() => profileMatchInternalSchema))),
            },
            {
              name: "profile_list",
              value: request.profileList,
              schema: s.defaulted(s.string(), "API Bulk Lookup"),
            },
            { name: "webhook_id", value: request.webhookId, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: PeopleDataApi.CreatePersonBulkLookupError,
      },
      options,
    );
  }

  /**
   * People Lookup API
   *
   * @remarks
   * Person Enrichment API
   *
   * @returns Success. Returns the profile data for the person lookup.
   *
   * @throws {@link PeopleDataApi.CreatePersonLookupError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPersonLookup(
    request: PeopleDataApi.CreatePersonLookupRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProfileApiWithMetadataCompiledCompany, PeopleDataApi.CreatePersonLookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/person/lookup"),
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
        success: { kind: "json", schema: profileApiWithMetadataCompiledCompanyInternalSchema },
        errorFactory: PeopleDataApi.CreatePersonLookupError,
      },
      options,
    );
  }

  /**
   * People Search API
   *
   * @remarks
   * Search People by Criteria
   *
   * @returns Success. People search request accepted
   *
   * @throws {@link PeopleDataApi.CreatePersonSearchError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPersonSearch(
    request: PeopleDataApi.CreatePersonSearchRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ProfileSearchResultSerializerBase[], PeopleDataApi.CreatePersonSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/person/search"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "start", value: request.start, schema: s.defaulted(s.int(), 1) },
            { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 10) },
            { name: "query", value: request.query, schema: s.optional(s.lazy(() => personQuery1Schema)) },
            {
              name: "order_by",
              value: request.orderBy,
              schema: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
            },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => profileSearchResultSerializerBaseInternalSchema)),
        },
        errorFactory: PeopleDataApi.CreatePersonSearchError,
      },
      options,
    );
  }

  /**
   * ⭐ Universal Bulk People Lookup API
   *
   * @remarks
   * Bulk People Lookup by Criteria
   *
   * @returns Success. Bulk lookup request accepted
   *
   * @throws {@link PeopleDataApi.CreateUniversalPersonBulkLookupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUniversalPersonBulkLookup(
    request: PeopleDataApi.CreateUniversalPersonBulkLookupRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, PeopleDataApi.CreateUniversalPersonBulkLookupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/universal/person/bulk_lookup"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "queries",
              value: request.queries,
              schema: s.optional(s.array(s.lazy(() => universalCreditPersonLookupInputInternalSchema))),
            },
            {
              name: "profile_list",
              value: request.profileList,
              schema: s.defaulted(s.string(), "API Bulk Lookup"),
            },
            { name: "webhook_id", value: request.webhookId, schema: s.optional(s.int()) },
          ],
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: PeopleDataApi.CreateUniversalPersonBulkLookupError,
      },
      options,
    );
  }

  /**
   * ⭐ Universal People Lookup API
   *
   * @remarks
   * Person Enrichment API
   *
   * @returns Success. Returns the profile data for the person lookup.
   *
   * @throws {@link PeopleDataApi.CreateUniversalPersonLookupError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUniversalPersonLookup(
    request: PeopleDataApi.CreateUniversalPersonLookupRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    UniversalCreditPersonLookupOutputWithMetadata,
    PeopleDataApi.CreateUniversalPersonLookupError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/universal/person/lookup"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [
          { name: "current_employer", value: request.currentEmployer, schema: s.optional(s.string()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.int()) },
          { name: "linkedin_ext_url", value: request.linkedinExtUrl, schema: s.optional(s.string()) },
          { name: "linkedin_url", value: request.linkedinUrl, schema: s.optional(s.string()) },
          { value: request.metadata, schema: s.optionalNullable(s.record(s.string(), s.unknown())) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "npi_number", value: request.npiNumber, schema: s.optional(s.int()) },
          { name: "phone", value: request.phone, schema: s.optional(s.string()) },
          {
            name: "return_cached_emails",
            value: request.returnCachedEmails,
            schema: s.defaulted(s.boolean(), true),
          },
          {
            name: "reveal_detailed_person_enrichment",
            value: request.revealDetailedPersonEnrichment,
            schema: s.defaulted(s.boolean(), false),
          },
          {
            name: "reveal_healthcare_enrichment",
            value: request.revealHealthcareEnrichment,
            schema: s.defaulted(s.boolean(), false),
          },
          {
            name: "reveal_personal_email",
            value: request.revealPersonalEmail,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "reveal_phone", value: request.revealPhone, schema: s.defaulted(s.boolean(), false) },
          {
            name: "reveal_professional_email",
            value: request.revealProfessionalEmail,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "title", value: request.title, schema: s.optional(s.string()) },
          { name: "webhook_id", value: request.webhookId, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: universalCreditPersonLookupOutputWithMetadataInternalSchema },
        errorFactory: PeopleDataApi.CreateUniversalPersonLookupError,
      },
      options,
    );
  }

  /**
   * ⭐ Universal People Search API
   *
   * @remarks
   * Search People by Criteria
   *
   * @returns Success. People search request accepted
   *
   * @throws {@link PeopleDataApi.CreateUniversalPersonSearchError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link RocketReachError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUniversalPersonSearch(
    request: PeopleDataApi.CreateUniversalPersonSearchRequest = {},
    options?: RequestOptions,
  ): ApiPromise<UniversalCreditPersonSearchOutput[], PeopleDataApi.CreateUniversalPersonSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/universal/person/search"),
        auth: this.#auth.rocketReachApiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "start", value: request.start, schema: s.defaulted(s.int(), 1) },
            { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 100) },
            { name: "query", value: request.query, schema: s.optional(s.lazy(() => personQuerySchema)) },
            {
              name: "order_by",
              value: request.orderBy,
              schema: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
            },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => universalCreditPersonSearchOutputInternalSchema)),
        },
        errorFactory: PeopleDataApi.CreateUniversalPersonSearchError,
      },
      options,
    );
  }
}

export namespace PeopleDataApi {
  export type CheckPersonLookupStatusRequest = {
    /** List of Profile IDs */
    ids?: number[];
  };

  export class CheckPersonLookupStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckPersonLookupStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CheckUniversalPersonLookupStatusRequest = {
    /** List of Profile IDs */
    ids?: number[];
  };

  export class CheckUniversalPersonLookupStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CheckUniversalPersonLookupStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreatePersonAndCompanyLookup2Request = {
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

  export const createPersonAndCompanyLookup2RequestSchema: Schema<CreatePersonAndCompanyLookup2Request> =
    s.lazySchema(() =>
      s.object<CreatePersonAndCompanyLookup2Request>({
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

  export class CreatePersonAndCompanyLookup2Error extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePersonAndCompanyLookup2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreatePersonBulkLookupRequest = {
    /** List of profile lookup queries for between 10 and 100 profiles */
    queries?: ProfileMatch[];
    /**
     * Name of a profile list to add looked up profiles to upon completion
     *
     * @default "API Bulk Lookup"
     */
    profileList?: string;
    /**
     * Webhook ID to post lookup results to upon completion. Find your webhook ID
     * [here](https://rocketreach.co/account?section=nav_gen_api).
     */
    webhookId?: number;
  };

  export class CreatePersonBulkLookupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePersonBulkLookupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreatePersonLookupRequest = {
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

  export const createPersonLookupRequestSchema: Schema<CreatePersonLookupRequest> = s.lazySchema(() =>
    s.object<CreatePersonLookupRequest>({
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

  export class CreatePersonLookupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePersonLookupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreatePersonSearchRequest = {
    /** Start index of the request results (counting from 1) @default 1 */
    start?: number;
    /** Maximum number of results to return per page [1-100] @default 10 */
    pageSize?: number;
    /** Search query object for the request */
    query?: PersonQuery1;
    /**
     * Specifies the ordering of search results. "popularity" matches the default ordering of the
     * Search web app.
     *
     * @default OrderByEnum.Relevance
     */
    orderBy?: OrderByEnum;
  };

  export const createPersonSearchRequestSchema: Schema<CreatePersonSearchRequest> = s.lazySchema(() =>
    s.object<CreatePersonSearchRequest>({
      start: s.defaulted(s.int().check(s.gte(1), s.lte(10000)), 1),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
      query: s.optional(s.lazy(() => personQuery1Schema)),
      orderBy: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
    }),
  );

  export class CreatePersonSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreatePersonSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateUniversalPersonBulkLookupRequest = {
    /** Specify the lookup criteria for up to 100 people. */
    queries?: UniversalCreditPersonLookupInput[];
    /** Add specified contacts to this profile list. @default "API Bulk Lookup" */
    profileList?: string;
    /** ID of the webhook to post lookup results upon completion. */
    webhookId?: number;
  };

  export class CreateUniversalPersonBulkLookupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUniversalPersonBulkLookupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateUniversalPersonLookupRequest = {
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
     * Whether to reveal the detailed person enrichment data for the desired profile
     *
     * @default false
     */
    revealDetailedPersonEnrichment?: boolean;
    /** Whether to reveal the healthcare enrichment data for the desired profile @default false */
    revealHealthcareEnrichment?: boolean;
    /**
     * Whether to reveal the personal email enrichment data for the desired profile
     *
     * @default false
     */
    revealPersonalEmail?: boolean;
    /** Whether to reveal the phone enrichment data for the desired profile @default false */
    revealPhone?: boolean;
    /**
     * Whether to reveal the professional email enrichment data for the desired profile
     *
     * @default false
     */
    revealProfessionalEmail?: boolean;
    /**
     * Job title of the desired profile.
     * - Example: `Product Manager`
     */
    title?: string;
    /** Your webhook's unique ID number. Find it in your API Usage & Settings page. */
    webhookId?: number;
  };

  export const createUniversalPersonLookupRequestSchema: Schema<CreateUniversalPersonLookupRequest> =
    s.lazySchema(() =>
      s.object<CreateUniversalPersonLookupRequest>({
        currentEmployer: s.optional(s.string().check(s.minLength(1))),
        email: s.optional(s.string().check(s.minLength(1), s.email())),
        id: s.optional(s.int()),
        linkedinExtUrl: s.optional(s.string().check(s.minLength(1))),
        linkedinUrl: s.optional(s.string().check(s.minLength(1))),
        metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
        name: s.optional(s.string().check(s.minLength(1))),
        npiNumber: s.optional(s.int()),
        phone: s.optional(s.string().check(s.minLength(1))),
        returnCachedEmails: s.defaulted(s.boolean(), true),
        revealDetailedPersonEnrichment: s.defaulted(s.boolean(), false),
        revealHealthcareEnrichment: s.defaulted(s.boolean(), false),
        revealPersonalEmail: s.defaulted(s.boolean(), false),
        revealPhone: s.defaulted(s.boolean(), false),
        revealProfessionalEmail: s.defaulted(s.boolean(), false),
        title: s.optional(s.string().check(s.minLength(1))),
        webhookId: s.optional(s.int()),
      }),
    );

  export class CreateUniversalPersonLookupError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUniversalPersonLookupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateUniversalPersonSearchRequest = {
    /**
     * Paginate through search results by returning results starting from this value (counting from
     * 1).
     *
     * @default 1
     */
    start?: number;
    /** Maximum number of search results to return per page. @default 100 */
    pageSize?: number;
    query?: PersonQuery;
    /**
     * Specifies the ordering of search results. "popularity" matches the default ordering of the
     * Search web app.
     *
     * * `relevance` - relevance
     * * `popularity` - popularity
     * * `score` - score
     *
     * @default OrderByEnum.Relevance
     */
    orderBy?: OrderByEnum;
  };

  export const createUniversalPersonSearchRequestSchema: Schema<CreateUniversalPersonSearchRequest> =
    s.lazySchema(() =>
      s.object<CreateUniversalPersonSearchRequest>({
        start: s.defaulted(s.int().check(s.gte(1), s.lte(10000)), 1),
        pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 100),
        query: s.optional(s.lazy(() => personQuerySchema)),
        orderBy: s.defaulted(orderByEnumSchema, OrderByEnum.Relevance),
      }),
    );

  export class CreateUniversalPersonSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateUniversalPersonSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
