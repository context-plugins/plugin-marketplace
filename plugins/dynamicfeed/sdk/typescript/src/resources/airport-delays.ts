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

export class AirportDelays {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Airport Delays
   *
   * @remarks
   * Live FAA airport delays, ground stops, closures & ground-delay programs (US National Airspace
   * System — keyless source). Empty/short list = airspace running normally. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link AirportDelays.AirportDelaysAirportDelaysGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  airportDelaysAirportDelaysGet(
    request: AirportDelays.AirportDelaysAirportDelaysGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, AirportDelays.AirportDelaysAirportDelaysGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/airport-delays"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "airport", value: request.airport, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 60) },
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
        errorFactory: AirportDelays.AirportDelaysAirportDelaysGetError,
      },
      options,
    );
  }
}

export namespace AirportDelays {
  export type AirportDelaysAirportDelaysGetRequest = {
    /** 3-letter airport code, e.g. LGA, LAX (optional) */
    airport?: string;
    /** @default 60 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const airportDelaysAirportDelaysGetRequestSchema: Schema<AirportDelaysAirportDelaysGetRequest> =
    s.lazySchema(() =>
      s.object<AirportDelaysAirportDelaysGetRequest>({
        airport: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.lte(200)), 60),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
    );

  export class AirportDelaysAirportDelaysGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AirportDelaysAirportDelaysGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
