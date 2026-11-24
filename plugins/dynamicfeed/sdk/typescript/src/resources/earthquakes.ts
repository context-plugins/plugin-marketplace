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

export class Earthquakes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Earthquakes
   *
   * @remarks
   * Recent earthquakes worldwide (USGS) — magnitude, depth, location, PAGER impact alert, tsunami
   * flag, felt reports and significance. Sorted by impact then magnitude. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Earthquakes.EarthquakesEarthquakesGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  earthquakesEarthquakesGet(
    request: Earthquakes.EarthquakesEarthquakesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Earthquakes.EarthquakesEarthquakesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/earthquakes"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "min_magnitude", value: request.minMagnitude, schema: s.defaulted(s.float64(), 2.5) },
          { name: "period", value: request.period, schema: s.defaulted(s.string(), "day") },
          { name: "tsunami_only", value: request.tsunamiOnly, schema: s.defaulted(s.boolean(), false) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 30) },
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
        errorFactory: Earthquakes.EarthquakesEarthquakesGetError,
      },
      options,
    );
  }
}

export namespace Earthquakes {
  export type EarthquakesEarthquakesGetRequest = {
    /** minimum magnitude @default 2.5 */
    minMagnitude?: number;
    /** hour | day | week | month @default "day" */
    period?: string;
    /** only quakes flagged with tsunami potential @default false */
    tsunamiOnly?: boolean;
    /** @default 30 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const earthquakesEarthquakesGetRequestSchema: Schema<EarthquakesEarthquakesGetRequest> =
    s.lazySchema(() =>
      s.object<EarthquakesEarthquakesGetRequest>({
        minMagnitude: s.defaulted(s.float64().check(s.gte(0)), 2.5),
        period: s.defaulted(s.string(), "day"),
        tsunamiOnly: s.defaulted(s.boolean(), false),
        limit: s.defaulted(s.int().check(s.lte(200)), 30),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
    );

  export class EarthquakesEarthquakesGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<EarthquakesEarthquakesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
