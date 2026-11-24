import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class InternetOutages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Internet Outages
   *
   * @remarks
   * Live BGP routing health for a network resource from RIPEstat (RIPE NCC). Global visibility +
   * outage signal (healthy/degraded/outage) — a sharp visibility drop = the network is losing
   * global reachability. The clean, redistributable RIPEstat replacement for CAIDA. (Requires API
   * key.)
   *
   * @returns Successful Response
   *
   * @throws {@link InternetOutages.InternetOutagesInternetOutagesGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  internetOutagesInternetOutagesGet(
    request: InternetOutages.InternetOutagesInternetOutagesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, InternetOutages.InternetOutagesInternetOutagesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/internet-outages"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "resource", value: request.resource, schema: s.optional(s.string()) }],
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
        errorFactory: InternetOutages.InternetOutagesInternetOutagesGetError,
      },
      options,
    );
  }
}

export namespace InternetOutages {
  export type InternetOutagesInternetOutagesGetRequest = {
    /** an ASN (AS3215), an IP (8.8.8.8), or a prefix (193.0.0.0/22) */
    resource?: string;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class InternetOutagesInternetOutagesGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InternetOutagesInternetOutagesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
