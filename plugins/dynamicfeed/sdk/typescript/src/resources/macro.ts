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

export class Macro {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Global Macro
   *
   * @remarks
   * Worldwide macro indicators for any country (World Bank Open Data, CC-BY) — globalizes the
   * China-only macro. (Requires API key.)
   *
   * @returns Successful Response
   *
   * @throws {@link Macro.GlobalMacroMacroGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  globalMacroMacroGet(
    request: Macro.GlobalMacroMacroGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Macro.GlobalMacroMacroGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/macro"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "indicator", value: request.indicator, schema: s.defaulted(s.string(), "all") },
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
        errorFactory: Macro.GlobalMacroMacroGetError,
      },
      options,
    );
  }
}

export namespace Macro {
  export type GlobalMacroMacroGetRequest = {
    /** ISO code (US, GB, DE, IN, BR, JP, CN) or country name */
    country?: string;
    /**
     * gdp | gdp_growth | cpi_inflation | unemployment | population | exports | imports |
     * current_account | fx_reserves | fdi | govt_debt_pct_gdp | all
     *
     * @default "all"
     */
    indicator?: string;
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class GlobalMacroMacroGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GlobalMacroMacroGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
