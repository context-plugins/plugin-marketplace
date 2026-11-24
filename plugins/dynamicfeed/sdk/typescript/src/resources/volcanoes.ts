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

export class Volcanoes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Volcanoes Ep
   *
   * @remarks
   * Current US volcano alert levels (USGS Volcano Hazards Program, public domain). 'elevated' =
   * only volcanoes at YELLOW/ORANGE/RED or ADVISORY/WATCH/WARNING; 'all' = every USGS-monitored
   * volcano. Each carries the ground alert level, aviation colour code and the official notice URL.
   * SCOPE: US volcanoes only — the global Smithsonian GVP dataset is licensed non-commercial.
   * (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Volcanoes.VolcanoesEpVolcanoesGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  volcanoesEpVolcanoesGet(
    request: Volcanoes.VolcanoesEpVolcanoesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Volcanoes.VolcanoesEpVolcanoesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/volcanoes"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "status", value: request.status, schema: s.defaulted(s.string(), "elevated") },
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
        errorFactory: Volcanoes.VolcanoesEpVolcanoesGetError,
      },
      options,
    );
  }
}

export namespace Volcanoes {
  export type VolcanoesEpVolcanoesGetRequest = {
    /** 'elevated' (default — only active alerts) or 'all' @default "elevated" */
    status?: string;
    /** @default 50 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const volcanoesEpVolcanoesGetRequestSchema: Schema<VolcanoesEpVolcanoesGetRequest> = s.lazySchema(
    () =>
      s.object<VolcanoesEpVolcanoesGetRequest>({
        status: s.defaulted(s.string(), "elevated"),
        limit: s.defaulted(s.int().check(s.lte(200)), 50),
        xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
        xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
        xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
      }),
  );

  export class VolcanoesEpVolcanoesGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<VolcanoesEpVolcanoesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
