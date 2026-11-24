import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { locationListSchema, type LocationList } from "../models/location-list.js";
import { locationRefreshSchema, type LocationRefresh } from "../models/location-refresh.js";
import { locationSchema, type Location } from "../models/location.js";
import type { Servers } from "../servers.js";

/**
 * The places, apps, shops and listings that receive reviews.
 */
export class LocationsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a location
   *
   * @remarks
   * One location by ID, disconnected ones included until their data is deleted.
   *
   * @returns The location.
   *
   * @throws {@link LocationsApi.GetLocationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLocation(
    request: LocationsApi.GetLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<Location, LocationsApi.GetLocationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/locations/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: locationSchema },
        errorFactory: LocationsApi.GetLocationError,
      },
      options,
    );
  }

  /**
   * List locations
   *
   * @remarks
   * Every location of your workspace in the mode of your key, oldest first, without disconnected
   * ones. Not paginated: `next_cursor` is always `null`.
   *
   * @returns All locations.
   *
   * @throws {@link LocationsApi.ListLocationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLocations(options?: RequestOptions): ApiPromise<LocationList, LocationsApi.ListLocationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/locations"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: locationListSchema },
        errorFactory: LocationsApi.ListLocationsError,
      },
      options,
    );
  }

  /**
   * Refresh a location
   *
   * @remarks
   * Checks one location for new reviews now instead of waiting for its next scheduled check
   * ("Refresh now"). From the Beam plan; at most once every 15 minutes per location. New reviews
   * arrive as usual, in `GET /v1/reviews` and as `review.created` webhooks.
   *
   * @returns Check queued. The body is the location plus `refresh: "queued"`.
   *
   * @throws {@link LocationsApi.RefreshLocationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PrismaReviewsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refreshLocation(
    request: LocationsApi.RefreshLocationRequest,
    options?: RequestOptions,
  ): ApiPromise<LocationRefresh, LocationsApi.RefreshLocationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/locations/{id}/refresh"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: locationRefreshSchema },
        errorFactory: LocationsApi.RefreshLocationError,
      },
      options,
    );
  }
}

export namespace LocationsApi {
  export type GetLocationRequest = {
    /** Location ID (`loc_…`). */
    id: string;
  };

  export class GetLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLocationError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class ListLocationsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLocationsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type RefreshLocationRequest = {
    /** Location ID (`loc_…`). */
    id: string;
  };

  export class RefreshLocationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RefreshLocationError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 503, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
