import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { callsignSchema, type Callsign } from "../models/unions/callsign.js";
import { regionSchema, type Region } from "../models/unions/region.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Flights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Flights
   *
   * @remarks
   * Live aircraft right now — real-time positions from adsb.lol community ADS-B (CC0). Filter by
   * region preset and/or callsign. Airborne flights first. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Flights.FlightsFlightsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  flightsFlightsGet(
    request: Flights.FlightsFlightsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Flights.FlightsFlightsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/flights"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "region", value: request.region, schema: s.optional(s.lazy(() => regionSchema)) },
          { name: "callsign", value: request.callsign, schema: s.optional(s.lazy(() => callsignSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
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
        errorFactory: Flights.FlightsFlightsGetError,
      },
      options,
    );
  }
}

export namespace Flights {
  export type FlightsFlightsGetRequest = {
    /**
     * region preset: morocco, spain, london, newyork, paris, tokyo, dubai, europe, usa, asia, ...
     */
    region?: Region;
    /** filter by flight callsign, e.g. BAW123 */
    callsign?: Callsign;
    /** @default 50 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const flightsFlightsGetRequestSchema: Schema<FlightsFlightsGetRequest> = s.lazySchema(() =>
    s.object<FlightsFlightsGetRequest>({
      region: s.optional(s.lazy(() => regionSchema)),
      callsign: s.optional(s.lazy(() => callsignSchema)),
      limit: s.defaulted(s.int().check(s.lte(200)), 50),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class FlightsFlightsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<FlightsFlightsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
