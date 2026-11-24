import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentOkSchema, type AgentOk } from "../models/agent-ok.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  batchPropertyRequestInternalSchema,
  type BatchPropertyRequest,
} from "../models/batch-property-request.js";
import { ExtractUnits, extractUnitsSchema } from "../models/extract-units.js";
import { factsOkSchema, type FactsOk } from "../models/facts-ok.js";
import { jobAcceptedSchema, type JobAccepted } from "../models/job-accepted.js";
import { nearbyOkSchema, type NearbyOk } from "../models/nearby-ok.js";
import { openHousesOkSchema, type OpenHousesOk } from "../models/open-houses-ok.js";
import { photosOkSchema, type PhotosOk } from "../models/photos-ok.js";
import { priceHistoryOkSchema, type PriceHistoryOk } from "../models/price-history-ok.js";
import { propertyCachedOkSchema, type PropertyCachedOk } from "../models/property-cached-ok.js";
import { propertyOkSchema, type PropertyOk } from "../models/property-ok.js";
import { schoolsOkSchema, type SchoolsOk } from "../models/schools-ok.js";
import {
  StatusZillapiZillowPropertyDataPropertiesApi,
  statusZillapiZillowPropertyDataPropertiesApiSchema,
} from "../models/status-zillapi-zillow-property-data-properties-api.js";
import { taxHistoryOkSchema, type TaxHistoryOk } from "../models/tax-history-ok.js";
import { zestimateOkSchema, type ZestimateOk } from "../models/zestimate-ok.js";
import type { Servers } from "../servers.js";

