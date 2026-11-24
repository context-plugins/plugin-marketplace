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

export class WaterLevels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Water Levels
   *
   * @remarks
   * Real-time US river levels — gage height + streamflow from USGS (a keyless public-domain
   * source): by state, USGS site number(s), or a curated set of major rivers. Rising gage = flood
   * risk; unusually low flow = drought. Each reading carries its USGS observation time. (Requires
   * API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link WaterLevels.WaterLevelsWaterLevelsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  waterLevelsWaterLevelsGet(
    request: WaterLevels.WaterLevelsWaterLevelsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, WaterLevels.WaterLevelsWaterLevelsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/water-levels"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "site", value: request.site, schema: s.optional(s.string()) },
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
        errorFactory: WaterLevels.WaterLevelsWaterLevelsGetError,
      },
      options,
    );
  }
}

export namespace WaterLevels {
  export type WaterLevelsWaterLevelsGetRequest = {
    /** 2-letter US state code, e.g. TX, CA (optional) */
    state?: string;
    /** USGS site number(s), comma-separated (optional) */
    site?: string;
    /** @default 20 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const waterLevelsWaterLevelsGetRequestSchema: Schema<WaterLevelsWaterLevelsGetRequest> =
    s.lazySchema(() =>
      s.object<WaterLevelsWaterLevelsGetRequest>({
        state: s.optional(s.string()),
        site: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.lte(100)), 20),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
    );

  export class WaterLevelsWaterLevelsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<WaterLevelsWaterLevelsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
