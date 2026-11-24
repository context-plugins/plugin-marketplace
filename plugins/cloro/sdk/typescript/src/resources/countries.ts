import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  authenticationErrorCloroDevCountriesApiSchema,
  type AuthenticationErrorCloroDevCountriesApi,
} from "../models/authentication-error-cloro-dev-countries-api.js";
import {
  internalErrorCloroDevCountriesApiSchema,
  type InternalErrorCloroDevCountriesApi,
} from "../models/internal-error-cloro-dev-countries-api.js";
import { modelSchema, type Model } from "../models/model.js";
import {
  notFoundErrorCloroDevCountriesApiSchema,
  type NotFoundErrorCloroDevCountriesApi,
} from "../models/not-found-error-cloro-dev-countries-api.js";
import {
  rateLimitErrorCloroDevCountriesApiSchema,
  type RateLimitErrorCloroDevCountriesApi,
} from "../models/rate-limit-error-cloro-dev-countries-api.js";
import {
  validationErrorCloroDevCountriesApiSchema,
  type ValidationErrorCloroDevCountriesApi,
} from "../models/validation-error-cloro-dev-countries-api.js";
import type { Servers } from "../servers.js";

export class Countries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List of countries
   *
   * @remarks
   * Returns a list of all supported ISO 3166-1 alpha-2 country codes. Can be filtered by model to
   * get countries available for specific AI providers.
   *
   * @returns List of supported country codes
   *
   * @throws {@link Countries.GetCountriesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCountries(
    request: Countries.GetCountriesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<string[], Countries.GetCountriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/countries"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "model", value: request.model, schema: s.optional(s.lazy(() => modelSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.string()) },
        errorFactory: Countries.GetCountriesError,
      },
      options,
    );
  }
}

export namespace Countries {
  export type GetCountriesRequest = {
    /** Filter countries available for a specific model. Omit to return all supported countries. */
    model?: Model;
  };

  export class GetCountriesError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevCountriesApi", ValidationErrorCloroDevCountriesApi>
      | Declared<"authenticationErrorCloroDevCountriesApi", AuthenticationErrorCloroDevCountriesApi>
      | Declared<"notFoundErrorCloroDevCountriesApi", NotFoundErrorCloroDevCountriesApi>
      | Declared<"rateLimitErrorCloroDevCountriesApi", RateLimitErrorCloroDevCountriesApi>
      | Declared<"internalErrorCloroDevCountriesApi", InternalErrorCloroDevCountriesApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCountriesError> = [
      {
        on: 400,
        kind: "validationErrorCloroDevCountriesApi",
        decode: { kind: "json", schema: validationErrorCloroDevCountriesApiSchema },
      },
      {
        on: 401,
        kind: "authenticationErrorCloroDevCountriesApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevCountriesApiSchema },
      },
      {
        on: 404,
        kind: "notFoundErrorCloroDevCountriesApi",
        decode: { kind: "json", schema: notFoundErrorCloroDevCountriesApiSchema },
      },
      {
        on: 429,
        kind: "rateLimitErrorCloroDevCountriesApi",
        decode: { kind: "json", schema: rateLimitErrorCloroDevCountriesApiSchema },
      },
      {
        on: 500,
        kind: "internalErrorCloroDevCountriesApi",
        decode: { kind: "json", schema: internalErrorCloroDevCountriesApiSchema },
      },
    ];
  }
}
