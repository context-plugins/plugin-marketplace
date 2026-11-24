import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  authenticationErrorCloroDevCreditsApiSchema,
  type AuthenticationErrorCloroDevCreditsApi,
} from "../models/authentication-error-cloro-dev-credits-api.js";
import { creditsResponseSchema, type CreditsResponse } from "../models/credits-response.js";
import {
  internalErrorCloroDevCreditsApiSchema,
  type InternalErrorCloroDevCreditsApi,
} from "../models/internal-error-cloro-dev-credits-api.js";
import {
  rateLimitErrorCloroDevCreditsApiSchema,
  type RateLimitErrorCloroDevCreditsApi,
} from "../models/rate-limit-error-cloro-dev-credits-api.js";
import type { Servers } from "../servers.js";

export class Credits {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get credit balance
   *
   * @remarks
   * Read your organization's current credit balance and billing cycle. Lets you observe your
   * balance programmatically — including from async-only workloads — without making a sync
   * /v1/monitor/* request just to inspect the X-Credits-Remaining header. The balance is cached and
   * can lag by up to 60 seconds. Queued async tasks are re-checked against your live balance when
   * the scheduler picks them up.
   *
   * @returns Current credit balance and billing cycle.
   *
   * @throws {@link Credits.GetCreditsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CloroError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCredits(options?: RequestOptions): ApiPromise<CreditsResponse, Credits.GetCreditsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/credits"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: creditsResponseSchema },
        errorFactory: Credits.GetCreditsError,
      },
      options,
    );
  }
}

export namespace Credits {
  export class GetCreditsError extends ApiError {
    declare readonly payload:
      | Declared<"authenticationErrorCloroDevCreditsApi", AuthenticationErrorCloroDevCreditsApi>
      | Declared<"rateLimitErrorCloroDevCreditsApi", RateLimitErrorCloroDevCreditsApi>
      | Declared<"internalErrorCloroDevCreditsApi", InternalErrorCloroDevCreditsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCreditsError> = [
      {
        on: 401,
        kind: "authenticationErrorCloroDevCreditsApi",
        decode: { kind: "json", schema: authenticationErrorCloroDevCreditsApiSchema },
      },
      {
        on: 429,
        kind: "rateLimitErrorCloroDevCreditsApi",
        decode: { kind: "json", schema: rateLimitErrorCloroDevCreditsApiSchema },
      },
      {
        on: 500,
        kind: "internalErrorCloroDevCreditsApi",
        decode: { kind: "json", schema: internalErrorCloroDevCreditsApiSchema },
      },
    ];
  }
}