export class Properties {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Batch property-detail job
   *
   * @remarks
   * Queue an async job that resolves up to 500 URLs and/or addresses to full property records.
   * Always async: returns a job_id — poll GET /v1/jobs/{id} or use a webhook. Billed at 1 credit
   * per record returned, settled when the job completes; failed calls are free.
   *
   * @returns Async job accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBatchPropertyJob(
    request: Properties.CreateBatchPropertyJobRequest,
    options?: RequestOptions,
  ): ApiPromise<JobAccepted, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/properties/batch"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchPropertyRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: jobAcceptedSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get listing agent and broker
   *
   * @remarks
   * Return the listing agent and broker contact details plus attribution info. Costs 1 credit per
   * successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
   *
   * @returns Listing agent + broker contact
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyAgent(
    request: Properties.GetPropertyAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/{zpid}/agent"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "zpid", value: request.zpid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Look up a property by address
   *
   * @remarks
   * Resolve a full street address (street, city, state, ZIP) to a property record via upstream
   * geocoding. Costs 3 credits per successful call because the address is resolved upstream; failed
   * calls are free.
   *
   * @returns Single property (an array of Property when extract_units is set and the URL is a
   * multi-unit building)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyByAddress(
    request: Properties.GetPropertyByAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<PropertyOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/by-address"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "address", value: request.address, schema: s.string() },
          {
            name: "status",
            value: request.status,
            schema: s.defaulted(
              statusZillapiZillowPropertyDataPropertiesApiSchema,
              StatusZillapiZillowPropertyDataPropertiesApi.ForSale,
            ),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: propertyOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Look up a property by Zillow URL
   *
   * @remarks
   * Fetch the full property record for a Zillow URL (homedetails, /b/, /community/, or
   * /apartments/). When `extract_units` is not `disabled` and the URL is a multi-unit building,
   * `data` is returned as an array of unit records. Costs 1 credit per record returned; failed
   * calls are free.
   *
   * @returns Single property (an array of Property when extract_units is set and the URL is a
   * multi-unit building)
   *
   * @throws {@link Properties.GetPropertyByUrlError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyByUrl(
    request: Properties.GetPropertyByUrlRequest,
    options?: RequestOptions,
  ): ApiPromise<PropertyOk, Properties.GetPropertyByUrlError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/by-url"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "url", value: request.url, schema: s.string() },
          {
            name: "status",
            value: request.status,
            schema: s.defaulted(
              statusZillapiZillowPropertyDataPropertiesApiSchema,
              StatusZillapiZillowPropertyDataPropertiesApi.ForSale,
            ),
          },
          {
            name: "extract_units",
            value: request.extractUnits,
            schema: s.defaulted(extractUnitsSchema, ExtractUnits.Disabled),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: propertyOkSchema },
        errorFactory: Properties.GetPropertyByUrlError,
      },
      options,
    );
  }

  /**
   * Get a property by zpid
   *
   * @remarks
   * Cache-first lookup (24h TTL) of the full property record by Zillow zpid. Costs 1 credit per
   * successful lookup; caching is a transparent optimization (faster responses, same price). Failed
   * calls are free.
   *
   * @returns Single property with cache info
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyByZpid(
    request: Properties.GetPropertyByZpidRequest,
    options?: RequestOptions,
  ): ApiPromise<PropertyCachedOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/{zpid}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "zpid", value: request.zpid, schema: s.string() }],
        query: [{ name: "fields", value: request.fields, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: propertyCachedOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get full resoFacts attributes
   *
   * @remarks
   * Return the full `resoFacts` MLS attribute set (appliances, flooring, parking, view, and
   * hundreds of other fields). Costs 1 credit per successful lookup; caching (≤24h) is a
   * transparent optimization — same price, faster responses.
   *
   * @returns Full resoFacts MLS attribute set
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyFacts(
    request: Properties.GetPropertyFactsRequest,
    options?: RequestOptions,
  ): ApiPromise<FactsOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/{zpid}/facts"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "zpid", value: request.zpid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: factsOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get comparable nearby listings
   *
   * @remarks
   * Return comparable nearby homes (top ~12 from upstream) as search-style rows. Costs 1 credit per
   * successful lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
   *
   * @returns Comparable nearby listings (search-row shape)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyNearby(
    request: Properties.GetPropertyNearbyRequest,
    options?: RequestOptions,
  ): ApiPromise<NearbyOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/{zpid}/nearby"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "zpid", value: request.zpid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: nearbyOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get open-house schedule
   *
   * @remarks
   * Return the property's open-house schedule and tour eligibility. Costs 1 credit per successful
   * lookup; caching (≤24h) is a transparent optimization — same price, faster responses.
   *
   * @returns Open-house schedule and tour eligibility
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyOpenHouses(
    request: Properties.GetPropertyOpenHousesRequest,
    options?: RequestOptions,
  ): ApiPromise<OpenHousesOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/{zpid}/open-houses"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "zpid", value: request.zpid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: openHousesOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get property photos
   *
   * @remarks
   * Return the property's photo array with multi-width JPEG/WebP sources plus counts and 3D/video
   * flags. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization —
   * same price, faster responses.
   *
   * @returns Property photos with multi-width sources and counts
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyPhotos(
    request: Properties.GetPropertyPhotosRequest,
    options?: RequestOptions,
  ): ApiPromise<PhotosOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/{zpid}/photos"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "zpid", value: request.zpid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: photosOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get property price history
   *
   * @remarks
   * Return the property's price-history events (listed, sold, and price changes). Costs 1 credit
   * per successful lookup; caching (≤24h) is a transparent optimization — same price, faster
   * responses.
   *
   * @returns Property price-history events
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyPriceHistory(
    request: Properties.GetPropertyPriceHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<PriceHistoryOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/{zpid}/price-history"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "zpid", value: request.zpid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: priceHistoryOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get assigned and nearby schools
   *
   * @remarks
   * Return schools associated with the property, including GreatSchools rating, distance, type, and
   * level. Costs 1 credit per successful lookup; caching (≤24h) is a transparent optimization —
   * same price, faster responses.
   *
   * @returns Schools associated with the property
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertySchools(
    request: Properties.GetPropertySchoolsRequest,
    options?: RequestOptions,
  ): ApiPromise<SchoolsOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/{zpid}/schools"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "zpid", value: request.zpid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: schoolsOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get property tax history
   *
   * @remarks
   * Return the property's tax-history rows (tax paid and assessed value per year). Costs 1 credit
   * per successful lookup; caching (≤24h) is a transparent optimization — same price, faster
   * responses.
   *
   * @returns Property tax-history rows
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyTaxHistory(
    request: Properties.GetPropertyTaxHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<TaxHistoryOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/{zpid}/tax-history"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "zpid", value: request.zpid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: taxHistoryOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Zestimate and rent estimate
   *
   * @remarks
   * Return the property's Zestimate, rent Zestimate, tax-assessed value, and last sold price. Costs
   * 1 credit per successful lookup; caching (≤24h) is a transparent optimization — same price,
   * faster responses.
   *
   * @returns Zestimate / rent zestimate
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPropertyZestimate(
    request: Properties.GetPropertyZestimateRequest,
    options?: RequestOptions,
  ): ApiPromise<ZestimateOk, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/properties/{zpid}/zestimate"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "zpid", value: request.zpid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: zestimateOkSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Properties {
  export type CreateBatchPropertyJobRequest = {
    body: BatchPropertyRequest;
  };

  export type GetPropertyAgentRequest = {
    /** Zillow property id (numeric string). */
    zpid: string;
  };

