import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiTestLoginResponseSchema,
  type PublicApiTestLoginResponse,
} from "../models/public-api-test-login-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Utility Endpoints
 */
export class Utility {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Test connection
   *
   * @remarks
   * This endpoint enables you to test the API connection to your organization's Soda Cloud account.
   * Use this endpoint to verify that the authentication and authorization details are accurate and
   * the API is ready to accept calls.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Any Soda Cloud user in your organization may execute this query.
   *
   * ## Tags
   *
   * `Utility`
   *
   * ## Rate limiting
   *
   * 10 requests/10 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Utility.GetApiV1TestLoginError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1TestLogin(
    options?: RequestOptions,
  ): ApiPromise<PublicApiTestLoginResponse, Utility.GetApiV1TestLoginError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/test-login"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiTestLoginResponseSchema },
        errorFactory: Utility.GetApiV1TestLoginError,
      },
      options,
    );
  }
}

export namespace Utility {
  export class GetApiV1TestLoginError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1TestLoginError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
