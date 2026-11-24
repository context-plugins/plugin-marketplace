import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { hasRemoteSchema, type HasRemote } from "../models/unions/has-remote.js";
import { minStarsSchema, type MinStars } from "../models/unions/min-stars.js";
import { qSchema, type Q } from "../models/unions/q.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class ServersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Servers
   *
   * @remarks
   * Search the MCP server registry — find AI agent tools. Most-starred first. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link ServersApi.ServersServersGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serversServersGet(
    request: ServersApi.ServersServersGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ServersApi.ServersServersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/servers"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.lazy(() => qSchema)) },
          { name: "has_remote", value: request.hasRemote, schema: s.optional(s.lazy(() => hasRemoteSchema)) },
          { name: "min_stars", value: request.minStars, schema: s.optional(s.lazy(() => minStarsSchema)) },
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
        errorFactory: ServersApi.ServersServersGetError,
      },
      options,
    );
  }
}

export namespace ServersApi {
  export type ServersServersGetRequest = {
    /** match server name/description */
    q?: Q;
    /** only servers with a hosted/remote endpoint */
    hasRemote?: HasRemote;
    /** minimum GitHub stars */
    minStars?: MinStars;
    /** @default 50 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const serversServersGetRequestSchema: Schema<ServersServersGetRequest> = s.lazySchema(() =>
    s.object<ServersServersGetRequest>({
      q: s.optional(s.lazy(() => qSchema)),
      hasRemote: s.optional(s.lazy(() => hasRemoteSchema)),
      minStars: s.optional(s.lazy(() => minStarsSchema)),
      limit: s.defaulted(s.int().check(s.lte(200)), 50),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class ServersServersGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ServersServersGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