  export const getPropertyAgentRequestSchema: Schema<GetPropertyAgentRequest> = s.lazySchema(() =>
    s.object<GetPropertyAgentRequest>({
      zpid: s.string().check(s.pattern("^[0-9]+$")),
    }),
  );

  export type GetPropertyByAddressRequest = {
    /** Full street address including city, state, and ZIP; geocoded upstream. */
    address: string;
    /** Listing status to resolve. @default StatusZillapiZillowPropertyDataPropertiesApi.ForSale */
    status?: StatusZillapiZillowPropertyDataPropertiesApi;
    /** Comma-separated dotted-path field projection. */
    fields?: string;
  };

  export const getPropertyByAddressRequestSchema: Schema<GetPropertyByAddressRequest> = s.lazySchema(() =>
    s.object<GetPropertyByAddressRequest>({
      address: s.string().check(s.minLength(6)),
      status: s.defaulted(
        statusZillapiZillowPropertyDataPropertiesApiSchema,
        StatusZillapiZillowPropertyDataPropertiesApi.ForSale,
      ),
      fields: s.optional(s.string()),
    }),
  );

  export type GetPropertyByUrlRequest = {
    /** Full Zillow URL: homedetails, /b/, /community/, or /apartments/. */
    url: string;
    /** Listing status to resolve. @default StatusZillapiZillowPropertyDataPropertiesApi.ForSale */
    status?: StatusZillapiZillowPropertyDataPropertiesApi;
    /**
     * For building URLs, which units to extract. `disabled` returns the parent record only; any
     * other value returns an array of unit records.
     *
     * @default ExtractUnits.Disabled
     */
    extractUnits?: ExtractUnits;
    /**
     * Comma-separated dotted-path field projection, e.g.
     * `zpid,address.streetAddress,priceHistory[0].price`.
     */
    fields?: string;
  };

  export const getPropertyByUrlRequestSchema: Schema<GetPropertyByUrlRequest> = s.lazySchema(() =>
    s.object<GetPropertyByUrlRequest>({
      url: s.string().check(s.url()),
      status: s.defaulted(
        statusZillapiZillowPropertyDataPropertiesApiSchema,
        StatusZillapiZillowPropertyDataPropertiesApi.ForSale,
      ),
      extractUnits: s.defaulted(extractUnitsSchema, ExtractUnits.Disabled),
      fields: s.optional(s.string()),
    }),
  );

