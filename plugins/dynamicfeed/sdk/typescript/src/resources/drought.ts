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

export class Drought {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Drought
   *
   * @remarks
   * US drought severity — % of area in each D0-D4 class by week (U.S. Drought Monitor — keyless).
   * National or by state; a commodity-market mover and a hazard signal. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Drought.DroughtDroughtGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  droughtDroughtGet(
    request: Drought.DroughtDroughtGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Drought.DroughtDroughtGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/drought"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "area", value: request.area, schema: s.defaulted(s.string(), "total") },
          { name: "weeks", value: request.weeks, schema: s.defaulted(s.int(), 6) },
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
        errorFactory: Drought.DroughtDroughtGetError,
      },
      options,
    );
  }
}

export namespace Drought {
  export type DroughtDroughtGetRequest = {
    /** 'total' (US national) or a state FIPS code @default "total" */
    area?: string;
    /** @default 6 */
    weeks?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const droughtDroughtGetRequestSchema: Schema<DroughtDroughtGetRequest> = s.lazySchema(() =>
    s.object<DroughtDroughtGetRequest>({
      area: s.defaulted(s.string(), "total"),
      weeks: s.defaulted(s.int().check(s.gte(1), s.lte(52)), 6),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class DroughtDroughtGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DroughtDroughtGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
