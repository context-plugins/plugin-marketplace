import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { stateSchema, type State } from "../models/unions/state.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Wildfires {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Wildfires
   *
   * @remarks
   * Active US wildfires (NIFC WFIGS) — incident name, size in acres, % contained, cause, state and
   * location. The 'how big / how contained' detail hotspot feeds can't give. Largest first.
   * (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Wildfires.WildfiresWildfiresGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  wildfiresWildfiresGet(
    request: Wildfires.WildfiresWildfiresGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Wildfires.WildfiresWildfiresGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/wildfires"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "state", value: request.state, schema: s.optional(s.lazy(() => stateSchema)) },
          {
            name: "only_uncontained",
            value: request.onlyUncontained,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "min_acres", value: request.minAcres, schema: s.defaulted(s.float64(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
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
        errorFactory: Wildfires.WildfiresWildfiresGetError,
      },
      options,
    );
  }
}

export namespace Wildfires {
  export type WildfiresWildfiresGetRequest = {
    /** filter to a US state, e.g. CA, TX (2-letter) */
    state?: State;
    /** only fires below 100% containment @default false */
    onlyUncontained?: boolean;
    /** minimum incident size in acres @default 0 */
    minAcres?: number;
    /** @default 25 */
    limit?: number;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export const wildfiresWildfiresGetRequestSchema: Schema<WildfiresWildfiresGetRequest> = s.lazySchema(() =>
    s.object<WildfiresWildfiresGetRequest>({
      state: s.optional(s.lazy(() => stateSchema)),
      onlyUncontained: s.defaulted(s.boolean(), false),
      minAcres: s.defaulted(s.float64().check(s.gte(0)), 0),
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      xApiKey: s.optional(s.lazy(() => xApiKeySchema)),
      xRapidapiProxySecret: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
      xRapidapiUser: s.optional(s.lazy(() => xRapidapiUserSchema)),
    }),
  );

  export class WildfiresWildfiresGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<WildfiresWildfiresGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
