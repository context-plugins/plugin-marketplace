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

export class Satellites {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Satellites
   *
   * @remarks
   * Satellite/constellation catalog (Starlink, GPS, stations…) with altitude, orbital period, and a
   * derived light-speed round-trip latency to ground — the physics floor for orbital networks.
   * (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Satellites.SatellitesSatellitesGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  satellitesSatellitesGet(
    request: Satellites.SatellitesSatellitesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Satellites.SatellitesSatellitesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/satellites"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "group", value: request.group, schema: s.defaulted(s.string(), "starlink") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
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
        errorFactory: Satellites.SatellitesSatellitesGetError,
      },
      options,
    );
  }
}

export namespace Satellites {
  export type SatellitesSatellitesGetRequest = {
    /** starlink, stations, gps-ops, oneweb, galileo, weather, active, geo @default "starlink" */
    group?: string;
    /** @default 25 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const satellitesSatellitesGetRequestSchema: Schema<SatellitesSatellitesGetRequest> = s.lazySchema(
    () =>
      s.object<SatellitesSatellitesGetRequest>({
        group: s.defaulted(s.string(), "starlink"),
        limit: s.defaulted(s.int().check(s.lte(200)), 25),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
  );

  export class SatellitesSatellitesGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<SatellitesSatellitesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
