import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  errorContentstackPersonalizeManagementAttributesApiSchema,
  type ErrorContentstackPersonalizeManagementAttributesApi,
} from "../models/error-contentstack-personalize-management-attributes-api.js";
import { geoListSchema, type GeoList } from "../models/geo-list.js";
import type { Servers } from "../servers.js";

/**
 * Geolocation endpoints provide geographic datasets including regions, countries, and cities for
 * location-based audience targeting.
 */
export class Geolocation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get geolocation cities
   *
   * @remarks
   * Retrieves the list of cities available for location-based audience targeting rules.
   *
   * @returns A list of cities.
   *
   * @throws {@link Geolocation.GetGeoCitiesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGeoCities(
    request: Geolocation.GetGeoCitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<GeoList, Geolocation.GetGeoCitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate:
          this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/geolocation/cities"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "x-project-uid", value: request.xProjectUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geoListSchema },
        errorFactory: Geolocation.GetGeoCitiesError,
      },
      options,
    );
  }

  /**
   * Get geolocation countries
   *
   * @remarks
   * Retrieves the list of countries available for location-based audience targeting rules.
   *
   * @returns A list of countries.
   *
   * @throws {@link Geolocation.GetGeoCountriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGeoCountries(
    request: Geolocation.GetGeoCountriesRequest,
    options?: RequestOptions,
  ): ApiPromise<GeoList, Geolocation.GetGeoCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate:
          this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/geolocation/countries"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "x-project-uid", value: request.xProjectUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geoListSchema },
        errorFactory: Geolocation.GetGeoCountriesError,
      },
      options,
    );
  }

  /**
   * Get geolocation regions
   *
   * @remarks
   * Retrieves the list of geographic regions available for location-based audience targeting rules.
   *
   * @returns A list of geographic regions.
   *
   * @throws {@link Geolocation.GetGeoRegionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGeoRegions(
    request: Geolocation.GetGeoRegionsRequest,
    options?: RequestOptions,
  ): ApiPromise<GeoList, Geolocation.GetGeoRegionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate:
          this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/geolocation/regions"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "x-project-uid", value: request.xProjectUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geoListSchema },
        errorFactory: Geolocation.GetGeoRegionsError,
      },
      options,
    );
  }
}

export namespace Geolocation {
  export type GetGeoCitiesRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class GetGeoCitiesError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGeoCitiesError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type GetGeoCountriesRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class GetGeoCountriesError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGeoCountriesError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type GetGeoRegionsRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class GetGeoRegionsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGeoRegionsError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }
}
