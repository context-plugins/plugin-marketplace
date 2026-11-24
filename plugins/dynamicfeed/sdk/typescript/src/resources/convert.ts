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

export class Convert {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Convert Ep
   *
   * @remarks
   * Convert money between fiat currencies at the LIVE ECB reference rate. Crypto & precious-metal
   * conversion is coming in a future release. (Requires API key; keyless over MCP.)
   *
   * @returns Successful Response
   *
   * @throws {@link Convert.ConvertEpConvertGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  convertEpConvertGet(
    request: Convert.ConvertEpConvertGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Convert.ConvertEpConvertGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/convert"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "amount", value: request.amount, schema: s.defaulted(s.float64(), 1) },
          { name: "from_currency", value: request.fromCurrency, schema: s.defaulted(s.string(), "USD") },
          { name: "to_currency", value: request.toCurrency, schema: s.defaulted(s.string(), "USD") },
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
        errorFactory: Convert.ConvertEpConvertGetError,
      },
      options,
    );
  }
}

export namespace Convert {
  export type ConvertEpConvertGetRequest = {
    /** amount to convert @default 1 */
    amount?: number;
    /** e.g. EUR, GBP, JPY @default "USD" */
    fromCurrency?: string;
    /** e.g. USD, AUD, CHF @default "USD" */
    toCurrency?: string;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class ConvertEpConvertGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ConvertEpConvertGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