  export class GetPropertyByUrlError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Declared<"apiErrorModel5", ApiErrorModel>
      | Declared<"apiErrorModel6", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPropertyByUrlError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 429, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 502, kind: "apiErrorModel5", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 504, kind: "apiErrorModel6", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type GetPropertyByZpidRequest = {
    /** Zillow property id (numeric string). */
    zpid: string;
    /** Comma-separated dotted-path field projection. */
    fields?: string;
  };

  export const getPropertyByZpidRequestSchema: Schema<GetPropertyByZpidRequest> = s.lazySchema(() =>
    s.object<GetPropertyByZpidRequest>({
      zpid: s.string().check(s.pattern("^[0-9]+$")),
      fields: s.optional(s.string()),
    }),
  );

  export type GetPropertyFactsRequest = {
    /** Zillow property id (numeric string). */
    zpid: string;
  };

  export const getPropertyFactsRequestSchema: Schema<GetPropertyFactsRequest> = s.lazySchema(() =>
    s.object<GetPropertyFactsRequest>({
      zpid: s.string().check(s.pattern("^[0-9]+$")),
    }),
  );

  export type GetPropertyNearbyRequest = {
    /** Zillow property id (numeric string). */
    zpid: string;
  };

  export const getPropertyNearbyRequestSchema: Schema<GetPropertyNearbyRequest> = s.lazySchema(() =>
    s.object<GetPropertyNearbyRequest>({
      zpid: s.string().check(s.pattern("^[0-9]+$")),
    }),
  );

  export type GetPropertyOpenHousesRequest = {
    /** Zillow property id (numeric string). */
    zpid: string;
  };

  export const getPropertyOpenHousesRequestSchema: Schema<GetPropertyOpenHousesRequest> = s.lazySchema(() =>
    s.object<GetPropertyOpenHousesRequest>({
      zpid: s.string().check(s.pattern("^[0-9]+$")),
    }),
  );

  export type GetPropertyPhotosRequest = {
    /** Zillow property id (numeric string). */
    zpid: string;
  };

  export const getPropertyPhotosRequestSchema: Schema<GetPropertyPhotosRequest> = s.lazySchema(() =>
    s.object<GetPropertyPhotosRequest>({
      zpid: s.string().check(s.pattern("^[0-9]+$")),
    }),
  );

  export type GetPropertyPriceHistoryRequest = {
    /** Zillow property id (numeric string). */
    zpid: string;
  };

  export const getPropertyPriceHistoryRequestSchema: Schema<GetPropertyPriceHistoryRequest> = s.lazySchema(
    () =>
      s.object<GetPropertyPriceHistoryRequest>({
        zpid: s.string().check(s.pattern("^[0-9]+$")),
      }),
  );

  export type GetPropertySchoolsRequest = {
    /** Zillow property id (numeric string). */
    zpid: string;
  };

  export const getPropertySchoolsRequestSchema: Schema<GetPropertySchoolsRequest> = s.lazySchema(() =>
    s.object<GetPropertySchoolsRequest>({
      zpid: s.string().check(s.pattern("^[0-9]+$")),
    }),
  );

  export type GetPropertyTaxHistoryRequest = {
    /** Zillow property id (numeric string). */
    zpid: string;
  };

  export const getPropertyTaxHistoryRequestSchema: Schema<GetPropertyTaxHistoryRequest> = s.lazySchema(() =>
    s.object<GetPropertyTaxHistoryRequest>({
      zpid: s.string().check(s.pattern("^[0-9]+$")),
    }),
  );

  export type GetPropertyZestimateRequest = {
    /** Zillow property id (numeric string). */
    zpid: string;
  };

  export const getPropertyZestimateRequestSchema: Schema<GetPropertyZestimateRequest> = s.lazySchema(() =>
    s.object<GetPropertyZestimateRequest>({
      zpid: s.string().check(s.pattern("^[0-9]+$")),
    }),
  );
}
