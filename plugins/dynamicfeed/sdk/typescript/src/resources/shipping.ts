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

export class Shipping {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Shipping Ep
   *
   * @remarks
   * Global shipping & maritime: daily ship transits through the world's 28 chokepoints (Suez,
   * Panama, Hormuz, Malacca, Taiwan...) via IMF PortWatch, the ~2,065-port global registry, and
   * LIVE Baltic vessel positions (AIS, Digitraffic) enriched with ship name/type/destination.
   * (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Shipping.ShippingEpShippingGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  shippingEpShippingGet(
    request: Shipping.ShippingEpShippingGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Shipping.ShippingEpShippingGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/shipping"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "scope", value: request.scope, schema: s.defaulted(s.string(), "chokepoints") },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "region", value: request.region, schema: s.defaulted(s.string(), "baltic") },
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
        errorFactory: Shipping.ShippingEpShippingGetError,
      },
      options,
    );
  }
}

export namespace Shipping {
  export type ShippingEpShippingGetRequest = {
    /** chokepoints | ports | vessels @default "chokepoints" */
    scope?: string;
    /** filter by name/country (chokepoints, ports) or ship name/destination (vessels) */
    query?: string;
    /**
     * Baltic preset for scope=vessels: baltic, helsinki, stockholm, kiel, gdansk, copenhagen, riga,
     * gulf-of-finland
     *
     * @default "baltic"
     */
    region?: string;
    /** @default 30 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const shippingEpShippingGetRequestSchema: Schema<ShippingEpShippingGetRequest> = s.lazySchema(() =>
    s.object<ShippingEpShippingGetRequest>({
      scope: s.defaulted(s.string(), "chokepoints"),
      query: s.optional(s.string()),
      region: s.defaulted(s.string(), "baltic"),
      limit: s.defaulted(s.int().check(s.lte(100)), 30),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class ShippingEpShippingGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ShippingEpShippingGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
