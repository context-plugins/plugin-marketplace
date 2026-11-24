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

export class Tides {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Tides Ep
   *
   * @remarks
   * Current water level + next high/low tides for a US coastal station (NOAA CO-OPS, public
   * domain). SCOPE: US stations only. Not for navigation — confirm against official NOAA tide
   * tables. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Tides.TidesEpTidesGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  tidesEpTidesGet(
    request: Tides.TidesEpTidesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tides.TidesEpTidesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/tides"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "station", value: request.station, schema: s.optional(s.string()) },
          { name: "location", value: request.location, schema: s.optional(s.string()) },
          { name: "units", value: request.units, schema: s.defaulted(s.string(), "english") },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 6) },
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
        errorFactory: Tides.TidesEpTidesGetError,
      },
      options,
    );
  }
}

export namespace Tides {
  export type TidesEpTidesGetRequest = {
    /** NOAA station id, e.g. 9414290 */
    station?: string;
    /** or a preset: san francisco, new york, boston, seattle, honolulu, … */
    location?: string;
    /** english (feet) | metric @default "english" */
    units?: string;
    /** @default 6 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const tidesEpTidesGetRequestSchema: Schema<TidesEpTidesGetRequest> = s.lazySchema(() =>
    s.object<TidesEpTidesGetRequest>({
      station: s.optional(s.string()),
      location: s.optional(s.string()),
      units: s.defaulted(s.string(), "english"),
      limit: s.defaulted(s.int().check(s.lte(20)), 6),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class TidesEpTidesGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<TidesEpTidesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
