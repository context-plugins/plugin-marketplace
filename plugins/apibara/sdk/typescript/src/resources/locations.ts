import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { locationsResponseInternalSchema, type LocationsResponse } from "../models/locations-response.js";
import { platformSchema, type Platform } from "../models/platform.js";
import { Units, unitsSchema } from "../models/units.js";
import type { Servers } from "../servers.js";

/**
 * Auction facility and location search.
 */
export class Locations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List auction locations
   *
   * @remarks
   * Search Copart and IAAI auction locations by platform, state, facility ID, text query, ZIP, and
   * radius.
   *
   * @returns Paginated list of auction locations.
   *
   * @throws {@link Locations.ListAuctionLocationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAuctionLocations(
    request: Locations.ListAuctionLocationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<LocationsResponse, Locations.ListAuctionLocationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/locations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "platform", value: request.platform, schema: s.optional(s.lazy(() => platformSchema)) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "facility_id", value: request.facilityId, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "zip", value: request.zip, schema: s.optional(s.string()) },
          { name: "radius", value: request.radius, schema: s.optional(s.float64()) },
          { name: "units", value: request.units, schema: s.defaulted(unitsSchema, Units.Mi) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: locationsResponseInternalSchema },
        errorFactory: Locations.ListAuctionLocationsError,
      },
      options,
    );
  }
}

export namespace Locations {
  export type ListAuctionLocationsRequest = {
    /** Auction platform. */
    platform?: Platform;
    /** State code. */
    state?: string;
    /** Facility ID. */
    facilityId?: string;
    /** Search by facility name, city, state code, or ZIP. */
    q?: string;
    /** ZIP code for location-based search. */
    zip?: string;
    /** Search radius around ZIP. */
    radius?: number;
    /** Distance units. @default Units.Mi */
    units?: Units;
    /** Number of records per page. Maximum: 20. @default 20 */
    perPage?: number;
  };

  export const listAuctionLocationsRequestSchema: Schema<ListAuctionLocationsRequest> = s.lazySchema(() =>
    s.object<ListAuctionLocationsRequest>({
      platform: s.optional(s.lazy(() => platformSchema)),
      state: s.optional(s.string()),
      facilityId: s.optional(s.string()),
      q: s.optional(s.string()),
      zip: s.optional(s.string()),
      radius: s.optional(s.float64()),
      units: s.defaulted(unitsSchema, Units.Mi),
      perPage: s.defaulted(s.int().check(s.gte(1), s.lte(20)), 20),
    }),
  );

  export class ListAuctionLocationsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAuctionLocationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 503, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
