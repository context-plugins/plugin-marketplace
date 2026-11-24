import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationErrorCloroDevCountriesApiSchema,
  type AuthenticationErrorCloroDevCountriesApi,
} from "../models/authentication-error-cloro-dev-countries-api.js";
import {
  internalErrorCloroDevCountriesApiSchema,
  type InternalErrorCloroDevCountriesApi,
} from "../models/internal-error-cloro-dev-countries-api.js";
import {
  rateLimitErrorCloroDevStatesApiSchema,
  type RateLimitErrorCloroDevStatesApi,
} from "../models/rate-limit-error-cloro-dev-states-api.js";
import { v1StatesResponseSchema, type V1StatesResponse } from "../models/v1-states-response.js";
import {
  validationErrorCloroDevCountriesApiSchema,
  type ValidationErrorCloroDevCountriesApi,
} from "../models/validation-error-cloro-dev-countries-api.js";
import type { Servers } from "../servers.js";

export class States {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List of states
   *
   * @remarks
   * Returns a list of US states supported for state-level geo-targeting. Only US is currently
   * supported — other country values return an empty array.
   *
   * @returns List of supported states
   *
   * @throws {@link States.GetStatesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStates(
    request: States.GetStatesRequest,
    options?: RequestOptions,
  ): ApiPromise<V1StatesResponse[], States.GetStatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/states"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [{ name: "country", value: request.country, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => v1StatesResponseSchema)) },
        errorFactory: States.GetStatesError,
      },
      options,
    );
  }
}

export namespace States {
  export type GetStatesRequest = {
    /** ISO 3166-1 alpha-2 country code. Only "US" returns results. */
    country: string;
  };

  export const getStatesRequestSchema: Schema<GetStatesRequest> = s.lazySchema(() =>
    s.object<GetStatesRequest>({
      country: s.string().check(s.minLength(2), s.maxLength(2), s.pattern("^[A-Z]{2}$")),
    }),
  );

  export class GetStatesError extends ApiError {
    declare readonly payload:
      | Declared<"validationErrorCloroDevCountriesApi", ValidationErrorCloroDevCountriesApi>
      | Declared<"authenticationErrorCloroDevCountriesApi", AuthenticationErrorCloroDevCountriesApi>
      | Declared<"rateLimitErrorCloroDevStatesApi", RateLimitErrorCloroDevStatesApi>
      | Declared<"internalErrorCloroDevCountriesApi", InternalErrorCloroDevCountriesApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStatesError> = [
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
        on: 429,
        kind: "rateLimitErrorCloroDevStatesApi",
        decode: { kind: "json", schema: rateLimitErrorCloroDevStatesApiSchema },
      },
      {
        on: 500,
        kind: "internalErrorCloroDevCountriesApi",
        decode: { kind: "json", schema: internalErrorCloroDevCountriesApiSchema },
      },
    ];
  }
}
