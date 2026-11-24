import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2NumbersCountriesCitiesDidsResponseSchema,
  type ApiV2NumbersCountriesCitiesDidsResponse,
} from "../models/api-v2-numbers-countries-cities-dids-response.js";
import {
  apiV2NumbersCountriesCitiesDids401Error1Schema,
  type ApiV2NumbersCountriesCitiesDids401Error1,
} from "../models/api-v2-numbers-countries-cities-dids401-error1.js";
import {
  apiV2NumbersCountriesCitiesDids403Error1Schema,
  type ApiV2NumbersCountriesCitiesDids403Error1,
} from "../models/api-v2-numbers-countries-cities-dids403-error1.js";
import {
  apiV2NumbersCountriesCitiesDids404Error1Schema,
  type ApiV2NumbersCountriesCitiesDids404Error1,
} from "../models/api-v2-numbers-countries-cities-dids404-error1.js";
import {
  apiV2NumbersCountriesCitiesResponseInternalSchema,
  type ApiV2NumbersCountriesCitiesResponse,
} from "../models/api-v2-numbers-countries-cities-response.js";
import {
  apiV2NumbersCountriesCities401Error1Schema,
  type ApiV2NumbersCountriesCities401Error1,
} from "../models/api-v2-numbers-countries-cities401-error1.js";
import {
  apiV2NumbersCountriesCities403Error1Schema,
  type ApiV2NumbersCountriesCities403Error1,
} from "../models/api-v2-numbers-countries-cities403-error1.js";
import {
  apiV2NumbersCountriesCities404Error1Schema,
  type ApiV2NumbersCountriesCities404Error1,
} from "../models/api-v2-numbers-countries-cities404-error1.js";
import {
  apiV2NumbersCountriesLocationsResponseSchema,
  type ApiV2NumbersCountriesLocationsResponse,
} from "../models/api-v2-numbers-countries-locations-response.js";
import {
  apiV2NumbersCountriesLocations401Error1Schema,
  type ApiV2NumbersCountriesLocations401Error1,
} from "../models/api-v2-numbers-countries-locations401-error1.js";
import {
  apiV2NumbersCountriesLocations403Error1Schema,
  type ApiV2NumbersCountriesLocations403Error1,
} from "../models/api-v2-numbers-countries-locations403-error1.js";
import {
  apiV2NumbersCountriesLocations404Error1Schema,
  type ApiV2NumbersCountriesLocations404Error1,
} from "../models/api-v2-numbers-countries-locations404-error1.js";
import {
  apiV2NumbersCountriesRegionsResponseSchema,
  type ApiV2NumbersCountriesRegionsResponse,
} from "../models/api-v2-numbers-countries-regions-response.js";
import {
  apiV2NumbersCountriesRegions401Error1Schema,
  type ApiV2NumbersCountriesRegions401Error1,
} from "../models/api-v2-numbers-countries-regions401-error1.js";
import {
  apiV2NumbersCountriesRegions403Error1Schema,
  type ApiV2NumbersCountriesRegions403Error1,
} from "../models/api-v2-numbers-countries-regions403-error1.js";
import {
  apiV2NumbersCountriesRegions404Error1Schema,
  type ApiV2NumbersCountriesRegions404Error1,
} from "../models/api-v2-numbers-countries-regions404-error1.js";
import {
  apiV2NumbersCountriesResponseSchema,
  type ApiV2NumbersCountriesResponse,
} from "../models/api-v2-numbers-countries-response.js";
import {
  apiV2NumbersCountries401Error1Schema,
  type ApiV2NumbersCountries401Error1,
} from "../models/api-v2-numbers-countries401-error1.js";
import {
  apiV2NumbersCountries403Error1Schema,
  type ApiV2NumbersCountries403Error1,
} from "../models/api-v2-numbers-countries403-error1.js";
import {
  apiV2NumbersPurchaseRequestSchema,
  type ApiV2NumbersPurchaseRequest,
} from "../models/api-v2-numbers-purchase-request.js";
import {
  apiV2NumbersPurchaseRequest1Schema,
  type ApiV2NumbersPurchaseRequest1,
} from "../models/api-v2-numbers-purchase-request1.js";
import {
  apiV2NumbersPurchaseResponseSchema,
  type ApiV2NumbersPurchaseResponse,
} from "../models/api-v2-numbers-purchase-response.js";
import {
  apiV2NumbersPurchaseResponse2Schema,
  type ApiV2NumbersPurchaseResponse2,
} from "../models/api-v2-numbers-purchase-response2.js";
import {
  apiV2NumbersPurchaseResponse3Schema,
  type ApiV2NumbersPurchaseResponse3,
} from "../models/api-v2-numbers-purchase-response3.js";
import {
  apiV2NumbersPurchase400Error1Schema,
  type ApiV2NumbersPurchase400Error1,
} from "../models/api-v2-numbers-purchase400-error1.js";
import {
  apiV2NumbersPurchase401Error1Schema,
  type ApiV2NumbersPurchase401Error1,
} from "../models/api-v2-numbers-purchase401-error1.js";
import {
  apiV2NumbersPurchase403Error1Schema,
  type ApiV2NumbersPurchase403Error1,
} from "../models/api-v2-numbers-purchase403-error1.js";
import { apiV2NumbersResponseSchema, type ApiV2NumbersResponse } from "../models/api-v2-numbers-response.js";
import {
  apiV2NumbersSearchResponseSchema,
  type ApiV2NumbersSearchResponse,
} from "../models/api-v2-numbers-search-response.js";
import {
  apiV2NumbersSearch401Error1Schema,
  type ApiV2NumbersSearch401Error1,
} from "../models/api-v2-numbers-search401-error1.js";
import {
  apiV2NumbersSearch403Error1Schema,
  type ApiV2NumbersSearch403Error1,
} from "../models/api-v2-numbers-search403-error1.js";
import {
  apiV2Numbers401Error1Schema,
  type ApiV2Numbers401Error1,
} from "../models/api-v2-numbers401-error1.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  apiV2NumbersPurchaseResponse11Schema,
  type ApiV2NumbersPurchaseResponse11,
} from "../models/unions/api-v2-numbers-purchase-response11.js";
import type { Servers } from "../servers.js";

