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

export class TreasuryYields {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Treasury Yields
   *
   * @remarks
   * US Treasury daily par yield curve + 10Y-2Y / 10Y-3M spreads (the recession signal). Keyless
   * source, US public domain. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link TreasuryYields.TreasuryYieldsTreasuryYieldsGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  treasuryYieldsTreasuryYieldsGet(
    request: TreasuryYields.TreasuryYieldsTreasuryYieldsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, TreasuryYields.TreasuryYieldsTreasuryYieldsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/treasury-yields"),
        auth: noneAuth,
        pathParams: [],
        query: [],
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
        errorFactory: TreasuryYields.TreasuryYieldsTreasuryYieldsGetError,
      },
      options,
    );
  }
}

export namespace TreasuryYields {
  export type TreasuryYieldsTreasuryYieldsGetRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class TreasuryYieldsTreasuryYieldsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<TreasuryYieldsTreasuryYieldsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
