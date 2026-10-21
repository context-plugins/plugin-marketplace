import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { organizationSchema, type Organization } from "../models/organization.js";
import type { Servers } from "../servers.js";

/**
 * Organization management operations
 */
export class Organizations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get current organization
   *
   * @remarks
   * Retrieve details about the authenticated user's organization.
   *
   * **Overview:**
   *
   * This endpoint returns the organization document for the current user's org, including profile
   * data and configuration.
   *
   * **Response Includes:**
   *
   * - Organization profile (registeredName, shortName, contactEmail, domain)
   * - Account type
   * - Onboarding status
   * - Permanent address
   * - Creation and modification timestamps
   *
   * **Use Cases:**
   *
   * - Organization profile pages
   * - Settings and configuration screens
   *
   * @returns Organization details retrieved successfully
   *
   * @throws {@link Organizations.GetCurrentOrganizationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrentOrganization(
    options?: RequestOptions,
  ): ApiPromise<Organization, Organizations.GetCurrentOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/org"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: organizationSchema },
        errorFactory: Organizations.GetCurrentOrganizationError,
      },
      options,
    );
  }
}

export namespace Organizations {
  export class GetCurrentOrganizationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCurrentOrganizationError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