export class NumbersInventory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List numbers by city
   *
   * @remarks
   * Retrieve paginated list of available DID numbers in a specific city.
   *
   * **Important notes:**
   * - For countries without regions (UK, Netherlands, etc.)
   * - Results are paginated (default 25 per page)
   * - Includes full pricing and feature details for each number
   * - Use for countries where regions are not applicable
   *
   * **When to use:**
   * - Displaying available numbers after city selection
   * - Browsing DID inventory by location
   * - Non-US/Canada purchase flows
   *
   * `dids.dids[].id` feeds numbers_purchase_create (`id_in`). `dids.dids[].number` feeds
   * numbers_purchase_create (`did_numbers`). See also: numbers_search_show.
   *
   * @returns returns list of available dids
   *
   * @throws {@link NumbersInventory.NumbersCountriesCitiesDidsIndexError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersCountriesCitiesDidsIndex(
    request: NumbersInventory.NumbersCountriesCitiesDidsIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV2NumbersCountriesCitiesDidsResponse,
    NumbersInventory.NumbersCountriesCitiesDidsIndexError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/numbers/countries/{country_id}/cities/{city_id}/dids"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "country_id", value: request.countryId, schema: s.int() },
          { name: "city_id", value: request.cityId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2NumbersCountriesCitiesDidsResponseSchema },
        errorFactory: NumbersInventory.NumbersCountriesCitiesDidsIndexError,
      },
      options,
    );
  }

  /**
   * List cities
   *
   * @remarks
   * Retrieve a list of cities within a country where DID numbers are available.
   *
   * **Important notes:**
   * - For a country with `has_provinces_or_states`, numbers_search_show narrows to one state by its
   *   `region_id` from numbers_countries_regions_index
   * - Each city includes count of available DIDs
   * - Cities are returned with area codes
   *
   * **When to use:**
   * - Building city selection for countries without states
   * - Checking DID availability by city
   * - Displaying available locations to users
   *
   * `cities[].id` feeds numbers_countries_cities_dids_index and numbers_search_show (`city_id`).
   *
   * @returns returns list of cities
   *
   * @throws {@link NumbersInventory.NumbersCountriesCitiesIndexError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersCountriesCitiesIndex(
    request: NumbersInventory.NumbersCountriesCitiesIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersCountriesCitiesResponse, NumbersInventory.NumbersCountriesCitiesIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/numbers/countries/{country_id}/cities"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "country_id", value: request.countryId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2NumbersCountriesCitiesResponseInternalSchema },
        errorFactory: NumbersInventory.NumbersCountriesCitiesIndexError,
      },
      options,
    );
  }

  /**
   * List countries
   *
   * @remarks
   * Retrieve a list of all countries where DID numbers are available.
   *
   * **When to use:**
   * - Building country selection interface
   * - Checking number availability by country
   * - Starting the DID purchase flow
   *
   * `countries[].id` feeds numbers_countries_cities_index, numbers_countries_regions_index,
   * numbers_countries_locations_index and numbers_countries_cities_dids_index (`country_id`).
   * `countries[].name` feeds numbers_search_show (`country_name_contains`). A country with
   * `has_provinces_or_states` true lists its states in numbers_countries_regions_index.
   *
   * @returns returns list of available countries
   *
   * @throws {@link NumbersInventory.NumbersCountriesIndexError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersCountriesIndex(
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersCountriesResponse, NumbersInventory.NumbersCountriesIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/numbers/countries"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2NumbersCountriesResponseSchema },
        errorFactory: NumbersInventory.NumbersCountriesIndexError,
      },
      options,
    );
  }

  /**
   * Search locations by prefix
   *
   * @remarks
   * Search for locations (cities) that have DID numbers starting with a specific prefix.
   *
   * **Important notes:**
   * - Useful for finding locations with specific area codes
   * - Prefix can be partial number (e.g., "212" for NYC area code)
   * - Returns combined location information (country, state, city)
   *
   * **When to use:**
   * - Implementing "vanity number" search by prefix
   * - Finding locations with specific area codes
   * - Reverse lookup of number to location
   *
   * `locations[].city_id` feeds numbers_countries_cities_dids_index and numbers_search_show
   * (`city_id`). `locations[].state_id` feeds numbers_search_show (`region_id`).
   *
   * @returns returns list of locations
   *
   * @throws {@link NumbersInventory.NumbersCountriesLocationsIndexError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersCountriesLocationsIndex(
    request: NumbersInventory.NumbersCountriesLocationsIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV2NumbersCountriesLocationsResponse,
    NumbersInventory.NumbersCountriesLocationsIndexError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/numbers/countries/{country_id}/locations"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "country_id", value: request.countryId, schema: s.int() }],
        query: [
          { name: "prefix", value: request.prefix, schema: s.int() },
          { name: "sms_enabled", value: request.smsEnabled, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2NumbersCountriesLocationsResponseSchema },
        errorFactory: NumbersInventory.NumbersCountriesLocationsIndexError,
      },
      options,
    );
  }

  /**
   * List NANP regions
   *
   * @remarks
   * Retrieve a list of states or provinces within a country (e.g., US states, Canadian provinces).
   *
   * **Important notes:**
   * - Only applicable for countries with `has_provinces_or_states: true`
   * - Returns 404 for countries without regional divisions
   * - A state's numbers are listed by numbers_search_show with the state's `region_id`
   *
   * **When to use:**
   * - Building state/province selection for US, Canada, etc.
   * - Filtering DID search by region
   *
   * `regions[].id` feeds numbers_search_show (`region_id`). `regions[].name` feeds
   * numbers_search_show (`state_name_contains`, United States only).
   *
   * @returns returns list of regions
   *
   * @throws {@link NumbersInventory.NumbersCountriesRegionsIndexError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersCountriesRegionsIndex(
    request: NumbersInventory.NumbersCountriesRegionsIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersCountriesRegionsResponse, NumbersInventory.NumbersCountriesRegionsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/numbers/countries/{country_id}/regions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "country_id", value: request.countryId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2NumbersCountriesRegionsResponseSchema },
        errorFactory: NumbersInventory.NumbersCountriesRegionsIndexError,
      },
      options,
    );
  }

  /**
   * List purchased numbers
   *
   * @remarks
   * Retrieve a list of DID numbers purchased by the authenticated user.
   *
   * **Important notes:**
   * - Returns only active numbers by default
   * - Use `show_all=true` to include numbers pending document approval
   * - Includes service information (SMS, etc.)
   * - Shows current status of each number
   *
   * **When to use:**
   * - Displaying user's number inventory
   * - Checking number status
   * - Listing numbers for configuration
   * - Dashboard display
   *
   * `dids[].id` feeds numbers_purchase_update and numbers_purchase_destroy (`id`, `id_in[]`).
   * `dids[].number` feeds numbers_purchase_destroy (`did_numbers[]`). `dids[].id` feeds
   * purchases_destinations_index, purchases_destinations_create, purchases_destinations_update and
   * purchases_destinations_destroy (`purchase_id`, which takes the number too).
   * `dids[].identity_id` feeds identities_index and numbers_purchase_update (`ids`, `identity_id`).
   * See also: purchases_index.
   *
   * @returns returns DIDs
   *
   * @throws {@link NumbersInventory.NumbersIndexError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersIndex(
    request: NumbersInventory.NumbersIndexRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersResponse, NumbersInventory.NumbersIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/numbers"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "show_all", value: request.showAll, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2NumbersResponseSchema },
        errorFactory: NumbersInventory.NumbersIndexError,
      },
      options,
    );
  }

  /**
   * Purchase numbers
   *
   * @remarks
   * Purchase one or more DID numbers with identity document association.
   *
   * **Important notes:**
   * - Can purchase multiple numbers in a single request
   * - Identities must contain required documents for the number's country
   *
   * **When to use:**
   * - Purchasing numbers with document verification
   * - Bulk number purchase with identity association
   *
   * `purchase.purchases[].id` feeds numbers_purchase_update and numbers_purchase_destroy (`id`,
   * `id_in[]`). `purchase.purchases[].id` feeds purchases_destinations_index and
   * purchases_destinations_create (`purchase_id`). `purchase.purchases[].number` feeds
   * numbers_purchase_destroy (`did_numbers[]`). See also: numbers_index.
   *
   * @returns purchase DIDs and link documents attached to identity
   *
   * @throws {@link NumbersInventory.NumbersPurchaseCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersPurchaseCreate(
    request: NumbersInventory.NumbersPurchaseCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersPurchaseResponse, NumbersInventory.NumbersPurchaseCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/numbers/purchase"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV2NumbersPurchaseRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV2NumbersPurchaseResponseSchema },
        errorFactory: NumbersInventory.NumbersPurchaseCreateError,
      },
      options,
    );
  }

  /**
   * Delete purchased numbers
   *
   * @remarks
   * Cancel purchase of DID numbers and return them to inventory.
   *
   * **Important notes:**
   * - Can cancel multiple numbers in a single request
   * - Numbers are returned to seller's inventory
   * - Optional quarantine period before number becomes available again
   * - Refund policy depends on service terms
   * - A number still inside its commitment term is charged the early-return fee for the remaining
   *   months, the same fee as in the portal
   *
   * **When to use:**
   * - User wants to cancel number purchase
   * - Returning numbers after unsuccessful activation
   * - Bulk number release
   *
   * **Partial cancellation:** Numbers not present in your cancelable inventory are skipped (not
   * cancelled) and reported in the `warnings` array with code `not_in_inventory`. If none of the
   * requested numbers are cancelable, the request returns `422`.
   *
   * A number that is cancelable but whose cancellation fails is reported with code
   * `cancellation_failed` and is omitted from `dids`; it remains in your inventory and is still
   * billable. A request where every number fails this way returns `200` with an empty `dids` array.
   *
   * A number whose early-return fee your balance does not cover is not cancelled and not charged.
   * It is reported with code `insufficient_funds`, is omitted from `dids`, and remains in your
   * inventory.
   *
   * @returns cancels owned numbers and reports skipped ones as warnings
   *
   * @throws {@link NumbersInventory.NumbersPurchaseDestroyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersPurchaseDestroy(
    request: NumbersInventory.NumbersPurchaseDestroyRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersPurchaseResponse3, NumbersInventory.NumbersPurchaseDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/numbers/purchase"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id_in[]", value: request.idIn, schema: s.optional(s.array(s.int())) },
          { name: "did_numbers[]", value: request.didNumbers, schema: s.optional(s.array(s.string())) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2NumbersPurchaseResponse3Schema },
        errorFactory: NumbersInventory.NumbersPurchaseDestroyError,
      },
      options,
    );
  }

  /**
   * Update purchased number settings
   *
   * @remarks
   * Update a purchased DID number's identity association or call recording setting.
   *
   * **Important notes:**
   * - New identity must contain required documents for the number
   * - `call_recording_enabled` requires the account-level "Allow call recording" setting to be on;
   *   returns 422 otherwise
   *
   * **Other normalizations applied silently on number purchase/update:**
   * - Webphone destinations (`transport=10`) are resolved server-side.
   * - Boolean-like fields are coerced to booleans.
   * - Destination strings are normalized.
   * - SMS delivery-receipt (`dlr`) and Sender-ID settings follow account defaults when omitted.
   *
   * @returns updates purchased number
   *
   * @throws {@link NumbersInventory.NumbersPurchaseUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersPurchaseUpdate(
    request: NumbersInventory.NumbersPurchaseUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersPurchaseResponse2, NumbersInventory.NumbersPurchaseUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/numbers/purchase"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV2NumbersPurchaseRequest1Schema },
      },
      {
        success: { kind: "json", schema: apiV2NumbersPurchaseResponse2Schema },
        errorFactory: NumbersInventory.NumbersPurchaseUpdateError,
      },
      options,
    );
  }

  /**
   * Search numbers (advanced)
   *
   * @remarks
   * Advanced search for available DID numbers with multiple filter criteria.
   *
   * **Important notes:**
   * - Supports pagination (page, per_page parameters)
   * - All filter parameters are optional
   * - Combine multiple filters for precise results
   * - Use for complex search scenarios beyond location-based browsing
   *
   * **When to use:**
   * - Implementing vanity number search
   * - Finding numbers with specific features
   * - Custom number selection interfaces
   * - Bulk number lookup
   *
   * `dids.dids[].id` feeds numbers_purchase_create (`id_in`). `dids.dids[].number` feeds
   * numbers_purchase_create (`did_numbers`). See also: numbers_countries_cities_dids_index.
   *
   * @returns returns search results
   *
   * @throws {@link NumbersInventory.NumbersSearchShowError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  numbersSearchShow(
    request: NumbersInventory.NumbersSearchShowRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2NumbersSearchResponse, NumbersInventory.NumbersSearchShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/numbers/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id_in", value: request.idIn, schema: s.optional(s.int()) },
          { name: "number_in", value: request.numberIn, schema: s.optional(s.string()) },
          { name: "number_contains", value: request.numberContains, schema: s.optional(s.int()) },
          { name: "begins_with", value: request.beginsWith, schema: s.optional(s.int()) },
          { name: "ends_with", value: request.endsWith, schema: s.optional(s.int()) },
          { name: "city_name_contains", value: request.cityNameContains, schema: s.optional(s.string()) },
          {
            name: "country_name_contains",
            value: request.countryNameContains,
            schema: s.optional(s.string()),
          },
          { name: "state_name_contains", value: request.stateNameContains, schema: s.optional(s.string()) },
          { name: "sms_enabled", value: request.smsEnabled, schema: s.optional(s.string()) },
          { name: "no_local_cli", value: request.noLocalCli, schema: s.optional(s.string()) },
          { name: "vendor_id", value: request.vendorId, schema: s.optional(s.int()) },
          { name: "city_id", value: request.cityId, schema: s.optional(s.int()) },
          { name: "region_id", value: request.regionId, schema: s.optional(s.int()) },
          { name: "require_docs", value: request.requireDocs, schema: s.optional(s.int()) },
          { name: "commitment_months", value: request.commitmentMonths, schema: s.optional(s.int()) },
          { name: "cheap_sorting", value: request.cheapSorting, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 25) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2NumbersSearchResponseSchema },
        errorFactory: NumbersInventory.NumbersSearchShowError,
      },
      options,
    );
  }
}

export namespace NumbersInventory {
  export type NumbersCountriesCitiesDidsIndexRequest = {
    /** Country id from numbers_countries_index */
    countryId: number;
    /** City id from numbers_countries_cities_index, numbers_countries_locations_index */
    cityId: number;
  };

  export class NumbersCountriesCitiesDidsIndexError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersCountriesCitiesDids401Error1", ApiV2NumbersCountriesCitiesDids401Error1>
      | Declared<"apiV2NumbersCountriesCitiesDids403Error1", ApiV2NumbersCountriesCitiesDids403Error1>
      | Declared<"apiV2NumbersCountriesCitiesDids404Error1", ApiV2NumbersCountriesCitiesDids404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersCountriesCitiesDidsIndexError> = [
      {
        on: 401,
        kind: "apiV2NumbersCountriesCitiesDids401Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesCitiesDids401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2NumbersCountriesCitiesDids403Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesCitiesDids403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV2NumbersCountriesCitiesDids404Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesCitiesDids404Error1Schema },
      },
    ];
  }

  export type NumbersCountriesCitiesIndexRequest = {
    /** Country id from numbers_countries_index */
    countryId: number;
  };

  export class NumbersCountriesCitiesIndexError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersCountriesCities401Error1", ApiV2NumbersCountriesCities401Error1>
      | Declared<"apiV2NumbersCountriesCities403Error1", ApiV2NumbersCountriesCities403Error1>
      | Declared<"apiV2NumbersCountriesCities404Error1", ApiV2NumbersCountriesCities404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersCountriesCitiesIndexError> = [
      {
        on: 401,
        kind: "apiV2NumbersCountriesCities401Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesCities401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2NumbersCountriesCities403Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesCities403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV2NumbersCountriesCities404Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesCities404Error1Schema },
      },
    ];
  }

  export class NumbersCountriesIndexError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersCountries401Error1", ApiV2NumbersCountries401Error1>
      | Declared<"apiV2NumbersCountries403Error1", ApiV2NumbersCountries403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersCountriesIndexError> = [
      {
        on: 401,
        kind: "apiV2NumbersCountries401Error1",
        decode: { kind: "json", schema: apiV2NumbersCountries401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2NumbersCountries403Error1",
        decode: { kind: "json", schema: apiV2NumbersCountries403Error1Schema },
      },
    ];
  }

  export type NumbersCountriesLocationsIndexRequest = {
    /** Country id from numbers_countries_index */
    countryId: number;
    /** Number prefix to search for */
    prefix: number;
    /** Filter locations by SMS capability */
    smsEnabled?: string;
  };

  export class NumbersCountriesLocationsIndexError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersCountriesLocations401Error1", ApiV2NumbersCountriesLocations401Error1>
      | Declared<"apiV2NumbersCountriesLocations403Error1", ApiV2NumbersCountriesLocations403Error1>
      | Declared<"apiV2NumbersCountriesLocations404Error1", ApiV2NumbersCountriesLocations404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersCountriesLocationsIndexError> = [
      {
        on: 401,
        kind: "apiV2NumbersCountriesLocations401Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesLocations401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2NumbersCountriesLocations403Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesLocations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV2NumbersCountriesLocations404Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesLocations404Error1Schema },
      },
    ];
  }

  export type NumbersCountriesRegionsIndexRequest = {
    /** Country id from numbers_countries_index */
    countryId: number;
  };

  export class NumbersCountriesRegionsIndexError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersCountriesRegions401Error1", ApiV2NumbersCountriesRegions401Error1>
      | Declared<"apiV2NumbersCountriesRegions403Error1", ApiV2NumbersCountriesRegions403Error1>
      | Declared<"apiV2NumbersCountriesRegions404Error1", ApiV2NumbersCountriesRegions404Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersCountriesRegionsIndexError> = [
      {
        on: 401,
        kind: "apiV2NumbersCountriesRegions401Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesRegions401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2NumbersCountriesRegions403Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesRegions403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV2NumbersCountriesRegions404Error1",
        decode: { kind: "json", schema: apiV2NumbersCountriesRegions404Error1Schema },
      },
    ];
  }

  export type NumbersIndexRequest = {
    /** Include numbers pending documentation approval */
    showAll?: string;
  };

  export class NumbersIndexError extends ApiError {
    declare readonly payload: Declared<"apiV2Numbers401Error1", ApiV2Numbers401Error1> | Undeclared;

    static readonly errors: ErrorDecoders<NumbersIndexError> = [
      {
        on: 401,
        kind: "apiV2Numbers401Error1",
        decode: { kind: "json", schema: apiV2Numbers401Error1Schema },
      },
    ];
  }

  export type NumbersPurchaseCreateRequest = {
    body: ApiV2NumbersPurchaseRequest;
  };

  export class NumbersPurchaseCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersPurchase400Error1", ApiV2NumbersPurchase400Error1>
      | Declared<"apiV2NumbersPurchase401Error1", ApiV2NumbersPurchase401Error1>
      | Declared<"apiV2NumbersPurchaseResponse11", ApiV2NumbersPurchaseResponse11>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersPurchaseCreateError> = [
      {
        on: 400,
        kind: "apiV2NumbersPurchase400Error1",
        decode: { kind: "json", schema: apiV2NumbersPurchase400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV2NumbersPurchase401Error1",
        decode: { kind: "json", schema: apiV2NumbersPurchase401Error1Schema },
      },
      {
        on: 422,
        kind: "apiV2NumbersPurchaseResponse11",
        decode: { kind: "json", schema: apiV2NumbersPurchaseResponse11Schema },
      },
    ];
  }

  export type NumbersPurchaseDestroyRequest = {
    /** Array of DID IDs to cancel, from numbers_index */
    idIn?: number[];
    /** Array of DID numbers to cancel, from numbers_index, purchases_index */
    didNumbers?: string[];
  };

  export class NumbersPurchaseDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersPurchase401Error1", ApiV2NumbersPurchase401Error1>
      | Declared<"apiV2NumbersPurchase403Error1", ApiV2NumbersPurchase403Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersPurchaseDestroyError> = [
      {
        on: 401,
        kind: "apiV2NumbersPurchase401Error1",
        decode: { kind: "json", schema: apiV2NumbersPurchase401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2NumbersPurchase403Error1",
        decode: { kind: "json", schema: apiV2NumbersPurchase403Error1Schema },
      },
      { on: 422, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NumbersPurchaseUpdateRequest = {
    body: ApiV2NumbersPurchaseRequest1;
  };

  export class NumbersPurchaseUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersPurchase401Error1", ApiV2NumbersPurchase401Error1>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersPurchaseUpdateError> = [
      {
        on: 401,
        kind: "apiV2NumbersPurchase401Error1",
        decode: { kind: "json", schema: apiV2NumbersPurchase401Error1Schema },
      },
      { on: 422, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type NumbersSearchShowRequest = {
    /** Search for specific DID IDs (comma-separated) */
    idIn?: number;
    /** Search for specific numbers (exact match, comma-separated) */
    numberIn?: string;
    /** Search for numbers containing this pattern */
    numberContains?: number;
    /** Search for numbers beginning with this pattern */
    beginsWith?: number;
    /** Search for numbers ending with this pattern */
    endsWith?: number;
    /** Filter by city name (partial match) */
    cityNameContains?: string;
    /** Filter by country name (partial match), from numbers_countries_index */
    countryNameContains?: string;
    /**
     * Filter by state/region name (partial match, US only), from numbers_countries_regions_index
     */
    stateNameContains?: string;
    /** Filter by SMS capability (true/false) */
    smsEnabled?: string;
    /** Filter by local caller ID capability (true/false) */
    noLocalCli?: string;
    /** Filter by vendor ID (requires special permission) */
    vendorId?: number;
    /** City id from numbers_countries_cities_index, numbers_countries_locations_index */
    cityId?: number;
    /** Region id from numbers_countries_regions_index, numbers_countries_locations_index */
    regionId?: number;
    /** Filter by document requirements */
    requireDocs?: number;
    /** Filter by commitment period in months */
    commitmentMonths?: number;
    /** Sort by price (activation + monthly fee) ascending */
    cheapSorting?: string;
    /** Page number for pagination @default 1 */
    page?: number;
    /** Number of items per page @default 25 */
    perPage?: number;
  };

  export const numbersSearchShowRequestSchema: Schema<NumbersSearchShowRequest> = s.lazySchema(() =>
    s.object<NumbersSearchShowRequest>({
      idIn: s.optional(s.int()),
      numberIn: s.optional(s.string()),
      numberContains: s.optional(s.int()),
      beginsWith: s.optional(s.int()),
      endsWith: s.optional(s.int()),
      cityNameContains: s.optional(s.string()),
      countryNameContains: s.optional(s.string()),
      stateNameContains: s.optional(s.string()),
      smsEnabled: s.optional(s.string()),
      noLocalCli: s.optional(s.string()),
      vendorId: s.optional(s.int()),
      cityId: s.optional(s.int()),
      regionId: s.optional(s.int()),
      requireDocs: s.optional(s.int()),
      commitmentMonths: s.optional(s.int()),
      cheapSorting: s.optional(s.string()),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      perPage: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
    }),
  );

  export class NumbersSearchShowError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2NumbersSearch401Error1", ApiV2NumbersSearch401Error1>
      | Declared<"apiV2NumbersSearch403Error1", ApiV2NumbersSearch403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<NumbersSearchShowError> = [
      {
        on: 401,
        kind: "apiV2NumbersSearch401Error1",
        decode: { kind: "json", schema: apiV2NumbersSearch401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV2NumbersSearch403Error1",
        decode: { kind: "json", schema: apiV2NumbersSearch403Error1Schema },
      },
    ];
  }
}
