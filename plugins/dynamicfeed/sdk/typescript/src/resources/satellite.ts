import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Satellite {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Satellite
   *
   * @remarks
   * Real-time position of ANY satellite by NORAD id — true SGP4 propagation of the latest live
   * CelesTrak TLE to the current instant: exact lat/lon, altitude, velocity, ground-footprint
   * radius, the speed-of-light latency floor, and the TLE's age. Optionally a forward ground-track.
   * (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Satellite.SatelliteSatelliteGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  satelliteSatelliteGet(
    request: Satellite.SatelliteSatelliteGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Satellite.SatelliteSatelliteGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/satellite"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "norad_id", value: request.noradId, schema: s.int() },
          { name: "track_minutes", value: request.trackMinutes, schema: s.defaulted(s.int(), 0) },
          { name: "step_seconds", value: request.stepSeconds, schema: s.defaulted(s.int(), 60) },
        ],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Satellite.SatelliteSatelliteGetError,
      },
      options,
    );
  }
}

export namespace Satellite {
  export type SatelliteSatelliteGetRequest = {
    /** NORAD catalog number, e.g. 25544 (ISS), 20580 (Hubble), 44714 (a Starlink) */
    noradId: number;
    /** also return a predicted ground-track this many minutes ahead (0 = none) @default 0 */
    trackMinutes?: number;
    /** ground-track sampling step in seconds @default 60 */
    stepSeconds?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const satelliteSatelliteGetRequestSchema: Schema<SatelliteSatelliteGetRequest> = s.lazySchema(() =>
    s.object<SatelliteSatelliteGetRequest>({
      noradId: s.int(),
      trackMinutes: s.defaulted(s.int().check(s.gte(0), s.lte(360)), 0),
      stepSeconds: s.defaulted(s.int().check(s.gte(10), s.lte(600)), 60),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class SatelliteSatelliteGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SatelliteSatelliteGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
