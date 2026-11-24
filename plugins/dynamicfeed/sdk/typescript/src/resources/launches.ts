import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { providerSchema, type Provider } from "../models/unions/provider.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Launches {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Launches
   *
   * @remarks
   * Upcoming rocket launches worldwide — name, provider, rocket, time, site. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Launches.LaunchesLaunchesGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  launchesLaunchesGet(
    request: Launches.LaunchesLaunchesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Launches.LaunchesLaunchesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/launches"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "provider", value: request.provider, schema: s.optional(s.lazy(() => providerSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 8) },
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
        errorFactory: Launches.LaunchesLaunchesGetError,
      },
      options,
    );
  }
}

export namespace Launches {
  export type LaunchesLaunchesGetRequest = {
    /** filter by provider, e.g. SpaceX */
    provider?: Provider;
    /** @default 8 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const launchesLaunchesGetRequestSchema: Schema<LaunchesLaunchesGetRequest> = s.lazySchema(() =>
    s.object<LaunchesLaunchesGetRequest>({
      provider: s.optional(s.lazy(() => providerSchema)),
      limit: s.defaulted(s.int().check(s.lte(30)), 8),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class LaunchesLaunchesGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<LaunchesLaunchesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
