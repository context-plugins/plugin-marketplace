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

export class WeatherAlerts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Weather Alerts
   *
   * @remarks
   * Active US NWS weather alerts/warnings — life-safety watches/warnings/advisories. (Requires API
   * key.)
   *
   * @returns Successful Response
   *
   * @throws {@link WeatherAlerts.WeatherAlertsWeatherAlertsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  weatherAlertsWeatherAlertsGet(
    request: WeatherAlerts.WeatherAlertsWeatherAlertsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, WeatherAlerts.WeatherAlertsWeatherAlertsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/weather-alerts"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "area", value: request.area, schema: s.optional(s.string()) },
          { name: "event", value: request.event, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
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
        errorFactory: WeatherAlerts.WeatherAlertsWeatherAlertsGetError,
      },
      options,
    );
  }
}

export namespace WeatherAlerts {
  export type WeatherAlertsWeatherAlertsGetRequest = {
    /** 2-letter US state (CA, TX...) or marine zone; blank = nationwide Severe/Extreme */
    area?: string;
    /** filter by event type, e.g. Flood, Tornado, Heat */
    event?: string;
    /** @default 20 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const weatherAlertsWeatherAlertsGetRequestSchema: Schema<WeatherAlertsWeatherAlertsGetRequest> =
    s.lazySchema(() =>
      s.object<WeatherAlertsWeatherAlertsGetRequest>({
        area: s.optional(s.string()),
        event: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 20),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
    );

  export class WeatherAlertsWeatherAlertsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<WeatherAlertsWeatherAlertsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
