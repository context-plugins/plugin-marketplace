import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { assetClassSchema, type AssetClass } from "../models/unions/asset-class.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Movers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Movers
   *
   * @remarks
   * DERIVED signal — biggest 24h gainers or losers across the markets we track. Computed from
   * Dynamic Feed's own data & recorded history (not a raw source you can scrape). (Requires API
   * key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Movers.MoversMoversGetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  moversMoversGet(
    request: Movers.MoversMoversGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Movers.MoversMoversGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/movers"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "direction", value: request.direction, schema: s.defaulted(s.string(), "gainers") },
          {
            name: "asset_class",
            value: request.assetClass,
            schema: s.optional(s.lazy(() => assetClassSchema)),
          },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 15) },
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
        errorFactory: Movers.MoversMoversGetError,
      },
      options,
    );
  }
}

export namespace Movers {
  export type MoversMoversGetRequest = {
    /** gainers | losers @default "gainers" */
    direction?: string;
    /** crypto | stock | index | forex | commodity | metal */
    assetClass?: AssetClass;
    /** @default 15 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const moversMoversGetRequestSchema: Schema<MoversMoversGetRequest> = s.lazySchema(() =>
    s.object<MoversMoversGetRequest>({
      direction: s.defaulted(s.string(), "gainers"),
      assetClass: s.optional(s.lazy(() => assetClassSchema)),
      limit: s.defaulted(s.int().check(s.lte(100)), 15),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class MoversMoversGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<MoversMoversGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
